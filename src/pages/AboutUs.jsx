import React, { Component } from "react";
import { connect } from "react-redux";
import { MDBBox, MDBRow, MDBCol } from "mdbreact";
import "../css/style.css";

import Navbar from "../components/Navbar";
import {
  doLogOut,
  doRefershSignin,
  getUserBio
} from "../stores/actions/userAction";
class AboutUs extends Component {
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
          bio={this.props.bio}
        />
        <MDBBox
          style={{
            backgroundColor: "#f7f7f7",
            padding: "100px 0 1px 0",
          }}
        >
          <MDBRow style={{ margin: "0" }}>
            <MDBCol size="6">
              <img
                src={require("../images/aboutus.png")}
                alt="profile"
                style={{ width: "600px" }}
              />
            </MDBCol>
            <MDBCol size="6" className="mt-3">
              <p
                style={{
                  fontSize: "18px",
                  color: "#1b2e35",
                }}
              >
                lorem ipsum
              </p>
            </MDBCol>
          </MDBRow>
        </MDBBox>
      </MDBBox>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    bio: state.userState.bio,
  };
};
const mapDispatchToProps = {
  doLogOut,
  doRefershSignin,
  getUserBio
};
export default connect(mapStateToProps, mapDispatchToProps)(AboutUs);
