import React, { Component } from "react";

import { MDBBox, MDBRow, MDBCol, MDBIcon } from "mdbreact";

import Navbar from "../components/Navbar";
import TableDraft from "../components/TableDraft";

import "../css/style.css";
import PictName from "../components/PictName";
import Pagination from "../components/Pagination";

class DashboardDraft extends Component {
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
                {/* segment */}
                <MDBCol
                  size="3"
                  className="d-flex align-items-center justify-content-center"
                >
                  <span className="mr-1">segment</span>
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
                {/* end segment */}
                {/* status */}
                <MDBCol
                  size="3"
                  className="d-flex align-items-center justify-content-center"
                >
                  <span className="mr-1">Delete</span>
                </MDBCol>
                {/* end status */}
                {/* created at */}
                <MDBCol
                  size="3"
                  className="d-flex align-items-center justify-content-center"
                >
                  <span className="mr-1">Created at</span>
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
                {/* end created at */}
              </MDBRow>
              <TableDraft />
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
export default DashboardDraft;
