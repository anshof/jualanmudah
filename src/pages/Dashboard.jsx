import React, { Component } from "react";

import { MDBBox, MDBRow, MDBCol } from "mdbreact";

import Navbar from "../components/Navbar";

import "../css/style.css";

class Dashboard extends Component {
  render() {
    return (
      <MDBBox style={{ fontFamily: "Source Sans Pro" }}>
        <Navbar />
        <h3
          className="text-left ml-5 mt-3"
          style={{ fontWeight: "600", color: "#192e35" }}
        >
          Broadcast
        </h3>

        <MDBBox>
          <MDBRow
            style={{
              margin: "25px 25px",
            }}
          >
            <MDBCol size="3">
              <MDBBox
                style={{
                  border: "1px solid white",
                  borderRadius: "20px",
                  padding: "30px 20px",
                  boxShadow: "0 0 10px #e1e1e1",
                }}
                className="text-left pl-5 pt-4"
              >
                <a href="#!" style={{ color: "#a13034" }}>
                  <h5 className="my-0" style={{ fontWeight: "600" }}>
                    All Segments
                  </h5>
                </a>
                <br />
                <a href="#!" style={{ color: "#192e35" }}>
                  <p className="py-0 my-0">
                    <i
                      class="fas fa-female mr-4"
                      style={{ color: "#f14c59" }}
                    ></i>
                    Woman
                  </p>
                </a>
                <br />
                <a href="#!" style={{ color: "#192e35" }}>
                  <p className="py-0 my-0">
                    <i
                      class="fas fa-male mr-4"
                      style={{ color: "#f14c59" }}
                    ></i>
                    Man
                  </p>
                </a>
              </MDBBox>
            </MDBCol>
            <MDBCol size="9">
              <MDBBox
                style={{
                  border: "1px solid white",
                  borderRadius: "20px",
                  padding: "10px",
                  boxShadow: "0 0 10px #e1e1e1",
                }}
                className="text-left pl-5 pt-4"
              >
                <h3>ini col 9</h3>
              </MDBBox>
            </MDBCol>
          </MDBRow>
        </MDBBox>
      </MDBBox>
    );
  }
}
export default Dashboard;
