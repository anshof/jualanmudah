import React, { Component, Fragment } from "react";

import {
  MDBBox,
  MDBRow,
  MDBCol,
  MDBIcon,
  MDBFormInline,
  MDBModal,
} from "mdbreact";

import Navbar from "../components/Navbar";
import Table from "../components/TableCustomer";
import PictName from "../components/PictName";
import Pagination from "../components/Pagination";
import NewDatabase from "../components/NewDatabaseModal";
import DownloadFormDatabase from "../components/DownloadFormModal";

import "../css/style.css";

class Database extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLogin: true,
      modalFormDatabase: false,
      modalNewDatabase: false,
    };
    this.toggle = this.toggle.bind(this);
    this.data = [
      {
        name: "Tiger Nixon",
        email: "System Architect",
        phone: "$320",
        bod: "2011/04/25",
        address: "61",
        company: "Edinburgh",
      },
      {
        name: "Garrett Winters",
        email: "Accountant",
        company: "Tokyo",
        address: "63",
        bod: "2011/07/25",
        phone: "$170",
      },
      {
        name: "Ashton Cox",
        email: "Junior Technical Author",
        company: "San Francisco",
        address: "66",
        bod: "2009/01/12",
        phone: "$86",
      },
      {
        name: "Cedric Kelly",
        email: "Senior Javascript Developer",
        company: "Edinburgh",
        address: "22",
        bod: "2012/03/29",
        phone: "$433",
      },
      {
        name: "Airi Satou",
        email: "Accountant",
        company: "Tokyo",
        address: "33",
        bod: "2008/11/28",
        phone: "$162",
      },
      {
        name: "Brielle Williamson",
        email: "Integration Specialist",
        company: "New York",
        address: "61",
        bod: "2012/12/02",
        phone: "$372",
      },
    ];
  }
  toggle = (key) => () => {
    let modalKey = "modal" + key;
    this.setState({
      [modalKey]: !this.state[modalKey],
    });
  };
  render() {
    return (
      <Fragment>
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
          {/* first row */}
          <MDBBox className="d-flex justify-content-between align-items-center mx-5 pb-3">
            <span
              className="text-left"
              style={{
                fontWeight: "600",
                color: "#192e35",
                fontSize: "28px",
              }}
            >
              Database
            </span>
            <MDBBox className="d-flex">
              <button
                color="transparent"
                style={{
                  backgroundColor: "white",
                  border: "1px solid #f14c59",
                  color: "#f14c59",
                  boxShadow: "none",
                  borderRadius: "40px",
                  fontSize: "16px",
                  height: "40px",
                }}
                className="text-capitalize px-3"
                onClick={this.toggle("NewDatabase")}
              >
                <i class="fas fa-plus-circle mr-1"></i> New Database
              </button>
              <MDBModal
                isOpen={this.state.modalNewDatabase}
                toggle={this.toggle("NewDatabase")}
                size="md"
              >
                <NewDatabase toggle={this.toggle} />
              </MDBModal>
              <button
                color="transparent"
                style={{
                  backgroundColor: "white",
                  border: "1px solid #f14c59",
                  color: "#f14c59",
                  boxShadow: "none",
                  borderRadius: "40px",
                  fontSize: "16px",
                  height: "40px",
                }}
                className="text-capitalize px-3 mx-3"
                onClick={this.toggle("FormDatabase")}
              >
                <i class="fas fa-download mr-1"></i> Download Form
              </button>
              <MDBModal
                isOpen={this.state.modalFormDatabase}
                toggle={this.toggle("FormDatabase")}
                size="md"
              >
                <DownloadFormDatabase toggle={this.toggle} />
              </MDBModal>

              <MDBFormInline className="md-form" style={{ margin: "0px" }}>
                <MDBIcon
                  style={{ cursor: "pointer", color: "#f14c59" }}
                  icon="search"
                />
                <input
                  className="form-control form-control-sm ml-2 w-75"
                  type="text"
                  placeholder="Search"
                  aria-label="Search"
                />
              </MDBFormInline>
            </MDBBox>
          </MDBBox>
          {/* end first row */}
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
              {/* title */}
              <MDBRow
                className="text-uppercase mb-3"
                style={{
                  fontWeight: "700",
                  color: "rgb(241, 76, 89)",
                  margin: "0px",
                }}
              >
                {/* name */}
                <MDBCol
                  size="2"
                  className="d-flex align-items-center justify-content-center"
                >
                  <span className="mr-1">Name</span>
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
                {/* end name */}
                {/* email */}
                <MDBCol
                  size="2"
                  className="d-flex align-items-center justify-content-center"
                >
                  <span className="mr-1">Email</span>
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
                {/* end email */}
                {/* phone */}
                <MDBCol
                  size="2"
                  className="d-flex align-items-center justify-content-center"
                >
                  <span className="mr-1">Phone</span>
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
                {/* end phone */}
                {/* bod */}
                <MDBCol
                  size="2"
                  className="d-flex align-items-center justify-content-center"
                >
                  <span className="mr-1">bod</span>
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
                {/* end bod */}
                {/* address */}
                <MDBCol
                  size="2"
                  className="d-flex align-items-center justify-content-center"
                >
                  <span className="mr-1">address</span>
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
                {/* end address */}
                {/* company */}
                <MDBCol
                  size="2"
                  className="d-flex align-items-center justify-content-center"
                >
                  <span className="mr-1">company</span>
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
                {/* end company */}
              </MDBRow>
              {/* end title */}
              <Table data={this.data} />
              <MDBBox className="pt-2 d-flex justify-content-center">
                <Pagination />
              </MDBBox>
            </MDBCol>
            {/* end table */}
          </MDBRow>
          {/* end main row */}
        </MDBBox>
      </Fragment>
    );
  }
}
export default Database;
