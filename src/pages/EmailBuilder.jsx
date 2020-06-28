import React, { Component } from "react";
import EmailEditor from "react-email-editor";
import { BrowserRouter as Router } from "react-router-dom";
import { render } from "react-dom";

import { MDBBox, MDBRow, MDBCol, MDBBtn } from "mdbreact";

import Navbar from "../components/Navbar";
import PictName from "../components/PictName";
import "../css/style.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLogin: true,
    };
    this.exportHtml = this.exportHtml.bind(this);
  }

  exportHtml(){
    this.editor.exportHtml((data) => {
      const { design, html } = data;
      console.log("exportHtml", html);
    });
  };


  render() {
    return (
      <Router>
        <MDBBox style={{ fontFamily: "Source Sans Pro" }}>
          <Navbar
            isLogin={this.state.isLogin}
            fontColor={"white"}
            backNav={"rgb(241, 76, 89)"}
            style={{ position: "fixed" }}
          />
          <MDBBox style={{ backgroundColor: "#f7f7f7" }}>
            <MDBRow style={{ paddingTop: "100px" }}>
              <MDBCol
                size="6"
                style={{
                  marginTop: "auto",
                }}
              >
                <h3
                  className="text-left ml-5"
                  style={{
                    fontWeight: "600",
                    color: "#192e35",
                  }}
                >
                  Email Builder
                </h3>
              </MDBCol>
            </MDBRow>
            <MDBRow
              style={{
                margin: "25px 25px 0 25px",
              }}
            >
              <MDBCol size="3">
                <MDBBox
                  style={{
                    borderRadius: "20px",
                    padding: "30px 20px",
                    boxShadow: "0 0 10px #e1e1e1",
                    backgroundColor: "white",
                  }}
                  className="text-left pt-4"
                >
                  <PictName />
                  <MDBBox className="text-center">
                    <MDBBtn
                      color="transparent"
                      style={{
                        backgroundColor: "#f14c59",
                        color: "white",
                        boxShadow: "none",
                        borderRadius: "40px",
                        fontSize: "16px",
                      }}
                      className="text-capitalize"
                    >
                      <i class="fas fa-plus mr-1"></i> New Broadcast
                    </MDBBtn>
                  </MDBBox>
                  <hr />
                  <MDBBox className="pl-3">
                    <p
                      className="mb-1"
                      style={{
                        fontSize: "18px",
                        fontWeight: "600",
                        color: "#192e35",
                      }}
                    >
                      All segments
                    </p>
                    <a href="#!" style={{ color: "#192e35" }}>
                      <p className="py-0 my-0" style={{ fontSize: "16px" }}>
                        Woman
                      </p>
                    </a>
                    <a href="#!" style={{ color: "#192e35" }}>
                      <p className="py-0 my-0" style={{ fontSize: "16px" }}>
                        Man
                      </p>
                    </a>
                  </MDBBox>
                </MDBBox>
              </MDBCol>
              <MDBCol size="9" id="email-builder">
                <EmailEditor ref={(editor) => (this.editor = editor)} />
                <MDBRow>
                  <MDBCol style={{ marginTop: "15px" }}></MDBCol>
                </MDBRow>
              </MDBCol>
            </MDBRow>
          </MDBBox>
        </MDBBox>
      </Router>
    );
  }
}
class EmailBuilder extends Component {
  render() {
    return render(<App />, document.getElementById("root"));
  }
}
export default EmailBuilder;
