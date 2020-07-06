import React, { Component, Fragment } from "react";
import EmailEditor from "react-email-editor";
import { Redirect } from "react-router-dom";
import { render } from "react-dom";
import { MDBBox, MDBRow, MDBBtn } from "mdbreact";
import {connect} from "react-redux"
import sample from "../components/sample.json";
import Navbar from "../components/Navbar";
import "../css/style.css";
import { doLogOut, doRefershSignin, getUserBio } from "../stores/actions/userAction";

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

  componentDidMount = async () => {
    await this.props.doRefershSignin();
    this.props.getUserBio();
  };

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
      <Fragment>
        <Navbar
          isLogin={this.state.isLogin}
          fontColor={"white"}
          backNav={"rgb(241, 76, 89)"}
          style={{ position: "fixed" }}
          logout = {() => this.props.doLogOut()}
          bio={this.props.bio}
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
                <i className="fas fa-download mr-1"></i> Export HTML
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
                <i className="fas fa-download mr-1"></i> Save Template
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
      </Fragment>
    );
  }
}
class EmailBuilder extends Component {
  render() {
    if (!localStorage.getItem("isSignin")) {
      return (
        <Redirect
          to={{
            pathname: "/signin",
            state: { message: "You must sign in first!" },
          }}
        />
      );
    }else {
      return render(<App />, document.getElementById("root"));
    }
  }
}
const mapStateToProps = (state) => {
  return {
    bio: state.userState.bio,
  };
};
const mapDispatchToProps = {
  doLogOut,
  doRefershSignin,
  getUserBio
};
export default connect(mapStateToProps, mapDispatchToProps)(EmailBuilder);
