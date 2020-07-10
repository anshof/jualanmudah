import React, { Component } from "react";
import { connect } from "react-redux";
import { MDBDataTable, MDBBox, MDBRow, MDBCol } from "mdbreact";
import { Editor } from "react-draft-wysiwyg";
import { Redirect } from "react-router-dom";

import Navbar from "../components/Navbar";
import {
  doLogOut,
  doRefershSignin,
  getUserBio,
} from "../stores/actions/userAction";
import { getSent } from "../stores/actions/mailAction";
class PreviewEmail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      editorState: {},
    };
  }

  componentDidMount = async () => {
    await this.props.doRefershSignin();
    this.props.getUserBio();
    await this.props.getSent(this.props.match.params.mailId);
    if (this.props.draft){
      this.setState({
        data: {
          columns: [
            {
              label: "Name",
              field: "name",
              sort: "asc",
              width: 150,
              color: "pink",
            },
            {
              label: "Open",
              field: "open",
              sort: "asc",
              width: 200,
            },
            {
              label: "Email",
              field: "email",
              sort: "asc",
              width: 200,
            }
          ],
          rows: [ 
              ...this.props.draft.customer.map((el, index) => ({
                key: index,
                name: el.First_name + " " + el.last_name,
                email: el.email,
            })),
            ...this.props.draft.track.map((el, index) => ({
              open : el.status_open ? <i class="fas fa-check" style={{color:"rgb(241, 76, 89)"}}></i> : <i class="fas fa-times" style={{color:"rgb(241, 76, 89)"}}></i>,
            })),
          ],
          },
        });
      }
  };

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
    } else {
      const editorState = this.props.editor;
      const data = this.state.data
      return (
        <MDBBox style={{ backgroundColor: "#f7f7f7" }}>
          <Navbar
            fontColor={"white"}
            backNav={"rgb(241, 76, 89)"}
            style={{ position: "fixed" }}
            logout={() => this.props.doLogOut()}
            bio={this.props.bio}
          />
          <MDBBox
            style={{
              padding: "100px 0 1px 0",
            }}
          >
            {/* judul */}
            <MDBBox className="d-flex justify-content-between align-items-center mx-5 pb-3">
              <span
                className="text-left"
                style={{
                  fontWeight: "600",
                  color: "#192e35",
                  fontSize: "28px",
                }}
              >
                {this.props.draft ? this.props.draft.subject : "Nama Broadcast"}
              </span>
            </MDBBox>
            {/* tabel */}
            <MDBRow
              style={{
                margin: "20px",
              }}
            >
              {/* create new segment */}
              <MDBCol size="6" className="text-left">
                <MDBBox
                  className="py-4 pl-3"
                  style={{
                    backgroundColor: "white",
                    borderRadius: "20px",
                  }}
                >
                  <MDBBox className="form-group text-left mr-3">
                    <MDBBox
                      style={{
                        border: "1px solid #ced4da",
                        minHeight: "240px",
                      }}
                    >
                      <Editor
                        editorState={editorState}
                        readOnly={true}
                        toolbarHidden={true}
                      />
                    </MDBBox>
                  </MDBBox>
                </MDBBox>
              </MDBCol>
              {/* end create new segment */}
              {/* table */}
              <MDBCol size="6">
                <p style={{ fontWeight: "500" }}>{this.props.draft ? this.props.draft.group_customer.name : "nama segment"}</p>
                <MDBDataTable
                  hover
                  btn
                  fixed
                  data={data}
                  style={{
                    backgroundColor: "white",
                  }}
                />
              </MDBCol>
              {/* end table */}
            </MDBRow>
          </MDBBox>
        </MDBBox>
      );
    }
  }
}
const mapStateToProps = (state) => {
  return {
    bio: state.userState.bio,
    draft: state.mailState.draft,
    editor: state.mailState.editor,
  };
};
const mapDispatchToProps = {
  doLogOut,
  getUserBio,
  doRefershSignin,
  getSent,
};
export default connect(mapStateToProps, mapDispatchToProps)(PreviewEmail);
