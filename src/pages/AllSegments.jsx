import React, { Component, Fragment } from "react";
import { MDBDataTable, MDBBox, MDBRow, MDBCol, MDBBtn } from "mdbreact";
import { Redirect, Link } from "react-router-dom";
import { connect } from "react-redux";
import moment from "moment";
import Navbar from "../components/Navbar";
import PictName from "../components/PictName";
import Loading from "../components/Loading";

import {
  doLogOut,
  doRefershSignin,
  getUserBio,
} from "../stores/actions/userAction";
import {
  getCustomerGroupList,
  getCustomerMember,
  deleteGroup,
} from "../stores/actions/customerAction";
class AllSegments extends Component {
  state = {
    modalFormDatabase: false,
    modalNewDatabase: false,
    isLoadingTable: true,
  };

  componentDidMount = async () => {
    await this.props.doRefershSignin();
    await this.props.getUserBio();
    await this.props.getCustomerGroupList();
    let groupData;
    if (this.props.match.params.segmentId) {
      await this.props.getCustomerMember(this.props.match.params.segmentId);
      groupData = await this.props.customerState.customerList;
      await this.callSegment(groupData);
    } else {
      groupData = await this.props.customerGroups;
      await this.callAllSegment(groupData);
    }
    this.setState({ isLoadingTable: false });
  };

  callAllSegment = (groupData) => {
    if (groupData) {
      this.setState({
        data: {
          columns: [
            {
              label: "Segment",
              field: "segment",
              sort: "asc",
              width: 150,
              color: "pink",
            },
            {
              label: "Tanggal Dibuat",
              field: "created_at",
              sort: "asc",
              width: 270,
            },
            {
              label: "Detail",
              field: "detail",
              sort: "asc",
              width: 270,
            },
            {
              label: "Hapus",
              field: "delete",
              sort: "asc",
              width: 270,
            },
          ],
          rows: [
            ...groupData.map((el, index) => ({
              key: index,
              segment: el.name,
              detail: (
                <p
                  style={{ color: "rgb(241, 76, 89)", cursor: "pointer" }}
                  onClick={() => this.changeRouter(el.id)}
                >
                  Detail
                </p>
              ),
              created_at: moment.utc(el.created_at).format("YYYY/MM/DD"),
              delete: (
                <MDBBtn
                  color="transparent"
                  size="xs"
                  style={{ boxShadow: "none", padding: "0", margin: "0" }}
                >
                  <i
                    className="fa fa-trash"
                    aria-hidden="true"
                    onClick={(id) => this.handleDeleteGroup(el.id)}
                    style={{ cursor: "pointer" }}
                  ></i>
                </MDBBtn>
              ),
            })),
          ],
        },
      });
    }
  };

  callSegment = (groupData) => {
    if (groupData) {
      this.setState({
        data: {
          columns: [
            {
              label: "Name",
              field: "name",
              width: 150,
              color: "pink",
            },
            {
              label: "Email",
              field: "email",
              width: 200,
            },
            {
              label: "BOD",
              field: "bod",
              width: 270,
            },
            {
              label: "Address",
              field: "address",
              width: 100,
            },
            {
              label: "Phone",
              field: "phone",
              width: 150,
            },
            {
              label: "Company",
              field: "company",
              width: 100,
            },
            {
              label: "Hapus",
              field: "delete",
              sort: "asc",
              width: 270,
            },
          ],
          rows: [
            ...groupData.map((el, index) => ({
              key: index,
              name: el.First_name + " " + el.last_name,
              email: el.email,
              bod: moment.utc(el.bod).format("YYYY/MM/DD"),
              address: el.address,
              phone: el.phone[0] !== "0" ? "0" + el.phone : el.phone,
              company: el.company,
              delete: (
                <MDBBtn
                  color="transparent"
                  size="xs"
                  style={{ boxShadow: "none", padding: "0", margin: "0" }}
                >
                  <i
                    className="fa fa-trash"
                    aria-hidden="true"
                    // onClick={(id) => this.handleDeleteGroup(el.id)}
                    style={{ cursor: "pointer" }}
                  ></i>
                </MDBBtn>
              ),
            })),
          ],
        },
      });
    }
  };

