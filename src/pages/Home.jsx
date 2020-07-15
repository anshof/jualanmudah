import React, { Component, Fragment } from "react";
import { connect } from "react-redux";

import { MDBBox, MDBCol, MDBRow, MDBContainer, MDBLink } from "mdbreact";
import { Link } from "react-router-dom";

import "../css/style.css";
import Navbar from "../components/Navbar";
import Loading from "../components/Loading";
import {
  doLogOut,
  doRefershSignin,
  getUserBio,
} from "../stores/actions/userAction";
class Home extends Component {
  state = {
    isLoading: true,
  };

  componentDidMount = async () => {
    await this.props.doRefershSignin();
    await this.props.getUserBio();
    this.setState({ isLoading: false });
  };

  render() {
    if (this.state.isLoading) {
      return <Loading />;
    }
    return (
      <Fragment>
        <Navbar
          backNav={"white"}
          fontColor={"rgb(241, 76, 89)"}
          logout={() => this.props.doLogOut()}
          bio={this.props.bio}
        />
        <MDBRow
          style={{
            margin: "0",
            position: "relative",
          }}
        >
          <MDBCol size="4" className="d-flex align-items-center pl-5 mt-5">
            <MDBBox style={{ color: "#1b2e35" }} className="text-left pl-5">
              <h1
                style={{
                  fontFamily: "Source Sans Pro",
                  fontWeight: "700",
                }}
                className="text-capitalize"
              >
                tingkatkan <br /> penjualanmu <br /> sekarang!!!
              </h1>
              <p
                style={{
                  fontSize: "18px",
                  fontWeight: "400",
                  color: "#385a66",
                }}
              >
                Tingkatkan penghasilanmu. Hubungi pelangganmu dengan cara yang
                lebih baik, mudah, dan cepat.
              </p>
              <Link to="/dashboard">
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
                >
                  mulai sekarang
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
          <h2>
            “Sales is not about selling anymore but building trust and
            educating”
          </h2>
          <p style={{ fontSize: "18px", color: "#385a66" }}>- Siva Devaki -</p>
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
              Kirim email tanpa <span style={{ color: "#f14c59" }}>batas</span>
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
                    Kirim email dengan cepat hingga ke ribuan kontak atau lebih.
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
                    Sekarang kamu akan tahu apakah emailmu dibaca atau tidak.
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
                    Jadwal pengiriman email
                  </h5>
                  <p>
                    Kamu bisa menjadwalkan kirim email untuk waktu yang akan
                    datang.
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
              Siapa <span style={{ color: "#f14c59" }}>kami</span>?
            </p>
            <MDBRow
              style={{
                margin: "0",
              }}
            >
              <MDBCol size="7">
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
                    Pelanggan dapat didekati dengan banyak cara.
                    <br />
                    Mengirim email salah satunya.
                    <br />
                    <br />
                    Kami menyediakan layanan broadcast email, dimana kamu bisa
                    mengirim email tanpa batas. Kirim email dengan jumlah banyak
                    kini tidak lagi sulit.
                    <br />
                    <br />
                    Kamu bisa membuat grup dari data pelangganmu untuk membuat
                    target pembeli yang lebih spesifik.
                    <br />
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
                margin: "0",
              }}
            >
              <MDBCol
                size="5"
                className="d-flex justify-content-center align-items-center"
              >
                <MDBBox className="text-left ml-0">
                  <p
                    style={{
                      fontSize: "32px",
                      fontWeight: "600",
                      color: "#1b2e35",
                    }}
                  >
                    Privasi terjamin
                  </p>
                  <p style={{ fontSize: "18px" }}>
                    Jangan khawatir kami jamin datamu aman.
                  </p>
                </MDBBox>
              </MDBCol>
              <MDBCol size="7" className="text-left">
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
          // className="bg-primary"
          style={{
            margin: "100px auto 0 auto",
            padding: "20px 0 0 0",
            position: "relative",
            backgroundColor: "#fef8f8",
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
                margin: "0",
              }}
            >
              <MDBCol size="7" className="text-right">
                <img
                  src={require("../images/launch.png")}
                  alt="profile"
                  style={{ width: "600px" }}
                />
              </MDBCol>
              <MDBCol size="5" className="text-left d-flex align-items-center">
                <MDBBox className="">
                  <p
                    style={{
                      fontSize: "32px",
                      fontWeight: "600",
                      color: "#1b2e35",
                    }}
                  >
                    Ayo
                  </p>
                  <p style={{ fontSize: "18px" }}>
                    Tingkatkan penjualanmu
                    <br />
                    sekarang!!!
                  </p>
                  <MDBLink
                    to="/dashboard"
                    className="btn text-uppercase my-0 py-2"
                    style={{
                      boxShadow: "none",
                      fontSize: "18px",
                      backgroundColor: "#f14c59",
                      color: "white",
                      borderRadius: "20px",
                      // maxWidth: "160px",
                    }}
                  >
                    Mulai Sekarang
                  </MDBLink>
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
                  <h6 className="my-0">Cara Penggunaan</h6>
                </MDBCol>
                <MDBCol size="3">
                  <h6 className="font-weight-bold">Fitur Utama</h6>
                  <h6 className="mb-0">Email broadcast</h6>
                  <h6 className="my-0">Email tracker</h6>
                  <h6 className="my-0">Scheduled email</h6>
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
const mapStateToProps = (state) => {
  return {
    bio: state.userState.bio,
    username: state.userState.username,
    password: state.userState.password,
  };
};
const mapDispatchToProps = {
  doLogOut,
  doRefershSignin,
  getUserBio,
};
export default connect(mapStateToProps, mapDispatchToProps)(Home);
