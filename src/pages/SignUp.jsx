import React, { Component } from "react";
import {Link} from "react-router-dom"
import {
  MDBBtn,
  MDBModalFooter,
  MDBInput,
  MDBCardBody,
  MDBRow,
  MDBModal,
  MDBCol,
  MDBNavbarBrand
} from "mdbreact";
import "../css/style.css";
import SignIn from "../components/SignIn";

export default class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLogin: false,
      isOpen: false,
      modalSignin: false,

      passVal: false,
      messagePass: "",
      password: "",

      emailVal: false,
      messageEmail: "",
      email: "",

      signupVal: false,
    };
    this.toggle = this.toggle.bind(this);
  }

  toggle = (key) => () => {
    let modalKey = "modal" + key;
    this.setState({
      [modalKey]: !this.state[modalKey],
    });
  };

  checkEmail = (event) => {
    this.setState({ email: event.target.value });
    const email = this.state.email;
    if (email.length <= 2) {
      this.setState({ messageEmail: "" });
      this.setState({ emailVal: false });
    } else if (!/^[a-zA-Z0-9]+@(?:[a-zA-Z0-9]+\.)+[A-Za-z]+$/.test(email)) {
      this.setState({ messageEmail: "Email is invalid" });
      this.setState({ emailVal: false });
    } else {
      this.setState({ messageEmail: "" });
      this.setState({ emailVal: true });
    }
  };

  checkPwd = (event) => {
    this.setState({ password: event.target.value });
    const pwd = this.state.password;
    if (pwd.length <= 2) {
      this.setState({ messagePass: "" });
      this.setState({ passVal: false });
    } else if (pwd.length < 7) {
      this.setState({ messagePass: "Your password is too short" });
      this.setState({ passVal: false });
    } else if (!/^(?=.*\d)/.test(pwd)) {
      this.setState({ messagePass: "Number is required" });
      this.setState({ passVal: false });
    } else if (!/(?=.*[a-z])/.test(pwd)) {
      this.setState({ messagePass: "Alphabet is required" });
      this.setState({ passVal: false });
    } else {
      this.setState({ messagePass: "" });
      this.setState({ passVal: true });
    }
  };

  render() {
    const path = this.props.location.pathname
    return (
      <div className="signup">

        <MDBRow
          style={{
            marginRight: "0px",
          }}
        >
          <MDBCol
            size="5"
            style={{ minHeight: "100vmin", backgroundColor: "#fde9e9" }}
          >
          <MDBNavbarBrand className="ml-5 mt-3 d-flex justify-content-start">
          <Link
          to="/"
            className="logo"
            style={{
              fontSize: "32px",
              color: "#f14c59",
            }}
          >
            JM
          </Link>
        </MDBNavbarBrand>
            <MDBCardBody
              className="mx-4"
              style={{ marginTop: "10px", padding: "20px 90px" }}
            >
              <div className="text-left">
                <h3
                  className="dark-grey-text mb-3"
                  style={{ fontWeight: "600" }}
                >
                  Get your free Jualanmudah <br /> account now!
                </h3>
              </div>
              <MDBInput
                name="name"
                label="Full Name"
                group
                type="text"
                containerClass="mb-0"
              />
              <MDBInput
                name="nickname"
                label="Username"
                group
                type="text"
                containerClass="mb-0"
              />
              <MDBInput
                name="email"
                label="Email"
                group
                type="email"
                containerClass="mb-0"
                onChange={this.checkEmail}
              />
              <div style={{ color: "red" }}>
                {this.state.messageEmail ? this.state.messageEmail : false}
              </div>
              <MDBInput
                name="password"
                label="Password"
                group
                type="password"
                containerClass="mb-0"
                onChange={this.checkPwd}
              />
              <div style={{ color: "red" }}>
                {this.state.messagePass ? this.state.messagePass : false}
              </div>
              <div
                className="text-left"
                style={{ fontSize: "14px", marginTop: "10px" }}
              >
                Please input password same as your email account password
              </div>
              {/* <MDBInput
            name="address"
            label="Your full address"
            group
            type="text"
            containerClass="mb-0"
          />
          <MDBInput
            name="position"
            label="Your position"
            group
            type="text"
            containerClass="mb-0"
          /> */}
              <div className="text-center signup-button d-flex justify-content-center mt-4">
                <MDBBtn
                  type="button"
                  rounded
                  className="btn-block z-depth-1a"
                  disabled={!this.state.passVal || !this.state.emailVal}
                  style={{ maxWidth: "200px", borderRadius: "20px"}}
                >
                  Sign up
                </MDBBtn>
              </div>
            </MDBCardBody>
            <MDBModalFooter
              className="mx-5 pt-3 mb-1 d-flex justify-content-center"
              style={{ margin: "50px 20px 0 20px" }}
            >
              <p className="font-small grey-text ">
                Have an account?
                <Link to="/signin"className="red-text ml-1" style={{cursor: "pointer" }}>
                  Sign in
                </Link>
              </p>
              <MDBModal
                isOpen={this.state.modalSignin}
                toggle={this.toggle("Signin")}
                size="md"
              >
                <SignIn toggle={(key) => this.toggle(key)}
                  path = {path}
                />
              </MDBModal>
            </MDBModalFooter>
          </MDBCol>
          <MDBCol size="7" style={{ marginTop: "75px" }}>
            <img
              src={require("../images/signup.jpg")}
              alt="front"
              style={{ maxWidth: "600px" }}
            />
          </MDBCol>
        </MDBRow>
      </div>
    );
  }
}