  handleBacktoList = async () => {
    this.setState({ isLoadingTable: true });
    await this.props.getCustomerGroupList();
    let groupData = await this.props.customerGroups;
    await this.callAllSegment(groupData);
    this.setState({ isLoadingTable: false });
  };

  handleDeleteGroup = async (id) => {
    var result = await window.confirm("Are you sure to delete?");
    await this.setState({ isLoadingTable: true });
    if (result) {
      await this.props.deleteGroup(id);
    }
    await this.props.getCustomerGroupList();
    let groupData = await this.props.customerGroups;
    await this.callAllSegment(groupData);
    this.setState({ isLoadingTable: false });
  };

  changeRouter = async (segmentId) => {
    await this.setState({ isLoadingTable: true });
    await this.props.getCustomerMember(segmentId);
    await this.props.history.push("/segment/" + segmentId, {
      ...this.props.draft,
    });
    let groupData = await this.props.customerState.customerList;
    await this.callSegment(groupData);
    this.setState({ isLoadingTable: false });
  };

  render() {
    if (!localStorage.getItem("isSignin")) {
      return (
        <Redirect
          to={{
            pathname: "/signin",
            state: { message: "You must sign in first!" },
          }}
        />
      );
    } else {
      let groupName = "";
      const data = this.state.data;
      if (this.props.match.params.segmentId) {
        console.log("masuk");
        if (this.props.customerGroups) {
          console.log("masuk2");
          for (let i = 0; i < this.props.customerGroups.length; i++) {
            if (
              String(this.props.customerGroups[i].id) ===
              String(this.props.match.params.segmentId)
            ) {
              groupName = this.props.customerGroups[i].name;
            }
          }
        }
      }
      // console.log(groupName)
      return (
        <MDBBox>
          <Navbar
            fontColor={"white"}
            backNav={"rgb(241, 76, 89)"}
            style={{ position: "fixed" }}
            logout={() => this.props.doLogOut()}
            bio={this.props.bio}
          />
          <MDBBox
            style={{
              padding: "0 0 1px 0",
            }}
          >
            {/* tabel */}
            <MDBRow
              style={{
                margin: "0",
              }}
            >
              <MDBCol size="2" style={{ backgroundColor: "#f14c59" }}>
                <PictName bio={this.props.bio} active={"segments"} />
              </MDBCol>
              <MDBCol size="10">
                <MDBBox
                  style={{
                    padding: "30px 15px",
                    minHeight: "100vmin",
                  }}
                >
                  {/* judul */}
                  {this.state.isLoadingTable ? (
                    <Loading />
                  ) : (
                    <Fragment>
                      <MDBBox className="d-flex justify-content-between align-items-center my-3 pb-3">
                        {this.props.match.params.segmentId ? (
                          <Fragment>
                            <span
                              className="text-left"
                              style={{
                                fontWeight: "600",
                                color: "#192e35",
                                fontSize: "28px",
                              }}
                            >
                              {groupName}
                            </span>
                            <Link
                              to="/segment-list"
                              onClick={this.handleBacktoList}
                              color="transparent"
                              style={{
                                color: "#f14c59",
                                fontSize: "16px",
                                fontWeight: "500",
                                height: "40px",
                                marginTop: "8px",
                                cursor: "pointer",
                              }}
                              className="text-capitalize px-3"
                            >
                              Back to All Segment
                            </Link>
                          </Fragment>
                        ) : (
                          false
                        )}
                      </MDBBox>

                      <MDBDataTable
                        hover
                        data={data}
                        style={{
                          backgroundColor: "white",
                        }}
                      />
                    </Fragment>
                  )}
                </MDBBox>
              </MDBCol>
            </MDBRow>
          </MDBBox>
        </MDBBox>
      );
    }
  }
}
const mapStateToProps = (state) => {
  return {
    bio: state.userState.bio,
    customerGroups: state.customerState.customerGroup,
    customerState: state.customerState,
  };
};
const mapDispatchToProps = {
  doLogOut,
  getUserBio,
  doRefershSignin,
  getCustomerGroupList,
  getCustomerMember,
  deleteGroup,
};
export default connect(mapStateToProps, mapDispatchToProps)(AllSegments);
