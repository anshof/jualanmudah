import React, { Component } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import {
  MDBDataTable,
  MDBBox,
  MDBRow,
  MDBCol,
  MDBInput,
  MDBBtn,
} from "mdbreact";
import Navbar from "../components/Navbar";
import Loading from "../components/Loading";
import {
  doLogOut,
  getUserBio,
  doRefershSignin,
} from "../stores/actions/userAction";
import {
  addCustomerGroup,
  addCustomerMember,
  changeInputCustomer,
  getCustomerGroupList,
  getCustomerList,
  checkedCustomer,
  getCustomerMember,
} from "../stores/actions/customerAction.js";

class NewSegment extends Component {
  state = {
    radio1: 1,
    radio2: 1,
    isLoadingTable: true,
  };

  componentDidMount = async () => {
    await this.props.getCustomerList();
    await this.props.getCustomerGroupList();
    await this.props.doRefershSignin();
    await this.props.getUserBio();
    await this.callCustomerData();
    this.setState({ isLoadingTable: false });
  };

  onClickChoice1 = (nr) => () => {
    this.setState({
      radio1: nr,
    });
  };

  onClickChoice2 = (nr) => () => {
    this.setState({
      radio2: nr,
    });
  };

  callCustomerData = () => {
    if (this.props.customerList) {
      this.setState({
        data: {
          columns: [
            {
              label: "Check",
              field: "check",
              sort: "asc",
              width: 150,
            },
            {
              label: "Name",
              field: "name",
              width: 150,
              color: "pink",
            },
            {
              label: "Email",
              field: "email",
              width: 270,
            },
            {
              label: "Company",
              field: "company",
              width: 100,
            },
          ],
          rows: [
            ...this.props.customerList.map((el, index) => ({
              key: index,
              check: (
                <form>
                  <label className="checkbox-inline">
                    <input
                      type="checkbox"
                      value={el.id}
                      name="selectCustomerId"
                      onChange={(e) => this.props.checkedCustomer(e)}
                    />
                  </label>
                </form>
              ),
              name: el.First_name + " " + el.last_name,
              email: el.email,
              company: el.company,
            })),
          ],
        },
      });
    }
  };

  onChangeGroupMember = async (e) => {
    this.setState({ isLoadingTable: true });
    await this.props.changeInputCustomer(e);
    if (this.props.customerState.groupListSelect === "all") {
      await this.props.getCustomerList();
    } else {
      await this.props.getCustomerMember(
        this.props.customerState.groupListSelect
      );
    }
    await this.callCustomerData();
    this.setState({ isLoadingTable: false });
  };

