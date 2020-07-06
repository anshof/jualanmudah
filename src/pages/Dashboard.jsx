import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import {
  MDBBox,
  MDBRow,
  MDBCol,
  MDBDataTable,
} from "mdbreact";
import "../css/style.css";

import Navbar from "../components/Navbar";
import PictName from "../components/PictName";

import {
  doLogOut,
  getUserBio,
  doRefershSignin,
} from "../stores/actions/userAction";
import { getSendList } from "../stores/actions/mailAction";
class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {};
   }

  componentDidMount = async () => {
    await this.props.doRefershSignin();
    await this.props.getUserBio();
    await this.props.getSendList();
  };

  render() {
    const data = {
      columns: [
        {
          label: "Title",
          field: "title",
          width: 150,
        },
        {
          label: "Open rate",
          field: "open_rate",
          width: 270,
        },
        {
          label: "Status",
          field: "status",
          width: 150,
        },
        {
          label: "Segment",
          field: "segment",
          width: 150,
        },
        {
          label: "Created At",
          field: "created_at",
          width: 200,
        },
      ],
      rows: 
      [
        ...this.props.mailSendList.map((el, index) => (
        { key : index,
          title: el.subject,
          created_at: el.created_at.slice(0, -9),
          open_rate: el.open_rate,
          segment: el.group_customer.name,
          status: (
            <MDBBox
              style={{
                width: "100%",
                color: "white",
                backgroundColor: "green",
                borderRadius: "40px",
              }}
            >
              SUCCESS
            </MDBBox>
          )
        }
      ))
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
    mailSendList: state.mailState.mailSendList,
  };
};
const mapDispatchToProps = {
  getUserBio,
  doLogOut,
  getSendList,
  doRefershSignin,
};
export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
