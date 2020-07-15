import React, { Component, Fragment } from "react";
import EmailEditor from "react-email-editor";
import { Redirect } from "react-router-dom";
import { render } from "react-dom";
import { MDBBox, MDBRow, MDBBtn } from "mdbreact";
import { connect } from "react-redux";
import sample from "../components/sample.json";
import Navbar from "../components/NavbarBuilder";
import "../css/style.css";
import {
  doLogOut,
  doRefershSignin,
  getUserBio,
} from "../stores/actions/userAction";
import { sendBuilderNow } from "../stores/actions/mailAction";
class EmailBuilder extends Component {
  constructor(props) {
    super(props);
    this.handleSignIn = () => this.handleSignIn.bind(this);
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

  handleSignIn = () => {
    this.props.getUserBio();
  };
  componentDidMount = async () => {
    await this.props.doRefershSignin();
    await this.props.getUserBio();
  };

  exportHtml = () => {
    this.editor.exportHtml(async (data) => {
      const { html } = await data;
      console.log("exportHtml", html); // untuk send
      // console.warn("exportdesign", design); // kalo save draft
      // this.setState({ mailHtml: html });
      alert("Design exported");
      // this.props.sendBuilderNow(html)
      this.props.history.push("/dashboard");
      window.location.reload();
    });
  };

  saveDesign = () => {
    this.editor.saveDesign((design) => {
      this.setState({ mailDesign: design });
      console.log("design", design);
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
    console.log(this.props);
    if (!localStorage.getItem("isSignin")) {
      return (
        <Redirect
          to={{
            pathname: "/signin",
            state: { message: "You must sign in first!" },
          }}
        />
      );
    } else {
      if (!this.props.bio) {
        return <h3 className="loading">Loading...</h3>;
      }
      return render(
        <Fragment>
          <Navbar
            fontColor={"white"}
            backNav={"rgb(241, 76, 89)"}
            style={{ position: "fixed" }}
            logout={() => this.props.doLogOut()}
            bio={this.props.bio}
          />
          {/* <App /> */}
          <MDBBox
            style={{ backgroundColor: "#f7f7f7", padding: "100px 0 0 0" }}
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
        </Fragment>,
        document.getElementById("root")
      );
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
  getUserBio,
  sendBuilderNow,
};
export default connect(mapStateToProps, mapDispatchToProps)(EmailBuilder);
