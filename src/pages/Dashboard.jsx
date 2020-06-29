import React, { Component } from "react";

import { MDBBox, MDBRow, MDBCol, MDBBtn } from "mdbreact";

import Navbar from "../components/Navbar";
import Table from "../components/TableStaff";

import "../css/style.css";
import PictName from "../components/PictName";

class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLogin: true,
    };
  }
  render() {
    return (
      <MDBBox style={{ fontFamily: "Source Sans Pro" }}>
        <Navbar 
          isLogin={this.state.isLogin}
            fontColor={"white"}
            backNav={"rgb(241, 76, 89)"}
            style={{ position: "fixed" }}
        />

        <MDBBox className="py-4" style={{ backgroundColor: "#f7f7f7" }}>
          <h3
            className="text-left ml-5"
            style={{ fontWeight: "600", color: "#192e35" }}
          >
            Dashboard
          </h3>
          <MDBRow
            style={{
              margin: "25px 25px",
            }}
          >
            <MDBCol size="3">
              <MDBBox
                style={{
                  borderRadius: "20px",
                  padding: "30px 20px",
                  boxShadow: "0 0 10px #e1e1e1",
                  backgroundColor: "white",
                }}
                className="text-left pt-4"
              >
                <PictName />
                <MDBBox className="text-center">
                  <MDBBtn
                    color="transparent"
                    style={{
                      backgroundColor: "#f14c59",
                      color: "white",
                      boxShadow: "none",
                      borderRadius: "40px",
                      fontSize: "16px",
                    }}
                    className="text-capitalize"
                  >
                    <i class="fas fa-plus mr-1"></i> New broadcast
                  </MDBBtn>
                </MDBBox>
                <hr />
                <MDBBox className="pl-3">
                  <p
                    className="mb-1"
                    style={{
                      fontSize: "18px",
                      fontWeight: "600",
                      color: "#192e35",
                    }}
                  >
                    All segments
                  </p>
                  <a href="#!" style={{ color: "#192e35" }}>
                    <p className="py-0 my-0" style={{ fontSize: "16px" }}>
                      Woman
                    </p>
                  </a>
                  <a href="#!" style={{ color: "#192e35" }}>
                    <p className="py-0 my-0" style={{ fontSize: "16px" }}>
                      Man
                    </p>
                  </a>
                </MDBBox>
              </MDBBox>
            </MDBCol>
            <MDBCol size="9">
              <MDBRow className="text-uppercase" style={{ fontWeight: "500" }}>
                <MDBCol size="3">
                  <p className="text-center">Title</p>
                </MDBCol>
                <MDBCol size="2">
                  <p className="text-center">Sent / recipient</p>
                </MDBCol>
                <MDBCol size="2">
                  <p className="text-center">Open rate</p>
                </MDBCol>
                <MDBCol size="2">
                  <p className="text-center">Status</p>
                </MDBCol>
                <MDBCol size="3">
                  <p className="text-center">Send at</p>
                </MDBCol>
              </MDBRow>
              <Table />
            </MDBCol>
          </MDBRow>
        </MDBBox>
      </MDBBox>
    );
  }
}
export default Dashboard;
