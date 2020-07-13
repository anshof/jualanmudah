import React, { Component } from "react";
import { MDBBox, MDBRow, MDBCol, MDBContainer } from "mdbreact";

import Navbar from "../components/Navbar";
import PictName from "../components/PictName";

class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLogin: true,
      modalFormDatabase: false,
      modalNewDatabase: false,
    };
    this.toggle = this.toggle.bind(this);
  }
  toggle = (key) => () => {
    let modalKey = "modal" + key;
    this.setState({
      [modalKey]: !this.state[modalKey],
    });
  };
  render() {
    return (
      <MDBBox>
        <Navbar
          isLogin={this.state.isLogin}
          fontColor={"white"}
          backNav={"rgb(241, 76, 89)"}
          style={{ email: "fixed" }}
        />
        <MDBBox
          style={{
            padding: "54px 0 1px 0",
          }}
        >
          <MDBRow
            style={{
              margin: "20px 0 0 0",
            }}
          >
            <MDBCol size="2" style={{ backgroundColor: "#f14c59" }}>
              <PictName bio={this.props.bio} active={"profile"} />
            </MDBCol>
            <MDBCol size="10">
              <MDBBox
                style={{
                  padding: "30px 0",
                  minHeight: "560px",
                }}
                className="text-left"
              >
                <MDBContainer>
                  {/* profile picture */}
                  <MDBBox className="d-flex justify-content-center">
                    <img
                      src={
                        "https://emmawatson2017.files.wordpress.com/2017/01/emma-watson-harry-potter-movies-wallpapers-hd-wallpaper-high.jpg"
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
                        Hermione Granger
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
                        hermione@alterra.id
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
                        Hermione Granger
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
              </MDBBox>
            </MDBCol>
          </MDBRow>
        </MDBBox>
      </MDBBox>
    );
  }
}

export default Profile;
