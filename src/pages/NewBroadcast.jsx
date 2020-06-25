import React, { Component } from "react";

import { MDBBox } from "mdbreact";

import Navbar from "../components/Navbar";

import "../css/style.css";
import Recipient from "../components/Recipient";
import ContentEmail from "../components/ContentEmail";
import ContentWa from "../components/ContentWa";
import PreviewEmail from "../components/PreviewEmail";

class NewBroadcast extends Component {
  render() {
    return (
      <MDBBox style={{ fontFamily: "Source Sans Pro" }}>
        <Navbar />

        <MDBBox className="py-4" style={{ backgroundColor: "#f7f7f7" }}>
          <h3
            className="text-left ml-5"
            style={{ fontWeight: "600", color: "#192e35" }}
          >
            Create new broadcast
          </h3>
          {/* <Recipient /> */}
          {/* <ContentEmail /> */}
          {/* <ContentWa /> */}
          <PreviewEmail />
        </MDBBox>
      </MDBBox>
    );
  }
}
export default NewBroadcast;
