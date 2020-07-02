import React, { Component, Fragment } from "react";
import {
  MDBBox,
  MDBCol,
  MDBRow,
  MDBContainer,
  MDBModal,
  MDBLink,
} from "mdbreact";
import { Link } from "react-router-dom";

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
      <Fragment>
        <Navbar
          toggle={(key) => this.toggle(key)}
          modalSignin={this.state.modalSignin}
          modalSignup={this.state.modalSignup}
          isLogin={this.state.isLogin}
          backNav={"white"}
          fontColor={"rgb(241, 76, 89)"}
        />
        <MDBRow
          style={{
            margin: "0",
            position: "relative",
          }}
        >
          <MDBCol size="4" className="d-flex align-items-center pl-5 mt-5">
            <MDBBox style={{ color: "#1b2e35" }} className="box text-left pl-5">
              <h1
                style={{
                  fontFamily: "Source Sans Pro",
                  fontWeight: "700",
                }}
                className="text-capitalize"
              >
                help you <br /> boost your <br /> revenue
              </h1>
              <p
                style={{
                  fontSize: "18px",
                  fontWeight: "400",
                  color: "#385a66",
                }}
              >
                Increasing your revenue by connecting you to your customer in a
                better, easier and faster way.
              </p>
              <Link to="/signup">
                <MDBBox
                  className="btn text-uppercase my-0 py-2"
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
              </Link>
            </MDBBox>
          </MDBCol>
          <MDBCol size="8" className="mt-5">
            <img
              className="mt-5"
              src={require("../images/stat.png")}
              alt="front"
              style={{ width: "700px" }}
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
          <h2>“Content builds relationships. Relationships are built on trust. Trust drives revenue”</h2>
          <p style={{ fontSize: "18px", color: "#385a66" }}>- Andrew Davis -</p>
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
              color: "#385a66",
            }}
          >
            <p
              style={{ fontSize: "35px", fontWeight: "600", color: "#1b2e35" }}
              className="mb-5"
            >
              What we <span style={{ color: "#f14c59" }}>have</span>?
            </p>
            <MDBRow>
              <MDBCol
                size="4"
                className="d-flex justify-content-center align-items-center"
              >
                <MDBBox className="feature py-5">
                  <img
                    className="noPadMar"
                    src={require("../images/front.jpg")}
                    alt="email"
                    style={{ width: "280px" }}
                  />
                  <h5
                    className="noPadMar"
                    style={{ fontWeight: "600", color: "#1b2e35" }}
                  >
                    Broadcast email
                  </h5>
                  <p className="noPadMar">
                    Sending email to dozens customer <br /> easily.
                  </p>
                </MDBBox>
              </MDBCol>
              <MDBCol
                size="4"
                className="d-flex justify-content-center align-items-center"
              >
                <MDBBox className="feature py-5">
                  <img
                    src={require("../images/checklist.jpg")}
                    alt="email"
                    style={{ height: "200px" }}
                  />
                  <h5
                    className="noPadMar"
                    style={{ fontWeight: "600", color: "#1b2e35" }}
                  >
                    Email tracker
                  </h5>
                  <p>
                    You'll know when your customers <br /> see your campaign.
                  </p>
                </MDBBox>
              </MDBCol>
              <MDBCol
                size="4"
                className="d-flex justify-content-center align-items-center"
              >
                <MDBBox className="feature py-5">
                  <img
                    src={require("../images/wa.jpg")}
                    alt="email"
                    style={{ width: "300px" }}
                  />
                  <h5
                    className="noPadMar"
                    style={{ fontWeight: "600", color: "#1b2e35" }}
                  >
                    Broadcast WhatsApp
                  </h5>
                  <p>
                    Get closer to your customer through <br />
                    broadcast WhatsApp.
                  </p>
                </MDBBox>
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
            position: "relative",
          }}
        >
          <MDBBox className="profile"></MDBBox>
          <MDBBox
            style={{
              color: "#385a66",
            }}
          >
            <p
              style={{ fontSize: "35px", fontWeight: "600", color: "#1b2e35" }}
              className="mb-5"
            >
              Who are <span style={{ color: "#f14c59" }}>we</span>?
            </p>
            <MDBRow
              style={{
                margin: "0px 15px",
              }}
            >
              <MDBCol size="7" className="pictTeam">
                <img
                  src={require("../images/pana.png")}
                  alt="profile"
                  style={{ width: "600px" }}
                />
              </MDBCol>
              <MDBCol size="5" className="text-left d-flex align-items-center">
                <MDBBox>
                  <p
                    style={{
                      fontSize: "28px",
                      fontWeight: "600",
                      color: "#f14c59",
                    }}
                  >
                    Jualan Mudah
                  </p>
                  <p style={{ fontSize: "18px" }}>
                    There are many ways you can approach your customers.
                    <br />
                    We provide broadcast email services for sales. Here, <br />
                    you can see whether your customers read the emails you send
                    <br />
                    or not. Not only email but also whatsapp.
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
            position: "relative",
          }}
        >
          <MDBBox className="secure"></MDBBox>
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
                size="5"
                className="d-flex justify-content-end align-items-center"
              >
                <MDBBox className="text-left ml-5">
                  <p
                    style={{
                      fontSize: "32px",
                      fontWeight: "600",
                      color: "#1b2e35",
                    }}
                  >
                    Guaranteed privacy
                  </p>
                  <p style={{ fontSize: "18px" }}>
                    We never use any external trackers, track members between{" "}
                    communities or share any of your data. We also use magic
                    links for login and anonymize collected data for anonymous
                    visitors. Our #1 goal is making sure your data and community
                    channel is yours and yours alone.
                  </p>
                </MDBBox>
              </MDBCol>
              <MDBCol size="7" className="text-left box">
                <img
                  src={require("../images/security.png")}
                  alt="profile"
                  style={{ width: "600px" }}
                />
              </MDBCol>
            </MDBRow>
          </MDBBox>
        </MDBBox>
        {/* akhir security */}
        {/* started */}
        <MDBBox
          style={{
            margin: "100px auto 0 auto",
            padding: "20px 0 0 0",
            position: "relative",
          }}
        >
          <MDBBox
            className="mb-5"
            style={{
              color: "#385a66",
            }}
          >
            <MDBRow
              style={{
                borderRadius: "50px",
                backgroundColor: "#fef8f8",
                margin: "25px 25px",
              }}
            >
              <MDBCol size="7" className="text-right box">
                <img
                  src={require("../images/launch.png")}
                  alt="profile"
                  style={{ width: "600px" }}
                />
              </MDBCol>
              <MDBCol size="5" className="text-left d-flex align-items-center">
                <MDBBox className="box">
                  <p
                    style={{
                      fontSize: "32px",
                      fontWeight: "600",
                      color: "#1b2e35",
                    }}
                  >
                    Getting started is easy
                  </p>
                  <p style={{ fontSize: "18px" }}>
                    Manage your campaign, customers and sales. <br />
                    Grow your audience.
                  </p>
                  <MDBLink
                    to="/signup"
                    className="btn text-uppercase my-0 py-2"
                    style={{
                      boxShadow: "none",
                      fontSize: "18px",
                      backgroundColor: "#f14c59",
                      color: "white",
                      borderRadius: "20px",
                      maxWidth: "160px",
                    }}
                  >
                    Start now
                  </MDBLink>
                  <MDBModal
                    isOpen={this.modalSignin}
                    toggle={this.toggle("Signin")}
                    size="md"
                  >
                    <SignIn />
                  </MDBModal>
                </MDBBox>
              </MDBCol>
            </MDBRow>
          </MDBBox>
          {/* akhir started */}
          {/* footer */}
          <MDBBox className="footer">
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
          <MDBBox className="py-3 copy">
            <span>
              Copyright &#169; 2020 JUALAN.MUDAH. All Rights Reserved.
            </span>
          </MDBBox>
          {/* akhir copyright */}
        </MDBBox>
      </Fragment>
    );
  }
}

export default Home;