  doneCreateGroup = async () => {
    const customersId = await this.props.selectCustomerId;
    if (this.state.radio1 === 1) {
      await this.props.addCustomerGroup();
    }
    const groupId =
      (await this.state.radio1) === 1
        ? this.props.customerState.groupIdCreated
        : this.props.customerState.groupIdSelect;
    for (let i = 0; i < customersId.length; i++) {
      await this.props.addCustomerMember(customersId[i], groupId);
    }
    await alert("Sukses!");
    this.props.history.push("/segment-list")
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
      if (!this.props.customerList) {
        return <h3 className="loading">Loading...</h3>;
      }
      return (
        <MDBBox>
          <Navbar
            isLogin={this.state.isLogin}
            fontColor={"white"}
            backNav={"rgb(241, 76, 89)"}
            style={{ position: "fixed" }}
            logout={() => this.props.doLogOut()}
            bio={this.props.bio}
          />
          <MDBBox
            style={{
              padding: "30px 0 1px 0",
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
                Atur Grup
              </span>
            </MDBBox>
            {/* tabel */}
            <MDBRow
              style={{
                margin: "20px",
              }}
            >
              {/* create new segment */}
              <MDBCol size="6" className="text-left">
                <MDBBox
                  className="py-4"
                  style={{
                    backgroundColor: "white",
                    borderRadius: "20px",
                  }}
                >
                  <MDBRow
                    className="pt-2"
                    style={{
                      margin: "0",
                      backgroundColor: "white",
                      borderRadius: "20px",
                    }}
                  >
                    <MDBCol size="2">
                      <MDBBox
                        style={{
                          color: "#f14c59",
                        }}
                        className="ml-4 font-weight-bold"
                      >
                        1
                      </MDBBox>
                    </MDBCol>
                    <MDBCol size="10" className="ml-0">
                      <span style={{ fontWeight: "500" }}>
                        Apa yang ingin anda lakukan ?
                      </span>
                      <br />
                      <MDBBox className="mt-2 mb-3">
                        <MDBInput
                          onClick={this.onClickChoice1(1)}
                          checked={this.state.radio1 === 1 ? true : false}
                          label="Membuat grup baru"
                          type="radio"
                          id="radio1"
                          name="groupSelectChoice1"
                          value="all"
                          onChange={(e) => this.props.changeInputCustomer(e)}
                        />
                        <MDBCol size="10" className="ml-1">
                          <div className="input-group mb-3 mt-2 w-75">
                            <div className="input-group-prepend"></div>
                            <input
                              type="text"
                              className="form-control"
                              disabled={this.state.radio1 !== 1 ? true : false}
                              name="nameGroup"
                              placeholder="Nama grup"
                              aria-label="Username"
                              aria-describedby="basic-addon1"
                              onChange={(e) =>
                                this.props.changeInputCustomer(e)
                              }
                            />
                          </div>
                        </MDBCol>
                        <MDBInput
                          onClick={this.onClickChoice1(2)}
                          checked={this.state.radio1 === 2 ? true : false}
                          label="Menambahkan anggota pada grup"
                          type="radio"
                          id="radio2"
                        />
                        <select
                          className="browser-default custom-select w-75 ml-3 mt-2"
                          disabled={this.state.radio1 !== 2 ? true : false}
                          selected
                          name="groupIdSelect"
                          onChange={(e) => this.props.changeInputCustomer(e)}
                        >
                          <option value="" disabled selected>
                            Grup kontak
                          </option>
                          {this.props.customerGroups
                            ? this.props.customerGroups.map((el, index) => (
                                <option key={index} value={el.id}>
                                  {el.name}
                                </option>
                              ))
                            : false}
                        </select>
                      </MDBBox>
                    </MDBCol>
                  </MDBRow>
                  <MDBRow
                    className="mt-2"
                    style={{
                      margin: "0",
                    }}
                  ></MDBRow>
                  <MDBRow
                    className="pt-2"
                    style={{
                      margin: "0",
                      backgroundColor: "white",
                      borderRadius: "20px",
                    }}
                  >
                    <MDBCol size="2">
                      <MDBBox
                        style={{
                          color: "#f14c59",
                        }}
                        className="ml-4 font-weight-bold"
                      >
                        2
                      </MDBBox>
                    </MDBCol>
                    <MDBCol size="10" className="ml-0">
                      <span style={{ fontWeight: "500" }}>
                        Pilih data pelanggan dari :
                      </span>
                      <br />
                      <MDBBox className="mt-2 mb-3">
                        <MDBInput
                          onClick={this.onClickChoice2(1)}
                          checked={this.state.radio2 === 1 ? true : false}
                          label="Semua kontak"
                          type="radio"
                          id="radio3"
                          name="groupListSelect"
                          value="all"
                          onChange={(e) => this.onChangeGroupMember(e)}
                        />
                        <MDBInput
                          onClick={this.onClickChoice2(2)}
                          checked={this.state.radio2 === 2 ? true : false}
                          label="Grup kontak yang sudah ada"
                          type="radio"
                          id="radio4"
                        />
                      </MDBBox>
                      <select
                        className="browser-default custom-select w-75 ml-3"
                        disabled={this.state.radio2 !== 2 ? true : false}
                        selected
                        name="groupListSelect"
                        onChange={(e) => this.onChangeGroupMember(e)}
                      >
                        <option value="" disabled selected>
                          Grup kontak
                        </option>
                        {this.props.customerGroups
                          ? this.props.customerGroups.map((el, index) => (
                              <option key={index} value={el.id}>
                                {el.name}
                              </option>
                            ))
                          : false}
                      </select>
                    </MDBCol>
                  </MDBRow>
                  <MDBBox className="text-center">
                    <MDBBtn
                      color="transparent"
                      className="mt-4 text-capitalize"
                      style={{
                        boxShadow: "none",
                        color: "white",
                        backgroundColor: "#f14c59",
                        borderRadius: "40px",
                      }}
                      onClick={this.doneCreateGroup}
                    >
                      Simpan grup kontak
                    </MDBBtn>
                  </MDBBox>
                </MDBBox>
              </MDBCol>
              {/* end create new segment */}
              {/* table */}
              <MDBCol size="6">
                {this.state.isLoadingTable ? (
                  <Loading />
                ) : (
                  <MDBDataTable
                    hover
                    data={data}
                    style={{
                      backgroundColor: "white",
                    }}
                  />
                )}
              </MDBCol>
              {/* end table */}
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
    staffs: state.userState.staffs,
    customerGroups: state.customerState.customerGroup,
    customerList: state.customerState.customerList,
    selectCustomerId: state.customerState.selectCustomerId,
    customerState: state.customerState,
  };
};
const mapDispatchToProps = {
  getUserBio,
  doLogOut,
  doRefershSignin,
  addCustomerGroup,
  changeInputCustomer,
  getCustomerGroupList,
  getCustomerList,
  checkedCustomer,
  addCustomerMember,
  getCustomerMember,
};
export default connect(mapStateToProps, mapDispatchToProps)(NewSegment);
