import React, { Component } from "react";

import { MDBBox, MDBRow, MDBCol, MDBIcon } from "mdbreact";

import Navbar from "../components/Navbar";
import Table from "../components/Table";

import "../css/style.css";
import PictName from "../components/PictName";
import Pagination from "../components/Pagination";

class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLogin: true,
    };
  }
  render() {
    return (
      <MDBBox>
        <Navbar
          isLogin={this.state.isLogin}
          fontColor={"white"}
          backNav={"rgb(241, 76, 89)"}
          style={{ position: "fixed" }}
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
                {/* open rate */}
                <MDBCol
                  size="3"
                  className="d-flex align-items-center justify-content-center"
                >
                  <span className="mr-1">Open rate</span>
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
                {/* end open rate */}
                {/* status */}
                <MDBCol
                  size="3"
                  className="d-flex align-items-center justify-content-center"
                >
                  <span className="mr-1">Status</span>
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
                {/* end status */}
                {/* send at */}
                <MDBCol
                  size="3"
                  className="d-flex align-items-center justify-content-center"
                >
                  <span className="mr-1">Send at</span>
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
                {/* end send at */}
              </MDBRow>
              <Table />
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
export default Dashboard;
