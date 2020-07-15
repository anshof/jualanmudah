import React, { Component } from "react";
import { Link } from "react-router-dom";
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
import { doSignin, changeInputUser } from "../stores/actions/userAction";
import { connect } from "react-redux";

class SignIn extends Component {
  state = {};

  postSignIn = async () => {
    await this.props.doSignin();
    if (localStorage.getItem("isSignin")) {
      this.props.history.push("/dashboard");
    }
  };

  handleKeyPress = (event) => {
    const submit = this.postSignIn;
    if (event.key === "Enter") {
      submit();
    }
  };

  render() {
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
              <div className="text-left" style={{ marginBottom: "100px" }}>
                <h3
                  className="dark-grey-text mb-3"
                  style={{ fontWeight: "600" }}
                >
                  Masuk dan mulailah perjalananmu bersama kami.
                </h3>
              </div>
              <MDBInput
                name="username"
                label="Username"
                group
                type="text"
                containerclassName="mb-0"
                onChange={this.props.changeInputUser}
                onKeyDown={this.handleKeyPress}
              />
              <MDBInput
                name="password"
                label="Password"
                group
                type="password"
                containerclassName="mb-0"
                onChange={this.props.changeInputUser}
                onKeyDown={this.handleKeyPress}
              />
              <div className="text-center signup-button d-flex justify-content-center mt-3">
                <MDBBtn
                  type="button"
                  rounded
                  className="btn-block z-depth-1a"
                  disabled={!this.props.username || !this.props.password}
                  style={{
                    maxWidth: "200px",
                    borderRadius: "20px",
                    marginBottom: "100px",
                  }}
                  onClick={this.postSignIn}
                >
                  Masuk
                </MDBBtn>
              </div>
            </MDBCardBody>
            <MDBModalFooter
              className="mx-5 pt-3 mb-1 d-flex justify-content-center"
              style={{ margin: "50px 20px 0 20px" }}
            >
              <p className="font-small grey-text ">
                Tidak punya akun?
                <Link
                  className="red-text ml-1"
                  to="/signup"
                  style={{ cursor: "pointer" }}
                >
                  Dafter disini.
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
    username: state.userState.username,
    password: state.userState.password,
  };
};
const mapDispatchToProps = {
  doSignin,
  changeInputUser,
};
export default connect(mapStateToProps, mapDispatchToProps)(SignIn);
