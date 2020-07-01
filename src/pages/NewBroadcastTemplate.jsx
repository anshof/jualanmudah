import React, { Component } from "react";

import { MDBBox, MDBCol, MDBRow, MDBBtn } from "mdbreact";

import Navbar from "../components/Navbar";

import "../css/style.css";

import { Editor } from "react-draft-wysiwyg";
import { EditorState } from "draft-js";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";

class NewBroadcast extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLogin: false,
      isOpen: false,
      modalSignin: false,
      modalSignup: false,
      editorState: EditorState.createEmpty(),
    };
    this.toggle = this.toggle.bind(this);
  }
  onEditorStateChange = (editorState) => {
    // console.log(editorState)
    this.setState({
      editorState,
    });
  };
  toggle = (key) => () => {
    let modalKey = "modal" + key;
    this.setState({
      [modalKey]: !this.state[modalKey],
    });
  };
  render() {
    const { editorState } = this.state;
    return (
      <MDBBox>
        <Navbar
          toggle={(key) => this.toggle(key)}
          modalSignin={this.state.modalSignin}
          modalSignup={this.state.modalSignup}
          isLogin={this.state.isLogin}
        />
        <MDBBox
          style={{ backgroundColor: "#f7f7f7", padding: "100px 0 50px 0" }}
        >
          <h3
            className="text-left mx-5 pb-3"
            style={{ fontWeight: "600", color: "#192e35" }}
          >
            Create new broadcast
          </h3>
          <MDBBox>
            <MDBRow
              style={{
                margin: "0 25px ",
              }}
            >
              <MDBCol size="4" style={{ padding: "0", margin: "0" }}>
                <MDBBox
                  className="d-flex justify-content-center align-items-center py-2 boxNewBro"
                  style={{
                    backgroundColor: "#f14c59",
                  }}
                >
                  <MDBBox
                    style={{
                      backgroundColor: "white",
                      color: "#f14c59",
                    }}
                    className="d-flex justify-content-center align-items-center mr-3 circleNewBro"
                  >
                    1
                  </MDBBox>
                  <MDBBox className="text-uppercase text-white">
                    recipient
                  </MDBBox>
                </MDBBox>
              </MDBCol>
              <MDBCol style={{ padding: "0", margin: "0" }} size="4">
                <MDBBox
                  className="d-flex justify-content-center align-items-center py-2 boxNewBro"
                  style={{
                    backgroundColor: "#f14c59",
                  }}
                >
                  <MDBBox
                    style={{
                      backgroundColor: "white",
                      color: "#f14c59",
                    }}
                    className="d-flex justify-content-center align-items-center mr-3 circleNewBro"
                  >
                    2
                  </MDBBox>
                  <MDBBox className="text-uppercase text-white">content</MDBBox>
                </MDBBox>
              </MDBCol>
              <MDBCol style={{ padding: "0", margin: "0" }} size="4">
                <MDBBox
                  className="d-flex justify-content-center align-items-center py-2 boxNewBro"
                  style={{
                    backgroundColor: "#f14c59",
                  }}
                >
                  <MDBBox
                    style={{
                      backgroundColor: "white",
                      color: "#f14c59",
                    }}
                    className="d-flex justify-content-center align-items-center mr-3 circleNewBro"
                  >
                    3
                  </MDBBox>
                  <MDBBox className="text-uppercase text-white">preview</MDBBox>
                </MDBBox>
              </MDBCol>
            </MDBRow>
            <MDBRow
              className="border-bottom"
              style={{
                margin: "0px 25px",
                backgroundColor: "white",
              }}
            >
              <MDBCol size="8">
                <MDBBox className="py-3">
                  <MDBBox className="form-group text-left ml-5">
                    <label htmlFor="emailsubject">
                      <p
                        className="text-left mb-0"
                        style={{ fontWeight: "400" }}
                      >
                        Email subject
                      </p>
                    </label>
                    <input
                      type="text"
                      className="form-control w-100"
                      id="emailsubject"
                      placeholder="email subject"
                    />
                  </MDBBox>
                  <MDBBox className="form-group text-left ml-5">
                    <label htmlFor="emailcontent">
                      <p
                        className="text-left mb-0"
                        style={{ fontWeight: "400" }}
                      >
                        Email content
                      </p>
                    </label>
                    <MDBBox
                      style={{
                        border: "1px solid #ced4da",
                        minHeight: "240px",
                      }}
                    >
                      <Editor
                        editorState={editorState}
                        wrapperClassName="wrapper-class"
                        editorClassName="editor-class"
                        toolbarClassName="toolbar-class"
                        onEditorStateChange={this.onEditorStateChange}
                        placeholder="Type your text here..."
                      />
                    </MDBBox>
                  </MDBBox>
                </MDBBox>
              </MDBCol>
              <MDBCol size="4">
                <MDBBox className="d-flex justify-content-center">
                  <MDBBox className="mt-4 border-bottom">
                    <MDBBox
                      className="px-2 d-flex align-items-center"
                      style={{
                        height: "65px",
                        width: "350px",
                        border: "2px solid #c0c0c0",
                      }}
                    >
                      <MDBBox style={{ color: "#a13034" }}>
                        This broadcast currently a draft. When sent it will be
                        delivered to 4 recipients.
                      </MDBBox>
                    </MDBBox>
                    {/* status */}
                    <MDBBox className="d-flex align-items-center mt-3 ml-1">
                      <i class="fas fa-info-circle mr-2"></i>
                      Status : Draft
                    </MDBBox>
                    {/* akhir status */}
                    {/* recipients */}
                    <MDBBox className="d-flex align-items-center mt-3 ml-1">
                      <i class="fas fa-users mr-2"></i>4 recipients
                    </MDBBox>
                    {/* akhir recipients */}
                    {/* date */}
                    <MDBBox className="d-flex align-items-center mt-3 ml-1">
                      <form>
                        <label for="birthday" className="mr-2">
                          <i class="far fa-clock mr-2"></i> Sent
                        </label>
                        <input
                          type="date"
                          id="birthday"
                          name="birthday"
                          className="border px-2 py-1 mr-2"
                          style={{
                            width: "200px",
                            borderRadius: "40px",
                          }}
                        />
                      </form>
                    </MDBBox>
                    {/* akhir date */}
                    {/* tracking email */}
                    <MDBBox className="d-flex align-items-center my-3 ml-1">
                      <i class="fas fa-envelope-open-text mr-2"></i>
                      Track open :
                      <div className="ml-2 custom-control custom-switch">
                        <input
                          type="checkbox"
                          className="custom-control-input"
                          id="customSwitches"
                          readOnly
                        />
                        <label
                          className="custom-control-label"
                          htmlFor="customSwitches"
                        ></label>
                      </div>
                    </MDBBox>
                    {/* akhir tracking email */}
                  </MDBBox>
                </MDBBox>
                <MDBBox>
                  <MDBBox className="d-flex align-items-center justify-content-center mt-2">
                    <MDBBtn
                      className="my-2 py-2 text-capitalize"
                      style={{
                        boxShadow: "none",
                        borderRadius: "40px",
                        backgroundColor: "#f14c59",
                        color: "white",
                        fontSize: "18px",
                        fontWeight: "400",
                        width: "250px",
                      }}
                      color="transparent"
                    >
                      <i class="far fa-envelope mr-2"></i>
                      Send test email
                    </MDBBtn>
                  </MDBBox>
                  <MDBBox className="d-flex align-items-center justify-content-center">
                    <MDBBtn
                      className="my-2 py-2 text-capitalize"
                      style={{
                        boxShadow: "none",
                        borderRadius: "40px",
                        backgroundColor: "white",
                        color: "#f14c59",
                        fontSize: "18px",
                        fontWeight: "400",
                        border: "1px solid #f14c59",
                        width: "250px",
                      }}
                      color="transparent"
                    >
                      <i class="fas fa-save mr-2"></i>
                      Save as draft
                    </MDBBtn>
                  </MDBBox>
                </MDBBox>
              </MDBCol>
            </MDBRow>
            <MDBRow
              className="py-3 d-flex justify-content-center"
              style={{
                margin: "0px 25px",
                backgroundColor: "white",
              }}
            >
              <MDBBtn
                className="my-0 py-2 text-capitalize"
                style={{
                  boxShadow: "none",
                  border: "1px solid #A4A4A4",
                  borderRadius: "40px",
                  color: "#A4A4A4",
                  fontSize: "15px",
                  fontWeight: "300",
                }}
                color="transparent"
              >
                Back
              </MDBBtn>
              <MDBBtn
                className="my-0 py-2 text-capitalize"
                style={{
                  boxShadow: "none",
                  borderRadius: "40px",
                  backgroundColor: "#f14c59",
                  color: "white",
                  fontSize: "15px",
                  fontWeight: "400",
                }}
                color="transparent"
              >
                Next
              </MDBBtn>
            </MDBRow>
          </MDBBox>
        </MDBBox>
      </MDBBox>
    );
  }
}
export default NewBroadcast;
