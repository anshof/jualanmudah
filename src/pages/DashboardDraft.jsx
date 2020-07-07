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
    this.props.getUserBio();
    this.props.getDraftList();
    // this.setState({"rows" : [
    //   ...this.props.draftList.reverse().map((el, index) => ({
    //     key: index,
    //     title: <p onClick={() => this.changeRouter(el.id)}>{el.subject ? el.subject : "Unsubjected"}</p>,
    //     // created_at: el.created_at.slice(0, -9),
    //     created_at: moment.utc(el.created_at).format('YYYY/MM/DD'),
    //     segment: el.group_id !== 0
    //       ? el.group_customer.name
    //       : "Unsegmented",
    //     delete: (
    //       <MDBBtn
    //         color="transparent"
    //         size="xs"
    //         style={{ boxShadow: "none", padding: "0", margin: "0" }}
    //       >
    //         <i
    //           className="fa fa-trash"
    //           aria-hidden="true"
    //           onClick={() => this.handleDelete(el.id)}
    //           style={{ cursor: "pointer" }}
    //         ></i>
    //       </MDBBtn>
    //     ),
    //   })),
    // ]})
  };


  handleDelete = (id) => {
    var result = window.confirm("Are you sure to delete?");
    if (result) {
      this.props.deleteDraft(id);
    }
  };

  changeRouter = async (draftId) => {
    // localStorage.setItem("draftId", draftId);
     await this.props.getDraft(draftId)
    //  this.props.history.replace("/draft/" + draftId);
     this.props.history.push("/draft/" + draftId, { ...this.props.draft })
    // alert("done")
  };

  render() {
    const data = {
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
          label: "Delete",
          field: "delete",
          width: 150,
        },
      ],
      rows: [ 
        ...this.props.draftList.reverse().map((el, index) => ({
          key: index,
          title: <p onClick={() => this.changeRouter(el.id)}>{el.subject ? el.subject : "Unsubjected"}</p>,
          // created_at: el.created_at.slice(0, -9),
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
                onClick={() => this.handleDelete(el.id)}
                style={{ cursor: "pointer" }}
              ></i>
            </MDBBtn>
          ),
        })),
      ],
    };

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
                <PictName bio={this.props.bio} />
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
