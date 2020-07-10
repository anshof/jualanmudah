import React, { Component } from "react";
import { MDBDataTable, MDBBox, MDBRow, MDBCol, MDBBtn } from "mdbreact";
import { Redirect, Link } from "react-router-dom";
import { connect } from "react-redux";
import moment from "moment";
import Navbar from "../components/Navbar";
import PictName from "../components/PictName";

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
  constructor(props) {
    super(props);
    this.state = {
      isLogin: true,
      modalFormDatabase: false,
      modalNewDatabase: false,
    };
  }

  componentDidMount = async () => {
    await this.props.doRefershSignin();
    await this.props.getUserBio();
    await this.props.getCustomerGroupList();
    let groupData;
    if (this.props.match.params.segmentId) {
      await this.props.getCustomerMember(this.props.match.params.segmentId);
      groupData = await this.props.customerState.customerList;
        this.callSegment(groupData)
    } else {
      groupData = await this.props.customerGroups;
    this.callAllSegment(groupData)
  };
}

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
              label: "Jumlah customer",
              field: "jumlahCustomer",
              sort: "asc",
              width: 200,
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
              segment : el.name,
              detail: (
                <p
                  style={{ color: "rgb(241, 76, 89)", cursor: "pointer" }}
                  onClick={() => this.changeRouter(el.id)}
                >
                  Detail
                </p>
              ),
              jumlahCustomer: 0,
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
  }

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
  }

  handleBacktoList = async () => {
    await this.props.getCustomerGroupList();
    let groupData = await this.props.customerGroups;
    this.callAllSegment(groupData)
  };

  handleDeleteGroup = async (id) => {
    var result = window.confirm("Are you sure to delete?");
    if (result) {
      await this.props.deleteGroup(id);
    }
    await this.props.getCustomerGroupList();
    let groupData = await this.props.customerGroups;
    this.callAllSegment(groupData)
  };

  changeRouter = async (segmentId) => {
    await this.props.getCustomerMember(segmentId);
    await this.props.history.push("/segment/" + segmentId, {
      ...this.props.draft,
    });
    let groupData = this.props.customerState.customerList
    this.callSegment(groupData)
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
      const data = this.state.data;
      return (
        <MDBBox style={{ backgroundColor: "#f7f7f7" }}>
          <Navbar
            fontColor={"white"}
            backNav={"rgb(241, 76, 89)"}
            style={{ position: "fixed" }}
            logout={() => this.props.doLogOut()}
            bio={this.props.bio}
          />
          <MDBBox
            style={{
              padding: "100px 0 1px 0",
            }}
          >
            {/* judul */}
            <MDBBox className="d-flex justify-content-between align-items-center mx-5 pb-3">
              <span
                className="text-left"
                style={{
                  fontWeight: "600",
                  color: "#192e35",
                  fontSize: "28px",
                }}
              >
                All Segments
              </span>
              {this.props.match.params.segmentId ? (
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
              ) : (
                false
              )}
            </MDBBox>
            {/* tabel */}
            <MDBRow
              style={{
                margin: "20px",
              }}
            >
              <MDBCol size="2">
                <PictName bio={this.props.bio} active={"segments"} />
              </MDBCol>
              <MDBCol size="10">
                <MDBDataTable
                  hover
                  data={data}
                  style={{
                    backgroundColor: "white",
                  }}
                />
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
