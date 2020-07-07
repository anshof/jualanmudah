import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import { MDBBox, MDBRow, MDBCol, MDBBtn, MDBDataTable } from "mdbreact";
import { connect } from "react-redux";
import moment from "moment"
import "../css/style.css";


import Navbar from "../components/Navbar";
import PictName from "../components/PictName";

import {
  getUserStaffs,
  deleteUserStaff,
  doLogOut,
  getUserBio,
  doRefershSignin,
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
    if (result) {
      this.props.deleteUserStaff(id);
    }
  };

  render() {
    const data = {
      columns: [
        {
          label: "Name",
          field: "name",
          width: 150,
          color: "pink",
        },
        {
          label: "Broadcast",
          field: "broadcast",
          width: 270,
        },
        {
          label: "Created At",
          field: "created_at",
          width: 200,
        },
        {
          label: "Delete",
          field: "delete",
          width: 150,
        },
      ],
      rows: [
        ...this.props.staffs.reverse().map((el, index) => ({
          key: index,
          name: el.full_name,
          created_at: moment.utc(el.created_at).format('YYYY/MM/DD'),
          broadcast: "0",
          delete: (
            <MDBBtn
              color="transparent"
              size="xs"
              style={{ boxShadow: "none", padding: "0", margin: "0" }}
            >
              <i
                class="fa fa-trash"
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
                <PictName 
            bio={this.props.bio}

                />
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
    staffs: state.userState.staffs,
  };
};
const mapDispatchToProps = {
  getUserBio,
  getUserStaffs,
  deleteUserStaff,
  doLogOut,
  doRefershSignin,
};
export default connect(mapStateToProps, mapDispatchToProps)(DashboardStaff);
