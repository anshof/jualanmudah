import React, { Component, Fragment } from "react";
import { Redirect } from "react-router-dom";
import { MDBBox, MDBRow, MDBCol, MDBIcon } from "mdbreact";
import { connect } from "react-redux";
import Navbar from "../components/Navbar";
import Table from "../components/TableStaff";

import "../css/style.css";
import PictName from "../components/PictName";
import Pagination from "../components/Pagination";

import {
  getUserStaffs,
  deleteUserStaff,
  doLogOut,
  getUserBio,
  doRefershSignin
} from "../stores/actions/userAction";

class DashboardStaff extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLogin: true,
    };
  }

  componentDidMount = async () => {
    await this.props.doRefershSignin();
    this.props.getUserStaffs();
    this.props.getUserBio();
    if (this.shouldBlockNavigation) {
      window.onbeforeunload = () => true;
    } else {
      window.onbeforeunload = undefined;
    }
  };

  handleDelete = (id) => {
    var result = window.confirm("Are you sure to delete?");
    if(result){
      this.props.deleteUserStaff(id)
    }
  }

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
            style={{ backgroundColor: "#f7f7f7", padding: "100px 0 1px 0" }}
          >
            {/* title */}
            <MDBBox className="d-flex align-items-center mx-5 pb-3">
              <span
                className="text-left"
                style={{
                  fontWeight: "600",
                  color: "#192e35",
                  fontSize: "28px",
                }}
              >
                Dashboard Staff
              </span>
            </MDBBox>
            {/* end title */}
            {/* main row */}
            <MDBRow
              style={{
                margin: "20px",
              }}
            >
              {/* side bar */}
              <MDBCol size="2">
                <PictName />
              </MDBCol>
              {/* end side bar */}
              {/* table */}
              <MDBCol size="10">
                <MDBRow
                  className="text-uppercase mb-3"
                  style={{
                    fontWeight: "700",
                    color: "rgb(241, 76, 89)",
                    margin: "0px",
                  }}
                >
                  <MDBCol
                    size="3"
                    className="d-flex align-items-center justify-content-center"
                  >
                    <span className="mr-1">Name</span>
                    <MDBIcon
                      style={{
                        cursor: "pointer",
                      }}
                      className="mr-1"
                      icon="caret-up"
                    />
                    <MDBIcon
                      style={{
                        cursor: "pointer",
                      }}
                      icon="caret-down"
                    />
                  </MDBCol>
                  <MDBCol
                    size="3"
                    className="d-flex align-items-center justify-content-center"
                  >
                    <span className="mr-1">Broadcast</span>
                    <MDBIcon
                      style={{
                        cursor: "pointer",
                      }}
                      className="mr-1"
                      icon="caret-up"
                    />
                    <MDBIcon
                      style={{
                        cursor: "pointer",
                      }}
                      icon="caret-down"
                    />
                  </MDBCol>
                  <MDBCol
                    size="3"
                    className="d-flex align-items-center justify-content-center"
                  >
                    <span className="mr-1">Delete</span>
                  </MDBCol>
                  <MDBCol
                    size="3"
                    className="d-flex align-items-center justify-content-center"
                  >
                    <span className="mr-1">Created at</span>
                    <MDBIcon
                      style={{
                        cursor: "pointer",
                      }}
                      className="mr-1"
                      icon="caret-up"
                    />
                    <MDBIcon
                      style={{
                        cursor: "pointer",
                      }}
                      icon="caret-down"
                    />
                  </MDBCol>
                </MDBRow>
                {this.props.staffs ? (
                  <Fragment>
                    {this.props.staffs.map((el, index) => {
                      return (
                        <Table
                          key={index}
                          id={el.id}
                          name={el.full_name}
                          createdDate={el.created_at}
                          delete={(id) => this.handleDelete(id)}
                          staffs={this.props.staffs}
                        />
                      );
                    })}
                  </Fragment>
                ) : (
                  false
                )}
                <MDBBox className="pt-2 d-flex justify-content-center">
                  <Pagination />
                </MDBBox>
              </MDBCol>
              {/* end table */}
            </MDBRow>
            {/* end main row */}
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
  };
};
const mapDispatchToProps = {
  getUserBio,
  getUserStaffs,
  deleteUserStaff,
  doLogOut,
  doRefershSignin
};
export default connect(mapStateToProps, mapDispatchToProps)(DashboardStaff);
