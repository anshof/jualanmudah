import React, { Component } from "react";
import moment from "moment";
import { connect } from "react-redux";
import { MDBDataTable, MDBBox, MDBRow, MDBCol } from "mdbreact";
import { Editor } from "react-draft-wysiwyg";
import { Redirect } from "react-router-dom";

import PictName from "../components/PictName";
import Navbar from "../components/Navbar";
import Loading from "../components/Loading";
import {
  doLogOut,
  doRefershSignin,
  getUserBio,
} from "../stores/actions/userAction";
import { getSent } from "../stores/actions/mailAction";
class PreviewEmail extends Component {
  state = {
    editorState: {},
    isLoadingTable: true,
  };

  componentDidMount = async () => {
    await this.props.doRefershSignin();
    this.props.getUserBio();
    await this.props.getSent(this.props.match.params.mailId);
    if (this.props.draft) {
      await this.setState({
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
            // {
            //   label: "Click",
            //   field: "click",
            //   sort: "asc",
            //   width: 200,
            // },
            {
              label: "Email",
              field: "email",
              sort: "asc",
              width: 200,
            },
          ],
          rows: [
            ...this.props.draft.track.map((el, index) => ({
              key: index,
              name: el.customer.First_name + " " + el.customer.last_name,
              email: el.customer.email,
              open: el.status_open ? (
                <i
                  className="fas fa-check"
                  style={{ color: "rgb(241, 76, 89)" }}
                ></i>
              ) : (
                <i
                  className="fas fa-times"
                  style={{ color: "rgb(241, 76, 89)" }}
                ></i>
              ),
              // click: this.props.draft.link ? (
              //   el.status_click ? (
              //     <i
              //       className="fas fa-check"
              //       style={{ color: "rgb(241, 76, 89)" }}
              //     ></i>
              //   ) : (
              //     <i
              //       className="fas fa-times"
              //       style={{ color: "rgb(241, 76, 89)" }}
              //     ></i>
              //   )
              // ) : (
              //   false
              // ),
            })),
          ],
        },
      });
    }
    this.setState({ isLoadingTable: false });
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
      const data = this.state.data;
      return (
        <MDBBox>
          <Navbar
            fontColor={"white"}
            backNav={"rgb(241, 76, 89)"}
            style={{ position: "fixed" }}
            logout={() => this.props.doLogOut()}
            bio={this.props.bio}
          />
          <MDBBox
            style={{
              padding: "0 0 1px 0",
            }}
          >
            {/* tabel */}
            <MDBRow
              style={{
                margin: "0",
              }}
            >
              {/* side bar */}
              <MDBCol size="2" style={{ backgroundColor: "#f14c59" }}>
                <PictName bio={this.props.bio} active={"broadcasts"} />
              </MDBCol>
              {/* end side bar */}
              {/* create new segment */}
              <MDBCol size="10" className="text-left">
                {this.state.isLoadingTable ? (
                  <Loading />
                ) : (
                  <MDBBox className="py-3 px-3">
                    <MDBRow>
                      <MDBCol size="9">
                        <MDBBox className="form-group text-left">
                          <label htmlFor="emailsubject">
                            <p
                              className="text-left mb-0"
                              style={{ fontWeight: "400" }}
                            >
                              Subjek Email
                            </p>
                          </label>
                          <input
                            value={this.props.draft.subject}
                            type="text"
                            className="form-control w-100"
                            id="emailsubject"
                            name="subject"
                            placeholder="email subject"
                            disabled
                          />
                        </MDBBox>
                      </MDBCol>
                    </MDBRow>
                    <MDBBox className="form-group text-left">
                      <label htmlFor="emailcontent">
                        <p
                          className="text-left mb-0"
                          style={{ fontWeight: "400" }}
                        >
                          Konten Email
                        </p>
                      </label>
                      <MDBRow>
                        <MDBCol size="9">
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
                          {/* <MDBBox className="form-group text-left mt-2">
                            <MDBRow>
                              <MDBCol size="6">
                                <label htmlFor="emailsubject">
                                  <p
                                    className="text-left mb-0"
                                    style={{ fontWeight: "400" }}
                                  >
                                    Kalimat
                                  </p>
                                </label>
                                <input
                                  value={
                                    this.props.draft.words
                                  }
                                  type="text"
                                  className="form-control w-100"
                                  id="emailsubject"
                                  name="words"
                                  disabled
                                />
                              </MDBCol>
                              <MDBCol size="6">
                                <label htmlFor="emailsubject">
                                  <p
                                    className="text-left mb-0"
                                    style={{ fontWeight: "400" }}
                                  >
                                    Link
                                  </p>
                                </label>
                                <input
                                  value={
                                    this.props.draft.link
                                  }
                                  type="text"
                                  className="form-control w-100"
                                  id="emailsubject"
                                  name="link"
                                  disabled
                                />
                              </MDBCol>
                            </MDBRow>
                          </MDBBox> */}
                        </MDBCol>
                        <MDBCol>
                          <MDBBox className="d-flex align-items-center mt-3 ml-1">
                            <i className="fas fa-users mr-2"></i>Grup :{" "}
                            {this.props.draft
                              ? this.props.draft.group_customer.name
                              : ""}
                          </MDBBox>
                          <MDBBox className="d-flex align-items-center mt-3 ml-1">
                            <i className="far fa-calendar mr-2"></i> Tanggal :{" "}
                            {this.props.draft
                              ? this.props.draft.send_date === "now"
                                ? moment
                                    .utc(this.props.draft.created_at)
                                    .local()
                                    .format("YYYY-MM-DD")
                                : moment
                                    .utc(this.props.draft.send_date)
                                    .local()
                                    .format("YYYY-MM-DD")
                              : ""}
                          </MDBBox>

                          <MDBBox className="d-flex align-items-center mt-3 ml-1">
                            <i className="far fa-clock mr-2"></i> Pukul :
                            {this.props.draft
                              ? this.props.draft.send_date === "now"
                                ? moment
                                    .utc(this.props.draft.created_at)
                                    .local()
                                    .format("HH:mm")
                                : moment
                                    .utc(this.props.draft.send_date)
                                    .local()
                                    .format("HH:mm")
                              : ""}
                          </MDBBox>
                        </MDBCol>
                      </MDBRow>
                    </MDBBox>
                    {/* table */}
                    <MDBDataTable
                      hover
                      btn
                      fixed
                      data={data}
                      style={{
                        backgroundColor: "white",
                      }}
                    />
                  </MDBBox>
                )}
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
