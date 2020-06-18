import React from "react";
import {
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarNav,
  MDBNavItem,
  MDBNavLink,
  MDBContainer,
  MDBBox,
} from "mdbreact";
import { BrowserRouter as Router } from "react-router-dom";
import "../css/style.css";
const Navbar = () => {
  return (
    <Router>
      <MDBNavbar
        className="classNav"
        color="transparent"
        expand="md"
        style={{ boxShadow: "none", borderStyle: "none", marginTop: "-30px" }}
      >
        <MDBContainer>
          <MDBNavbarBrand className="d-flex align-items-center justify-content-center">
            <strong
              className="logo"
              style={{ fontSize: "32px", color: "white" }}
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
              <MDBNavLink to="#!" className="ml-3">
                <MDBBox
                  className="btn text-uppercase my-0 py-1"
                  style={{
                    boxShadow: "none",
                    fontSize: "18px",
                    fontFamily: "Montserrat",
                    backgroundColor: "#f49d37",
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
    </Router>
  );
};

export default Navbar;
