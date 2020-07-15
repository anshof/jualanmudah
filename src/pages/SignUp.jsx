import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import {
  MDBBtn,
  MDBModalFooter,
  MDBInput,
  MDBCardBody,
  MDBRow,
  MDBCol,
  MDBNavbarBrand,
} from "mdbreact";
import "../css/style.css";
import { doSignup, changeInputUser } from "../stores/actions/userAction";

class SignUp extends Component {
  state = {
    isOpen: false,
    passVal: false,
    messagePass: "",
  };

  toggle = (key) => () => {
    let modalKey = "modal" + key;
    this.setState({
      [modalKey]: !this.state[modalKey],
    });
  };

  checkPwd = async (e) => {
    await this.props.changeInputUser(e);
    const pwd = this.props.password;
    if (pwd.length <= 2) {
      this.setState({ messagePass: "" });
      this.setState({ passVal: false });
    } else if (pwd.length < 8) {
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

  postSignUp = async () => {
    await this.props.doSignup();
  };

  render() {
    let validSignup;
    if (
      this.state.passVal &&
      this.props.full_name &&
      this.props.username &&
      this.props.address &&
      this.props.position
    ) {
      validSignup = true;
    } else {
      validSignup = false;
    }
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
                name="full_name"
                label="Full Name"
                group
                type="text"
                containerclassName="mb-0"
                onChange={this.props.changeInputUser}
              />
              <MDBInput
                name="username"
                label="Username"
                group
                type="text"
                containerclassName="mb-0"
                onChange={this.props.changeInputUser}
              />
              <MDBInput
                name="address"
                label="Address"
                group
                type="text"
                containerclassName="mb-0"
                onChange={this.props.changeInputUser}
              />
              <MDBInput
                name="position"
                label="Position"
                group
                type="text"
                containerclassName="mb-0"
                onChange={this.props.changeInputUser}
              />
              <MDBInput
                name="password"
                label="Password"
                group
                type="password"
                containerclassName="mb-0"
                onChange={this.checkPwd}
              />
              <div style={{ color: "red" }}>
                {this.state.messagePass ? this.state.messagePass : false}
              </div>

              <div className="text-center signup-button d-flex justify-content-center mt-4">
                <MDBBtn
                  type="button"
                  rounded
                  className="btn-block z-depth-1a"
                  disabled={!validSignup}
                  style={{ maxWidth: "200px", borderRadius: "20px" }}
                  onClick={this.postSignUp}
                >
                  Sign up
                </MDBBtn>
              </div>
            </MDBCardBody>
            <MDBModalFooter
              className="mx-5 pt-3 d-flex justify-content-center"
              style={{ margin: "15px 20px 0 20px" }}
            >
              <p className="font-small grey-text ">
                Sudah punya akun ?
                <Link
                  to="/signin"
                  className="red-text ml-1"
                  style={{ cursor: "pointer" }}
                >
                  Masuk disini.
                </Link>
              </p>
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

const mapStateToProps = (state) => {
  return {
    full_name: state.userState.full_name,
    username: state.userState.username,
    password: state.userState.password,
    address: state.userState.username,
    position: state.userState.position,
  };
};
const mapDispatchToProps = {
  doSignup,
  changeInputUser,
};

export default connect(mapStateToProps, mapDispatchToProps)(SignUp);
