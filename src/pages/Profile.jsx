import React, { Component } from "react";
import { connect } from "react-redux";
import { MDBBox, MDBRow, MDBCol, MDBContainer } from "mdbreact";
import { Redirect } from "react-router-dom";
import Navbar from "../components/Navbar";
import PictName from "../components/PictName";
import Loading from "../components/Loading";
import {
  doLogOut,
  doRefershSignin,
  getUserBio,
} from "../stores/actions/userAction";
class Profile extends Component {
  state = {};

  componentDidMount = async () => {
    await this.props.doRefershSignin();
    await this.props.getUserBio();
  };

  render() {
    if (!localStorage.getItem("isSignin")) {
      return (
        <Redirect
          to={{
            pathname: "/signin",
            state: { message: "You must sign in first!" },
          }}
        />
      );
    } else {
      return (
        <MDBBox>
          <Navbar
            fontColor={"white"}
            backNav={"rgb(241, 76, 89)"}
            style={{ email: "fixed" }}
            logout={() => this.props.doLogOut()}
            bio={this.props.bio}
          />
          <MDBBox
            style={{
              padding: "0 0 1px 0",
            }}
          >
            <MDBRow
              style={{
                margin: "0",
              }}
            >
              <MDBCol size="2" style={{ backgroundColor: "#f14c59" }}>
                <PictName bio={this.props.bio} active={"profile"} />
              </MDBCol>
              <MDBCol size="10">
                <MDBBox
                  style={{
                    padding: "30px 0",
                    minHeight: "100vmin",
                  }}
                  className="text-left"
                >
                  {!this.props.bio.user_image ? (
                    <Loading />
                  ) : (
                    <MDBContainer>
                      {/* profile picture */}
                      <MDBBox className="d-flex justify-content-center">
                        <img
                          src={
                            this.props.bio.user_image ===
                            "https://firebasestorage.googleapis.com/v0/b/personal-email-d3b3b.appspot.com/o/images%2Fuser_image%2F9ff2f2f01c4bd1b013.png?alt=media&token=272b7417-a9fa-4fde-99b1-e00fa6d377ee"
                              ? this.props.bio.user_image
                              : require("../images/deafult-profile.jpg")
                          }
                          alt="pict"
                          style={{
                            height: "150px",
                            width: "150px",
                            borderRadius: "50%",
                            objectFit: "cover",
                          }}
                        />
                      </MDBBox>
                      {/* end profile picture */}
                      {/* nama dll */}
                      <MDBRow style={{ margin: "20px 15px" }}>
                        <MDBCol size="6">
                          {/* nama lengkap */}
                          <p className="mt-0 mb-2 text-muted">Nama lengkap</p>
                          <p
                            className="my-0 ml-3 py-2 text-center"
                            style={{
                              border: "1px solid #f3f3f4",
                              backgroundColor: "#f7f7f7",
                              borderRadius: "40px",
                              fontSize: "18px",
                              fontWeight: "500",
                            }}
                          >
                            {this.props.bio.full_name}
                          </p>
                          {/* end nama lengkap */}
                          {/* email */}
                          <p className="mb-2 mt-3 text-muted">Email</p>
                          <p
                            className="my-0 ml-3 py-2 text-center"
                            style={{
                              border: "1px solid #f3f3f4",
                              backgroundColor: "#f7f7f7",
                              borderRadius: "40px",
                              fontSize: "18px",
                              fontWeight: "500",
                            }}
                          >
                            fazlur0504@gmail.com
                          </p>
                          {/* end email */}
                          {/* wa */}
                          <p className="mb-2 mt-3 text-muted">Phone number</p>
                          <p
                            className="my-0 ml-3 py-2 text-center"
                            style={{
                              border: "1px solid #f3f3f4",
                              backgroundColor: "#f7f7f7",
                              borderRadius: "40px",
                              fontSize: "18px",
                              fontWeight: "500",
                            }}
                          >
                            08123456789
                          </p>
                          {/* end wa */}
                        </MDBCol>
                        <MDBCol size="6">
                          {/* nama lengkap */}
                          <p className="mt-0 mb-2 text-muted">Username</p>
                          <p
                            className="my-0 ml-3 py-2 text-center"
                            style={{
                              border: "1px solid #f3f3f4",
                              backgroundColor: "#f7f7f7",
                              borderRadius: "40px",
                              fontSize: "18px",
                              fontWeight: "500",
                            }}
                          >
                            {this.props.bio.username}
                          </p>
                          {/* end nama lengkap */}
                          {/* email */}
                          <p className="mb-2 mt-3 text-muted">Password</p>
                          <p
                            className="my-0 ml-3 py-2 text-center"
                            style={{
                              border: "1px solid #f3f3f4",
                              backgroundColor: "#f7f7f7",
                              borderRadius: "40px",
                              fontSize: "18px",
                              fontWeight: "500",
                            }}
                          >
                            ********
                          </p>
                          {/* end email */}
                        </MDBCol>
                      </MDBRow>
                      {/* end nama dll */}
                      <MDBBox className="d-flex justify-content-center">
                        <button
                          color="transparent"
                          style={{
                            backgroundColor: "white",
                            border: "1px solid #f14c59",
                            color: "#f14c59",
                            boxShadow: "none",
                            borderRadius: "40px",
                            fontSize: "14px",
                            height: "40px",
                            margin: "0",
                            padding: "0 13px",
                          }}
                          className="text-capitalize"
                        >
                          Edit profile
                        </button>
                      </MDBBox>
                    </MDBContainer>
                  )}
                </MDBBox>
              </MDBCol>
            </MDBRow>
          </MDBBox>
        </MDBBox>
      );
    }
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
  getUserBio,
};
export default connect(mapStateToProps, mapDispatchToProps)(Profile);
