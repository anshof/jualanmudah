import React from "react";
import "../css/style.css";

import {
  MDBBox,
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarNav,
  MDBNavLink,
  MDBNavItem,
  MDBContainer,
  MDBModal,
} from "mdbreact";

import SignIn from "./SignIn";

const Navbar = (props) => {
  return (
    <MDBNavbar
      expand="md"
      style={{
        boxShadow: "none",
        backgroundColor: props.backNav ? props.backNav : "white",
        position: "fixed",
        zIndex: "10",
        minWidth: "100%",
      }}
      color="transparent"
      className="navbar"
    >
      <MDBContainer>
        <MDBNavbarBrand className="d-flex align-items-center justify-content-center">
          <strong
            className="logo"
            style={{
              fontSize: "32px",
              color: props.fontColor ? props.fontColor : "#f14c59",
            }}
          >
            JM
          </strong>
        </MDBNavbarBrand>
        <MDBNavbarNav right className="d-flex align-items-center">
          <MDBNavItem active>
            <MDBNavLink
              to="#!"
              className="nav text-uppercase"
              style={{ color: props.fontColor ? props.fontColor : "#f14c59" }}
            >
              Home
            </MDBNavLink>
          </MDBNavItem>
          <MDBNavItem>
            <MDBNavLink to="#!" className="nav ml-3 text-uppercase">
              Dashboard
            </MDBNavLink>
          </MDBNavItem>
          <MDBNavItem>
            <MDBNavLink to="#!" className="nav ml-3 text-uppercase">
              Databases
            </MDBNavLink>
          </MDBNavItem>
          <MDBNavItem>
            <MDBNavLink to="#!" className="ml-3 ">
              <img
                src={
                  "https://emmawatson2017.files.wordpress.com/2017/01/emma-watson-harry-potter-movies-wallpapers-hd-wallpaper-high.jpg"
                }
                alt="pict"
                style={{
                  height: "40px",
                  width: "40px",
                  borderRadius: "50%",
                  objectFit: "cover",
                }}
              />
              {/* <MDBBox
                className="btn text-uppercase my-0 py-1"
                style={{
                  fontFamily: "Source Sans Pro",
                  fontSize: "18px",
                  boxShadow: "none",
                  backgroundColor: "#f14c59",
                  color: "white",
                  borderRadius: "20px",
                }}
              >
                Login
              </MDBBox> */}
            </MDBNavLink>
          </MDBNavItem>
          {props.isLogin ? (
            false
          ) : (
            <MDBNavItem>
              <MDBNavLink to="" className="ml-3 ">
                <MDBBox
                  className="btn text-uppercase my-0 py-1"
                  style={{
                    fontFamily: "Source Sans Pro",
                    fontSize: "18px",
                    boxShadow: "none",
                    backgroundColor: "#f14c59",
                    color: "white",
                    borderRadius: "20px",
                  }}
                  onClick={props.toggle("Signin")}
                >
                  Login
                </MDBBox>
                <MDBModal
                  isOpen={props.modalSignin}
                  toggle={
                    props.toggle("Signup")
                      ? props.toggle("Signup") & props.toggle("Signin")
                      : props.toggle("Signin")
                  }
                  size="md"
                >
                  <SignIn
                    toggle={props.toggle}
                    modalSignup={props.modalSignup}
                  />
                </MDBModal>
              </MDBNavLink>
            </MDBNavItem>
          )}
          <MDBNavItem>
            <MDBNavLink to="#!" className="nav ml-3 text-uppercase">
              Dashboard
            </MDBNavLink>
          </MDBNavItem>
          <MDBNavItem>
            <MDBNavLink to="#!" className="nav ml-3 text-uppercase">
              Databases
            </MDBNavLink>
          </MDBNavItem>
          <MDBNavItem>
            <MDBNavLink to="#!" className="ml-3 ">
              <img
                src={
                  "https://emmawatson2017.files.wordpress.com/2017/01/emma-watson-harry-potter-movies-wallpapers-hd-wallpaper-high.jpg"
                }
                alt="pict"
                style={{
                  height: "40px",
                  width: "40px",
                  borderRadius: "50%",
                  objectFit: "cover",
                }}
              />
              <MDBBox
                className="btn text-uppercase my-0 py-1"
                style={{
                  fontFamily: "Source Sans Pro",
                  fontSize: "18px",
                  boxShadow: "none",
                  backgroundColor: "#f14c59",
                  color: "white",
                  borderRadius: "20px",
                }}
                // onClick={props.toggle("Signin")}
              >
                Login
              </MDBBox>
              <MDBModal
                // isOpen={props.modalSignin}
                // toggle={props.toggle("Signup") ? props.toggle("Signup") & props.toggle("Signin") : props.toggle("Signin")}
                size="md"
              >
                <SignIn
                // toggle={props.toggle}
                // modalSignup={props.modalSignup}
                />
              </MDBModal>
            </MDBNavLink>
          </MDBNavItem>
        </MDBNavbarNav>
      </MDBContainer>
    </MDBNavbar>
  );
};
export default Navbar;
