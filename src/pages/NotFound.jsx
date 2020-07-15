import React, { Component } from "react";
import { connect } from "react-redux";
import Navbar from "../components/Navbar";

import { doLogOut, getUserBio } from "../stores/actions/userAction";

class NotFound extends Component {
  componentDidMount = () => {
    this.props.getUserBio();
  };
  render() {
    return (
      <div>
        <Navbar
          fontColor={"white"}
          backNav={"rgb(241, 76, 89)"}
          logout={() => this.props.doLogOut()}
          fontColorNot={"rgb(241, 76, 89)"}
          backNavButton={"white"}
          bio={this.props.bio}
        />
        <div className="d-flex justify-content-center">
          <img
            src={require("../images/404.jpg")}
            alt="notfound"
            style={{ width: "800px" }}
          />
        </div>
        <h1 style={{ color: "rgb(241, 76, 89)", fontWeight: "500" }}>
          Halaman yang anda cari tidak ada
        </h1>
        {/* <div className="d-flex justify-content-center">
          <Link to="/">
            <button
              type="button"
              className="btn btn-dark btn-lg"
              style={{ marginTop: "-100px" }}
            >
              Go Back to Home
            </button>
          </Link>
        </div> */}
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    bio: state.userState.bio,
    username: state.userState.username,
    password: state.userState.password,
  };
};
const mapDispatchToProps = {
  doLogOut,
  getUserBio,
};
export default connect(mapStateToProps, mapDispatchToProps)(NotFound);
