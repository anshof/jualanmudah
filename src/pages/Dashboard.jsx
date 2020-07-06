import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { MDBBox, MDBRow, MDBCol, MDBIcon } from "mdbreact";
import "../css/style.css";

import Navbar from "../components/Navbar";
import Table from "../components/Table";
import PictName from "../components/PictName";
import Pagination from "../components/Pagination";

import { doLogOut, getUserBio, doRefershSignin } from "../stores/actions/userAction";
import { getSendList } from "../stores/actions/mailAction";
class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  componentDidMount = async () => {
    await this.props.doRefershSignin();
    await this.props.getUserBio();
    this.props.getSendList();
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
              backgroundColor: "#f7f7f7",
              padding: "100px 0 1px 0",
            }}
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
                Manage Broadcast
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
                  {/* title */}
                  <MDBCol
                    size="3"
                    className="d-flex align-items-center justify-content-center"
                  >
                    <span className="mr-1">Title</span>
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
                  {/* title */}
                  {/* open rate */}
                  <MDBCol
                    size="3"
                    className="d-flex align-items-center justify-content-center"
                  >
                    <span className="mr-1">Open rate</span>
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
                  {/* end open rate */}
                  {/* status */}
                  <MDBCol
                    size="3"
                    className="d-flex align-items-center justify-content-center"
                  >
                    <span className="mr-1">Status</span>
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
                  {/* end status */}
                  {/* send at */}
                  <MDBCol
                    size="3"
                    className="d-flex align-items-center justify-content-center"
                  >
                    <span className="mr-1">Send at</span>
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
                  {/* end send at */}
                </MDBRow>
                {this.props.mailSendList.map((el, index) => {
                  return (
                    <Table
                      key={index}
                      title={el.subject}
                      open={el.open_rate}
                      status={el.status}
                      sendAt={el.updated_at}
                    />
                  );
                })}
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
    mailSendList: state.mailState.mailSendList,
  };
};
const mapDispatchToProps = {
  getUserBio,
  doLogOut,
  getSendList,
  doRefershSignin
};
export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
