import React from "react";

import {
  MDBBox,
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarNav,
  MDBNavLink,
  MDBNavItem,
  MDBContainer,
} from "mdbreact";

import "../css/style.css";

const Navbar = () => {
  return (
    <MDBNavbar color="transparent" expand="md" style={{ boxShadow: "none" }}>
      <MDBContainer>
        <MDBNavbarBrand className="d-flex align-items-center justify-content-center">
          <strong
            className="logo"
            style={{ fontSize: "32px", color: "#f14c59" }}
          >
            JM
          </strong>
        </MDBNavbarBrand>
        <MDBNavbarNav right className="d-flex align-items-center">
          <MDBNavItem active>
            <MDBNavLink to="#!" className="nav text-uppercase">
              Home
            </MDBNavLink>
          </MDBNavItem>
          <MDBNavItem>
            <MDBNavLink to="#!" className="nav ml-3 text-uppercase">
              Features
            </MDBNavLink>
          </MDBNavItem>
          <MDBNavItem>
            <MDBNavLink to="#!" className="nav ml-3 text-uppercase">
              About
            </MDBNavLink>
          </MDBNavItem>
          <MDBNavItem>
            <MDBNavLink to="#!" className="ml-3 ">
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
              >
                Login
              </MDBBox>
            </MDBNavLink>
          </MDBNavItem>
        </MDBNavbarNav>
      </MDBContainer>
    </MDBNavbar>
  );
};
export default Navbar;
