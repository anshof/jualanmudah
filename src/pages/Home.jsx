import React from "react";

import { MDBBox } from "mdbreact";

import NavbarPage from "../components/NavbarPage";

class Home extends React.Component {
  render() {
    return (
      <MDBBox>
        <NavbarPage />
        <p>Hello world</p>
      </MDBBox>
    );
  }
}

export default Home;
