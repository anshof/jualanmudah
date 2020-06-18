import React from "react";

import { MDBBox } from "mdbreact";

import Navbar from "../components/Navbar";
import "../css/style.css";

class Home extends React.Component {
  render() {
    return (
      <MDBBox>
        <Navbar />
        <MDBBox>
          <MDBBox className="picture">
            <MDBBox className="frontText">
              <p
                className="text-white text-center"
                style={{
                  paddingTop: "240px",
                  fontSize: "60px",
                  fontFamily: "Montserrat",
                  textShadow: "1px 1px 1px rgba(0, 0, 0, 0.8)",
                  fontWeight: "200",
                }}
              >
                Get work done <span style={{ fontWeight: "500" }}>faster</span>
                <br /> and <span style={{ fontWeight: "500" }}>
                  better
                </span>{" "}
                with us
              </p>
              <MDBBox
                className="btn text-uppercase my-0 py-1"
                style={{
                  boxShadow: "none",
                  fontSize: "20px",
                  fontFamily: "Montserrat",
                  backgroundColor: "#f49d37",
                  color: "white",
                  borderRadius: "20px",
                }}
              >
                Start now
              </MDBBox>
            </MDBBox>
          </MDBBox>
        </MDBBox>
      </MDBBox>
    );
  }
}

export default Home;
