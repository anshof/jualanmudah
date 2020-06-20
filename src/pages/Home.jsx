import React, { Component } from "react";

import { MDBBox, MDBCol, MDBRow } from "mdbreact";

import { BrowserRouter as Router } from "react-router-dom";

import "../css/style.css";
import Navbar from "../components/Navbar";

class Home extends Component {
  state = {
    isOpen: false,
  };

  toggleCollapse = () => {
    this.setState({ isOpen: !this.state.isOpen });
  };
  render() {
    return (
      <Router>
        <Navbar />
        <MDBRow
          style={{
            margin: "0px 15px",
          }}
        >
          <MDBCol size="4" className="d-flex align-items-center pl-5">
            <MDBBox style={{ color: "#1b2e35" }} className="text-left pl-5">
              <h1
                style={{
                  fontFamily: "Source Sans Pro",
                  fontWeight: "700",
                }}
                className="text-capitalize"
              >
                easier, faster
              </h1>
              <p style={{ fontWeight: "400", color: "#385a66" }}>
                Connect you and your customer with easier ways and faster steps
              </p>
              <MDBBox
                className="btn text-uppercase my-0 py-1"
                style={{
                  boxShadow: "none",
                  fontSize: "18px",
                  fontFamily: "Source Sans Pro",
                  backgroundColor: "#f14c59",
                  color: "white",
                  borderRadius: "20px",
                }}
              >
                Start now
              </MDBBox>
            </MDBBox>
          </MDBCol>
          <MDBCol size="8">
            <img
              src={require("../images/front.jpg")}
              alt="front"
              style={{ width: "800px" }}
            />
          </MDBCol>
        </MDBRow>
        {/* <MDBBox
          style={{
            margin: "0 auto",
            width: "300px",
            height: "50px",
            backgroundColor: "pink",
          }}
        >
          <MDBBox>
            <MDBRow>
              <MDBCol size="4">

              </MDBCol>
              <MDBCol size="4"></MDBCol>
              <MDBCol size="4"></MDBCol>
            </MDBRow>
          </MDBBox>
        </MDBBox> */}
      </Router>
    );
  }
}

export default Home;
