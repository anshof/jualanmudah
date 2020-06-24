import React, { Component } from "react";
import { BrowserRouter as Router } from "react-router-dom";

import {
  MDBBox,
  MDBRow,
  MDBCol,
  MDBBtn,
  MDBIcon,
  MDBFormInline,
} from "mdbreact";

import Navbar from "../components/Navbar";
import Table from "../components/TableCustomer";
import PictName from "../components/PictName";
import Pagination from "../components/Pagination"
import "../css/style.css";

class Database extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLogin: true,
    };
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
      {
        name: "Herrod Chandler",
        email: "Sales Assistant",
        company: "San Francisco",
        address: "59",
        bod: "2012/08/06",
        phone: "$137",
      },
      {
        name: "Rhona Davidson",
        email: "Integration Specialist",
        company: "Tokyo",
        address: "55",
        bod: "2010/10/14",
        phone: "$327",
      },
      {
        name: "Colleen Hurst",
        email: "Javascript Developer",
        company: "San Francisco",
        address: "39",
        bod: "2009/09/15",
        phone: "$205",
      },
      {
        name: "Sonya Frost",
        email: "Software Engineer",
        company: "Edinburgh",
        address: "23",
        bod: "2008/12/13",
        phone: "$103",
      },
      {
        name: "Jena Gaines",
        email: "company Manaddressr",
        company: "London",
        address: "30",
        bod: "2008/12/19",
        phone: "$90",
      },
      {
        name: "Quinn Flynn",
        email: "Support Lead",
        company: "Edinburgh",
        address: "22",
        bod: "2013/03/03",
        phone: "$342",
      },
      {
        name: "Charde Marshall",
        email: "Regional Director",
        company: "San Francisco",
        address: "36",
        bod: "2008/10/16",
        phone: "$470",
      },
      {
        name: "Haley Kennedy",
        email: "Senior Marketing Designer",
        company: "London",
        address: "43",
        bod: "2012/12/18",
        phone: "$313",
      },
      {
        name: "Tatyana Fitzpatrick",
        email: "Regional Director",
        company: "London",
        address: "19",
        bod: "2010/03/17",
        phone: "$385",
      },
      {
        name: "Michael Silva",
        email: "Marketing Designer",
        company: "London",
        address: "66",
        bod: "2012/11/27",
        phone: "$198",
      },
      {
        name: "Paul Byrd",
        email: "Chief Financial companyr (CFO)",
        company: "New York",
        address: "64",
        bod: "2010/06/09",
        phone: "$725",
      },
      {
        name: "Gloria Little",
        email: "Systems Administrator",
        company: "New York",
        address: "59",
        bod: "2009/04/10",
        phone: "$237",
      },
      {
        name: "Bradley Greer",
        email: "Software Engineer",
        company: "London",
        address: "41",
        bod: "2012/10/13",
        phone: "$132",
      },
      {
        name: "Dai Rios",
        email: "Personnel Lead",
        company: "Edinburgh",
        address: "35",
        bod: "2012/09/26",
        phone: "$217",
      },
      {
        name: "Jenette Caldwell",
        email: "Development Lead",
        company: "New York",
        address: "30",
        bod: "2011/09/03",
        phone: "$345",
      },
      {
        name: "Yuri Berry",
        email: "Chief Marketing companyr (CMO)",
        company: "New York",
        address: "40",
        bod: "2009/06/25",
        phone: "$675",
      },
    ];
  }
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
                  {/* <MDBCol size="6"> */}
                  <MDBBtn
                    color="transparent"
                    style={{
                      backgroundColor: "#f14c59",
                      color: "white",
                      boxShadow: "none",
                      borderRadius: "40px",
                      fontSize: "14px",
                      padding: ".50rem 1rem",
                    }}
                    className="text-capitalize"
                  >
                    <i class="fas fa-plus mr-1"></i> New broadcast
                  </MDBBtn>
                  {/* </MDBCol> */}
                  {/* <MDBCol size="6"> */}
                  <MDBBtn
                    color="transparent"
                    style={{
                      backgroundColor: "#f14c59",
                      color: "white",
                      boxShadow: "none",
                      borderRadius: "40px",
                      fontSize: "14px",
                      padding: ".50rem 1rem",
                    }}
                    className="text-capitalize"
                  >
                    <i class="fas fa-download mr-1"></i> Download Form
                  </MDBBtn>
                  {/* </MDBCol> */}
                </MDBRow>
              </MDBCol>

              <MDBCol size="3">
                <MDBFormInline className="md-form" style={{ margin: "0px" }}>
                  <MDBIcon icon="search" />
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
                      <i class="fas fa-plus-circle mr-1"></i> New Database
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
                          <MDBIcon icon="caret-up" />
                        </MDBRow>

                        <MDBRow>
                          <MDBIcon icon="caret-down" />
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
                          <MDBIcon icon="caret-up" />
                        </MDBRow>

                        <MDBRow>
                          <MDBIcon icon="caret-down" />
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
                          <MDBIcon icon="caret-up" />
                        </MDBRow>

                        <MDBRow>
                          <MDBIcon icon="caret-down" />
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
                          <MDBIcon icon="caret-up" />
                        </MDBRow>

                        <MDBRow>
                          <MDBIcon icon="caret-down" />
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
                          <MDBIcon icon="caret-up" />
                        </MDBRow>

                        <MDBRow>
                          <MDBIcon icon="caret-down" />
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
                          <MDBIcon icon="caret-up" />
                        </MDBRow>

                        <MDBRow>
                          <MDBIcon icon="caret-down" />
                        </MDBRow>
                      </MDBCol>
                    </MDBRow>
                  </MDBCol>
                </MDBRow>
                <Table data={this.data} />
                <MDBRow>
                  <MDBCol style={{marginTop:"15px"}}>
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
