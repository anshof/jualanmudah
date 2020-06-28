import React from "react";

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

import "../css/style.css";
import SignIn from "./SignIn";
const Navbar = (props) => {
  return (
    <MDBNavbar
      className="navbar"
      color="transparent"
      expand="md"
      style={{ boxShadow: "none" }}
    >
      <MDBContainer>
        <MDBNavbarBrand className="d-flex align-items-center justify-content-center">
          <strong className="logo">JM</strong>
        </MDBNavbarBrand>
        <MDBNavbarNav right className="d-flex align-items-center">
          <MDBNavItem active>
            <MDBNavLink to="#!" className="nav">
              Home
            </MDBNavLink>
          </MDBNavItem>
          <MDBNavItem>
            <MDBNavLink to="#!" className="nav ml-3">
              Features
            </MDBNavLink>
          </MDBNavItem>
          <MDBNavItem>
            <MDBNavLink to="#!" className="nav ml-3">
              About
            </MDBNavLink>
          </MDBNavItem>
          <MDBNavItem>
            <MDBNavLink to="" className="ml-3 ">
              <MDBBox
                id="login"
                className="btn my-0 py-1"
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
                <SignIn toggle={props.toggle} modalSignup={props.modalSignup} />
              </MDBModal>
            </MDBNavLink>
          </MDBNavItem>
        </MDBNavbarNav>
      </MDBContainer>
    </MDBNavbar>
  );
};
export default Navbar;
