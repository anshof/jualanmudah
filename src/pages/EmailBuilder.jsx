import React, { Component } from "react";
import EmailEditor from "react-email-editor";
import { BrowserRouter as Router } from "react-router-dom";
import { render } from "react-dom";
import { MDBBox, MDBRow, MDBBtn } from "mdbreact";

import sample from "../components/sample.json";
import Navbar from "../components/Navbar";
import "../css/style.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLogin: true,
      mailDesign: "",
      mailHtml: "",
    };
    this.exportHtml = this.exportHtml.bind(this);
    this.saveDesign = this.saveDesign.bind(this);
    this.onDesignLoad = this.onDesignLoad.bind(this);
    this.onLoad = this.onLoad.bind(this);
  }

  exportHtml = () => {
    this.editor.exportHtml((html) => {
      this.setState({ mailHtml: html });
      alert("Design exported");
    });
  };

  saveDesign = () => {
    this.editor.saveDesign((design) => {
      this.setState({ mailDesign: design });
      alert("Design JSON has been saved");
    });
  };

  onDesignLoad = (data) => {
    console.log("onDesignLoad", data);
  };

  onLoad = () => {
    this.editor.addEventListener("onDesignLoad", this.onDesignLoad);
    this.editor.loadDesign(sample);
  };

  render() {
    return (
      <Router>
        <Navbar
          isLogin={this.state.isLogin}
          fontColor={"white"}
          backNav={"rgb(241, 76, 89)"}
          style={{ position: "fixed" }}
        />
        <MDBBox
          style={{ backgroundColor: "#f7f7f7", padding: "100px 0 50px 0" }}
        >
          <MDBBox className="d-flex align-items-center justify-content-between mx-5 pb-3">
            <h3
              className="text-left"
              style={{
                fontWeight: "600",
                color: "#192e35",
              }}
            >
              Email Builder
            </h3>
            <MDBBox>
              <MDBBtn
                color="transparent"
                style={{
                  backgroundColor: "#f14c59",
                  color: "white",
                  boxShadow: "none",
                  borderRadius: "40px",
                  fontSize: "14px",
                  padding: ".50rem 1rem",
                  minWidth: "150px",
                }}
                className="text-capitalize"
                onClick={this.exportHtml}
              >
                <i class="fas fa-download mr-1"></i> Export HTML
              </MDBBtn>
              <MDBBtn
                color="transparent"
                style={{
                  backgroundColor: "#f14c59",
                  color: "white",
                  boxShadow: "none",
                  borderRadius: "40px",
                  fontSize: "14px",
                  padding: ".50rem 1rem",
                  minWidth: "150px",
                }}
                className="text-capitalize"
                onClick={this.saveDesign}
              >
                <i class="fas fa-download mr-1"></i> Save Template
              </MDBBtn>
            </MDBBox>
          </MDBBox>

          <MDBRow
            style={{
              margin: "0px 20px",
            }}
            id="email-builder"
          >
            <EmailEditor
              ref={(editor) => (this.editor = editor)}
              onLoad={this.onLoad}
            />
          </MDBRow>
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
