import React, { Component } from "react";
import { Link } from "react-router-dom";
import { MDBBox, MDBCol, MDBRow, MDBContainer, MDBModal } from "mdbreact";
import { BrowserRouter as Router, Link } from "react-router-dom";

import "../css/style.css";
import Navbar from "../components/Navbar";
import SignIn from "../components/SignIn";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLogin: false,
      isOpen: false,
      modalSignin: false,
      modalSignup: false,
    };
    this.toggleCollapse = this.toggleCollapse.bind(this);
    this.toggle = this.toggle.bind(this);
  }

  toggleCollapse() {
    this.setState({ isOpen: !this.state.isOpen });
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
        <Navbar
          toggle={(key) => this.toggle(key)}
          modalSignin={this.state.modalSignin}
          modalSignup={this.state.modalSignup}
          isLogin={this.state.isLogin}
          toggle={(key) => this.toggle(key)}
          modalSignin={this.state.modalSignin}
          modalSignup={this.state.modalSignup}
          // backNav={"white"}
          // fontColor={"rgb(241, 76, 89)"}
        />
        <MDBRow
          style={{
            margin: "0px 15px",
            paddingTop: "75px"
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
                help you <br /> boost your <br /> revenue
              </h1>
              <p style={{ fontWeight: "400", color: "#385a66" }}>
                Increasing your revenue by connecting you to your customer in a
                better, easier and faster way.
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
                onClick={this.toggle("Signin")}
              >
                Start now
              </MDBBox>
            </MDBBox>
          </MDBCol>
          <MDBCol size="8">
            <img
              src={require("../images/Statistics.jpg")}
              alt="front"
              style={{ width: "800px" }}
            />
          </MDBCol>
        </MDBRow>
        {/* quote */}
        <MDBBox
          style={{
            margin: "100px 0",
            padding: "20px 0",
            color: "#1b2e35",
          }}
        >
          <h2>"ini quotes buwagus, sumpah sumpah"</h2>
          <p style={{ color: "#385a66" }}>alula</p>
        </MDBBox>
        {/* akhir quote */}
        {/* 3 panel */}
        <MDBBox
          style={{
            margin: "100px auto",
            width: "1200px",
          }}
        >
          <MDBBox
            style={{
              fontFamily: "Source Sans Pro",
              color: "#385a66",
            }}
          >
            <h2
              style={{ fontWeight: "600", color: "#1b2e35" }}
              className="mb-4"
            >
              What we <span style={{ color: "#f14c59" }}>have</span>?
            </h2>
            <MDBRow>
              <MDBCol size="4">
                <img
                  src={require("../images/front.jpg")}
                  alt="email"
                  style={{ width: "300px" }}
                />
                <h5
                  className="py-0 my-0"
                  style={{ fontWeight: "600", color: "#1b2e35" }}
                >
                  Broadcast email
                </h5>
                <p>
                  Sending email to dozens customer <br /> easily.
                </p>
              </MDBCol>
              <MDBCol size="4">
                <img
                  src={require("../images/checklist.jpg")}
                  alt="email"
                  style={{ height: "200px" }}
                />
                <h5
                  className="py-0 my-0"
                  style={{ fontWeight: "600", color: "#1b2e35" }}
                >
                  Email tracker
                </h5>
                <p>
                  You'll know when your customers <br /> see your campaign.
                </p>
              </MDBCol>
              <MDBCol size="4">
                <img
                  src={require("../images/wa.jpg")}
                  alt="email"
                  style={{ width: "300px" }}
                />
                <h5
                  className="py-0 my-0"
                  style={{ fontWeight: "600", color: "#1b2e35" }}
                >
                  Broadcast WhatsApp
                </h5>
                <p>
                  Get closer to your customer through <br />
                  broadcast WhatsApp.
                </p>
              </MDBCol>
            </MDBRow>
          </MDBBox>
        </MDBBox>
        {/* akhir 3 panel */}
        {/* profile */}
        <MDBBox
          style={{
            margin: "100px auto",
            padding: "20px 0",
          }}
        >
          <MDBBox
            style={{
              fontFamily: "Source Sans Pro",
              color: "#385a66",
            }}
          >
            <h3
              style={{ fontWeight: "600", color: "#1b2e35" }}
              className="mb-4"
            >
              Who are <span style={{ color: "#f14c59" }}>we</span>?
            </h3>
            <MDBRow
              style={{
                margin: "0px 15px",
              }}
            >
              <MDBCol size="6" className="text-right">
                <img
                  src={require("../images/team.jpg")}
                  alt="profile"
                  style={{ width: "400px" }}
                />
              </MDBCol>
              <MDBCol size="6" className="text-left d-flex align-items-center">
                <MDBBox>
                  <h4 style={{ fontWeight: "600", color: "#f14c59" }}>
                    Jualan Mudah
                  </h4>
                  <p>
                    There are many ways you can approach your customers. We
                    provide
                    <br />
                    broadcast email services for sales. Here, you can see
                    whether your customers read <br />
                    the emails you send or not. Not only email but also
                    whatsapp.
                  </p>
                </MDBBox>
              </MDBCol>
            </MDBRow>
          </MDBBox>
        </MDBBox>
        {/* akhir profile */}
        {/* security */}
        <MDBBox
          style={{
            margin: "100px auto",
            padding: "20px 0",
          }}
        >
          <MDBBox
            style={{
              fontFamily: "Source Sans Pro",
              color: "#385a66",
            }}
          >
            <MDBRow
              style={{
                margin: "0px 15px",
              }}
            >
              <MDBCol
                size="6"
                className="d-flex justify-content-end align-items-center"
              >
                <MDBBox>
                  <h4
                    className="text-right"
                    style={{ fontWeight: "600", color: "#1b2e35" }}
                  >
                    Don't Worry!!!!
                  </h4>
                  <p>We'll keep your data save. </p>
                </MDBBox>
              </MDBCol>
              <MDBCol size="6" className="text-left">
                <img
                  src={require("../images/save.jpg")}
                  alt="profile"
                  style={{ width: "400px" }}
                />
              </MDBCol>
            </MDBRow>
          </MDBBox>
        </MDBBox>
        {/* akhir security */}
        {/* started */}
        <MDBBox
          style={{
            margin: "100px auto",
            padding: "20px 0",
          }}
        >
          <MDBBox
            style={{
              fontFamily: "Source Sans Pro",
              color: "#385a66",
            }}
          >
            <MDBRow
              style={{
                margin: "0px 15px",
              }}
            >
              <MDBCol size="6" className="text-right">
                <img
                  src={require("../images/goingUp.jpg")}
                  alt="profile"
                  style={{ width: "400px" }}
                />
              </MDBCol>
              <MDBCol size="6" className="text-left d-flex align-items-center">
                <MDBBox>
                  <h4 style={{ fontWeight: "600", color: "#1b2e35" }}>
                    Getting started is easy
                  </h4>
                  <p>
                    Manage your campaign, customers and sales. Grow your
                    audience.
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
                  <MDBModal
                    isOpen={this.modalSignin}
                    toggle={
                      this.toggle("Signup")
                        ? this.toggle("Signup") & this.toggle("Signin")
                        : this.toggle("Signin")
                    }
                    size="md"
                  >
                    <SignIn />
                  </MDBModal>
                </MDBBox>
              </MDBCol>
            </MDBRow>
          </MDBBox>
        </MDBBox>
        {/* akhir started */}
        {/* footer */}
        <MDBBox
          className="text-left py-5"
          style={{
            backgroundColor: "#f14c59",
            color: "white",
            fontFamily: "Source Sans Pro",
          }}
        >
          <MDBContainer>
            <MDBRow>
              <MDBCol size="3">
                <h6 className="font-weight-bold">Menu</h6>
                <h6 className="mb-0">Home</h6>
                <h6 className="my-0">Features</h6>
                <h6 className="my-0">About</h6>
              </MDBCol>
              <MDBCol size="3">
                <h6 className="font-weight-bold">Features</h6>
                <h6 className="mb-0">Email broadcast</h6>
                <h6 className="my-0">Email tracker</h6>
                <h6 className="my-0">WhatsApp broadcast</h6>
              </MDBCol>
              <MDBCol size="3">
                <h6 className="font-weight-bold">Alterra Academy</h6>
                <h6 className="mb-0">
                  Jalan Raya Tidar No. 23, Karangbesuki,
                  <br /> Kec. Sukun, Kota Malang, <br />
                  Jawa Timur 65146
                </h6>
              </MDBCol>
              <MDBCol size="3">
                <h6 className="font-weight-bold">Social Media</h6>
                <MDBBox className="d-flex">
                  <h4 className="mb-0 pr-2">
                    <Link to="/#">
                      <i className="text-white fab fa-facebook-square"></i>
                    </Link>
                  </h4>
                  <h4 className="my-0 pr-2">
                    <Link to="/#">
                      <i className="text-white fab fa-instagram-square"></i>
                    </Link>
                  </h4>
                  <h4 className="my-0 pr-2">
                    <Link to="/#">
                      <i className="text-white fab fa-youtube-square"></i>
                    </Link>
                  </h4>
                  <h4 className="my-0 pr-2">
                    <Link to="/#">
                      <i className="text-white fab fa-twitter-square"></i>
                    </Link>
                  </h4>
                  <h4 className="my-0 pr-2">
                    <Link to="/#">
                      <i className="text-white fab fa-linkedin-square"></i>
                    </Link>
                  </h4>
                </MDBBox>
              </MDBCol>
            </MDBRow>
          </MDBContainer>
        </MDBBox>
        {/* akhir footer */}
        {/* copyright */}
        <MDBBox
          className="py-3"
          style={{
            backgroundColor: "#a02f33",
            fontFamily: "Source Sans Pro",
            color: "white",
          }}
        >
          <span className="text-center">
            Copyright &#169; 2020 JUALAN.MUDAH. All Rights Reserved.
          </span>
        </MDBBox>
        {/* akhir copyright */}
      </Router>
    );
  }
}

export default Home;
