import React, { Component } from "react";

import { MDBBox } from "mdbreact";
import Navbar from "../components/Navbar";

class Dashboard extends Component {
  render() {
    return (
      <MDBBox>
        <Navbar style={{ position: "absolute", zIndex: "1" }} />
        <MDBBox>
          <p>psdkjckndkcjnfkv</p>
        </MDBBox>
      </MDBBox>
    );
  }
}
export default Dashboard;
