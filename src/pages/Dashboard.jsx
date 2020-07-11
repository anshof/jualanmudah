import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { MDBBox, MDBRow, MDBCol, MDBDataTable } from "mdbreact";
import moment from "moment";
import "../css/style.css";

import Navbar from "../components/Navbar";
import PictName from "../components/PictName";

import {
  doLogOut,
  getUserBio,
  doRefershSignin,
} from "../stores/actions/userAction";
import { getSendList, deleteLocalDraft } from "../stores/actions/mailAction";
class Dashboard extends Component {
  state = {};

  componentDidMount = async () => {
    await this.props.doRefershSignin();
    await this.props.getUserBio();
    await this.props.getSendList();
    this.props.deleteLocalDraft();
    if (this.props.mailSendList) {
      this.setState({
        data: {
          columns: [
            {
              label: "Subject",
              field: "title",
              width: 150,
            },
            {
              label: "Open rate",
              field: "open_rate",
              width: 270,
            },
            {
              label: "Segment",
              field: "segment",
              width: 150,
            },
            {
              label: "Created At",
              field: "created_at",
              sort: "asc",
              width: 200,
            },
            {
              label: "Details",
              field: "details",
              sort: "asc",
              width: 200,
            },
          ],
          rows: [
            ...this.props.mailSendList.reverse().map((el, index) => ({
              key: index,
              title: el.subject,
              details: (
                <p
                  style={{ color: "rgb(241, 76, 89)", cursor: "pointer" }}
                  onClick={() => this.changeRouter(el.id)}
                >
                  Details
                </p>
              ),
              created_at: moment.utc(el.created_at).format("YYYY/MM/DD"),
              open_rate: el.open_rate + "/" + el.total_sent,
              segment: el.group_customer.name,
            })),
          ],
        },
      });
    }
  };

  changeRouter = async (mailId) => {
    this.props.history.push("/broadcast/" + mailId, { ...this.props.draft });
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
                Broadcast
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
                <PictName bio={this.props.bio} active={"broadcasts"} />
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
  deleteLocalDraft,
};
export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
