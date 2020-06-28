import React, { Component } from "react";
import { BrowserRouter as Router } from "react-router-dom";

import {
  MDBBox,
  MDBRow,
  MDBCol,
  MDBBtn,
  MDBIcon,
  MDBFormInline,
  MDBModal,
} from "mdbreact";

import Navbar from "../components/Navbar";
import Table from "../components/TableCustomer";
import PictName from "../components/PictName";
import Pagination from "../components/Pagination";
import NewDatabase from "../components/NewDatabaseModal";
import DownloadFormDatabase from "../components/DownloadFormModal"

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
      }
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
      <Router>
        <MDBBox style={{ fontFamily: "Source Sans Pro" }}>
          <Navbar
            isLogin={this.state.isLogin}
            fontColor={"white"}
            backNav={"rgb(241, 76, 89)"}
            style={{ position: "fixed" }}
          />
          <MDBBox style={{ backgroundColor: "#f7f7f7" }}>
            <MDBRow style={{ paddingTop: "100px" }}>
              <MDBCol
                size="6"
                style={{
                  marginTop: "auto",
                }}
              >
                <h3
                  className="text-left ml-5"
                  style={{
                    fontWeight: "600",
                    color: "#192e35",
                  }}
                >
                  Database
                </h3>
              </MDBCol>

              <MDBCol
                size="3"
                style={{ display: "flex", justifyContent: "end" }}
              >
                <MDBRow>
                  <MDBBtn
                    color="transparent"
                    style={{
                      backgroundColor: "#f14c59",
                      color: "white",
                      boxShadow: "none",
                      borderRadius: "40px",
                      fontSize: "14px",
                      padding: ".50rem 1rem",
                      minWidth:"150px"
                    }}
                    className="text-capitalize"
                    onClick={this.toggle("NewDatabase")}
                  >
                      <i class="fas fa-plus-circle mr-1"></i> New Database
                  
                  </MDBBtn>
                  <MDBModal
                    isOpen={this.state.modalNewDatabase}
                    toggle={this.toggle("NewDatabase")}
                    size="md"
                  >
                    <NewDatabase toggle={this.toggle} />
                  </MDBModal>
                  <MDBBtn
                    color="transparent"
                    style={{
                      backgroundColor: "#f14c59",
                      color: "white",
                      boxShadow: "none",
                      borderRadius: "40px",
                      fontSize: "14px",
                      padding: ".50rem 1rem",
                      minWidth:"150px"
                    }}
                    className="text-capitalize"
                    onClick={this.toggle("FormDatabase")}
                  >
                    <i class="fas fa-download mr-1"></i> Download Form
                  </MDBBtn>
                  <MDBModal
                    isOpen={this.state.modalFormDatabase}
                    toggle={this.toggle("FormDatabase")}
                    size="md"
                  >
                    <DownloadFormDatabase toggle={this.toggle} />
                  </MDBModal>
                </MDBRow>
              </MDBCol>

              <MDBCol size="3">
                <MDBFormInline className="md-form" style={{ margin: "0px" }}>
                  <MDBIcon style={{cursor:"pointer"}}icon="search" />
                  <input
                    className="form-control form-control-sm ml-2 w-75"
                    type="text"
                    placeholder="Search"
                    aria-label="Search"
                  />
                </MDBFormInline>
              </MDBCol>
            </MDBRow>
            <MDBRow
              style={{
                margin: "25px 25px 0 25px",
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
                    <i class="fas fa-plus mr-1"></i> New Broadcast
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
                <MDBRow
                  className="text-uppercase mb-1"
                  style={{ fontWeight: "700", color: "rgb(241, 76, 89)" }}
                >
                  <MDBCol
                    size="2"
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      marginBottom: "10px",
                    }}
                  >
                    <MDBRow>
                      <MDBCol className="pr-2">
                        <div className="mt-1">Name</div>
                      </MDBCol>

                      <MDBCol>
                        <MDBRow>
                          <MDBIcon style={{cursor:"pointer"}}icon="caret-up" />
                        </MDBRow>

                        <MDBRow>
                          <MDBIcon style={{cursor:"pointer"}}icon="caret-down" />
                        </MDBRow>
                      </MDBCol>
                    </MDBRow>
                  </MDBCol>
                  <MDBCol
                    size="2"
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      marginBottom: "10px",
                    }}
                  >
                    <MDBRow
                      style={{ justifyContent: "center", marginBottom: "10px" }}
                    >
                      <MDBCol className="pr-2">
                        <div className="text-center d-flex align-items-center mt-1">
                          Email
                        </div>
                      </MDBCol>
                      <MDBCol>
                        <MDBRow>
                          <MDBIcon style={{cursor:"pointer"}}icon="caret-up" />
                        </MDBRow>

                        <MDBRow>
                          <MDBIcon style={{cursor:"pointer"}}icon="caret-down" />
                        </MDBRow>
                      </MDBCol>
                    </MDBRow>
                  </MDBCol>
                  <MDBCol
                    size="2"
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      marginBottom: "10px",
                    }}
                  >
                    <MDBRow>
                      <MDBCol className="pr-2">
                        <div className="text-center d-flex align-items-center mt-1">
                          Phone
                        </div>
                      </MDBCol>
                      <MDBCol>
                        <MDBRow>
                          <MDBIcon style={{cursor:"pointer"}}icon="caret-up" />
                        </MDBRow>

                        <MDBRow>
                          <MDBIcon style={{cursor:"pointer"}}icon="caret-down" />
                        </MDBRow>
                      </MDBCol>
                    </MDBRow>
                  </MDBCol>
                  <MDBCol
                    size="2"
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      marginBottom: "10px",
                    }}
                  >
                    <MDBRow>
                      <MDBCol className="pr-2">
                        <div className="text-center d-flex align-items-center mt-1">
                          BoD
                        </div>
                      </MDBCol>
                      <MDBCol>
                        <MDBRow>
                          <MDBIcon style={{cursor:"pointer"}}icon="caret-up" />
                        </MDBRow>

                        <MDBRow>
                          <MDBIcon style={{cursor:"pointer"}}icon="caret-down" />
                        </MDBRow>
                      </MDBCol>
                    </MDBRow>
                  </MDBCol>
                  <MDBCol
                    size="2"
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      marginBottom: "10px",
                    }}
                  >
                    <MDBRow>
                      <MDBCol className="pr-2">
                        <div className="text-center d-flex align-items-center mt-1">
                          Address
                        </div>
                      </MDBCol>
                      <MDBCol>
                        <MDBRow>
                          <MDBIcon style={{cursor:"pointer"}}icon="caret-up" />
                        </MDBRow>

                        <MDBRow>
                          <MDBIcon style={{cursor:"pointer"}}icon="caret-down" />
                        </MDBRow>
                      </MDBCol>
                    </MDBRow>
                  </MDBCol>
                  <MDBCol
                    size="2"
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      marginBottom: "10px",
                    }}
                  >
                    <MDBRow>
                      <MDBCol className="pr-2">
                        <div className="text-center d-flex align-items-center mt-1">
                          Company
                        </div>
                      </MDBCol>
                      <MDBCol>
                        <MDBRow>
                          <MDBIcon style={{cursor:"pointer"}}icon="caret-up" />
                        </MDBRow>

                        <MDBRow>
                          <MDBIcon style={{cursor:"pointer"}}icon="caret-down" />
                        </MDBRow>
                      </MDBCol>
                    </MDBRow>
                  </MDBCol>
                </MDBRow>
                <Table data={this.data} />
                <MDBRow>
                  <MDBCol style={{ marginTop: "15px" }}>
                    <Pagination />
                  </MDBCol>
                </MDBRow>
              </MDBCol>
            </MDBRow>
          </MDBBox>
        </MDBBox>
      </Router>
    );
  }
}
export default Database;
