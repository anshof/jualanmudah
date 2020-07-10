import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import moment from 'moment'
import { MDBBox, MDBRow, MDBCol, MDBBtn, MDBDataTable } from "mdbreact";
import "../css/style.css";

import Navbar from "../components/Navbar";
import PictName from "../components/PictName";

import {
  doLogOut,
  getUserBio,
  doRefershSignin,
} from "../stores/actions/userAction";
import { getDraftList, deleteDraft, getDraft } from "../stores/actions/mailAction";

class DashboardDraft extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLogin: true,
    };
  }

  componentDidMount = async () => {
    await this.props.doRefershSignin();
    await this.props.getDraftList();
    this.props.getUserBio();
    if (this.props.draftList){
      this.setState({
        data: {
          columns: [
            {
              label: "Title",
              field: "title",
              width: 150,
              color: "pink",
            },
            {
              label: "Created At",
              field: "created_at",
              width: 200,
            },
            {
              label: "Segments",
              field: "segment",
              width: 270,
            },
            {
              label: "Edit",
              field: "edit",
              sort: "asc",
              width: 200,
            },
            {
              label: "Delete",
              field: "delete",
              width: 150,
            },
          ],
          rows: [ 
            ...this.props.draftList.reverse().map((el, index) => ({
              key: index,
              title: el.subject ? el.subject : "Unsubjected",
            edit : <p style={{color:"rgb(241, 76, 89)", cursor:"pointer"}}onClick={() => this.changeRouter(el.id)}>Edit</p>,
              created_at: moment.utc(el.created_at).format('YYYY/MM/DD'),
              segment: el.group_id !== 0
                ? el.group_customer.name
                : "Unsegmented",
              delete: (
                <MDBBtn
                  color="transparent"
                  size="xs"
                  style={{ boxShadow: "none", padding: "0", margin: "0" }}
                >
                  <i
                    className="fa fa-trash"
                    aria-hidden="true"
                    onClick={(id) => this.handleDelete(el.id)}
                    style={{ cursor: "pointer" }}
                  ></i>
                </MDBBtn>
              )})),
            ],
          },
        });
      }
    };


  handleDelete = async (id) => {
    var result = window.confirm("Are you sure to delete?");
    if  (result) {
      await this.props.deleteDraft(id);
    }
    this.setState({
      data: {
        columns: [
          {
            label: "Title",
            field: "title",
            width: 150,
            color: "pink",
          },
          {
            label: "Created At",
            field: "created_at",
            width: 200,
          },
          {
            label: "Segments",
            field: "segment",
            width: 270,
          },
          {
            label: "Edit",
            field: "edit",
            sort: "asc",
            width: 200,
          },
          {
            label: "Delete",
            field: "delete",
            width: 150,
          },
        ],
        rows: [ 
          ...this.props.draftList.reverse().map((el, index) => ({
            key: index,
            title: el.subject ? el.subject : "Unsubjected",
            edit : <p style={{color:"rgb(241, 76, 89)", cursor:"pointer"}}onClick={() => this.changeRouter(el.id)}>Edit</p>,
            created_at: moment.utc(el.created_at).format('YYYY/MM/DD'),
            segment: el.group_id !== 0
              ? el.group_customer.name
              : "Unsegmented",
            delete: (
              <MDBBtn
                color="transparent"
                size="xs"
                style={{ boxShadow: "none", padding: "0", margin: "0" }}
              >
                <i
                  className="fa fa-trash"
                  aria-hidden="true"
                  onClick={(id) => this.handleDelete(el.id)}
                  style={{ cursor: "pointer" }}
                ></i>
              </MDBBtn>
            )})),
          ],
        },
      })
  };

  changeRouter = async (draftId) => {
     await this.props.getDraft(draftId)
     this.props.history.push("/draft/" + draftId, { ...this.props.draft })
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
      const data = this.state.data
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
                <PictName bio={this.props.bio} active={"draft"}/>
              </MDBCol>
              {/* end side bar */}
              {/* table */}
              <MDBCol size="10">
                <MDBDataTable
                  hover
                  data={data}
                  style={{
                    backgroundColor: "white",
                  }}
                />
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
    draftList: state.mailState.mailDraftList,
    draft: state.mailState.maildraft,
  };
};
const mapDispatchToProps = {
  getUserBio,
  getDraftList,
  deleteDraft,
  doLogOut,
  doRefershSignin,
  getDraft
};
export default connect(mapStateToProps, mapDispatchToProps)(DashboardDraft);
