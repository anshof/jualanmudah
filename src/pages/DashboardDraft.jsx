import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { MDBBox, MDBRow, MDBCol, MDBIcon } from "mdbreact";
import "../css/style.css";

import Navbar from "../components/Navbar";
import Table from "../components/TableDraft";
import PictName from "../components/PictName";
import Pagination from "../components/Pagination";

import { doLogOut, getUserBio, doRefershSignin } from "../stores/actions/userAction";
import { getDraftList, deleteDraft } from "../stores/actions/mailAction";

class DashboardDraft extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLogin: true,
    };
  }

  componentDidMount = async () => {
    await this.props.doRefershSignin();
    this.props.getUserBio();
    this.props.getDraftList();
  };

  handleDelete = (id) => {
    var result = window.confirm("Are you sure to delete?");
    if(result){
      this.props.deleteDraft(id)
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
                Manage Draft
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
                  {/* segment */}
                  <MDBCol
                    size="3"
                    className="d-flex align-items-center justify-content-center"
                  >
                    <span className="mr-1">segment</span>
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
                  {/* end segment */}
                  {/* status */}
                  <MDBCol
                    size="3"
                    className="d-flex align-items-center justify-content-center"
                  >
                    <span className="mr-1">Delete</span>
                  </MDBCol>
                  {/* end status */}
                  {/* created at */}
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
                  {/* end created at */}
                </MDBRow>
                {this.props.draftList.map((el, index) => {
                  return (
                    <Table
                      key={index}
                      id={el.id}
                      subject={el.subject}
                      content={el.content}
                      date={el.send_date}
                      createdAt={el.created_at}
                      group={el.group_customer}
                      delete={(id) => this.handleDelete(id)}
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
    draftList : state.mailState.mailDraftList
  };
};
const mapDispatchToProps = {
  getUserBio,
  getDraftList,
  deleteDraft,
  doLogOut,
  doRefershSignin
};
export default connect(mapStateToProps, mapDispatchToProps)(DashboardDraft);
