import React from "react";

import { MDBBox } from "mdbreact";

import SignUp from "../components/SignUp";

class Home extends React.Component {
  render() {
    return (
      <MDBBox>
        <SignUp />
        <p>Hello world</p>
      </MDBBox>
    );
  }
}

export default Home;
