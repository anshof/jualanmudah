import React, { Component } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";

import {
  MDBTabPane,
  MDBTabContent,
  MDBNav,
  MDBNavItem,
  MDBNavLink,
  MDBBtn,
  MDBBox,
  MDBCol,
  MDBRow,
  MDBContainer,
  MDBInput,
  MDBModal,
  MDBModalBody
} from "mdbreact";
import { convertToRaw } from "draft-js";
import { Editor } from "react-draft-wysiwyg";
import draftToHtml from "draftjs-to-html";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";

import Navbar from "../components/Navbar";
import Loading from "../components/Loading";
import RocketLoad from "../components/RocketLoad";

import {
  doLogOut,
  doRefershSignin,
  getUserBio,
} from "../stores/actions/userAction";
import { getListEmail, addNewEmail } from "../stores/actions/contactAction";
import { getCustomerGroupList } from "../stores/actions/customerAction";
import {
  addDraft,
  getDraft,
  doDraftToSend,
  changeInputMail,
  changeEditor,
  sendMailNow,
  sendMailScheduled,
  doDraftToScheduled,
  deleteExistDraft,
} from "../stores/actions/mailAction";

class NewBroadcast extends Component {
  state = {
    editorState: {},
    radio1: 1,
    activeItem: this.props.match.params.draftId ? "3" : "1",
    isLoading: true,
    modal: false,
  };

  componentDidMount = async () => {
    await this.props.doRefershSignin();
    this.props.getUserBio();
    if (this.props.match.params.draftId) {
      await this.props.getDraft(this.props.match.params.draftId);
    } else {
      await this.props.deleteExistDraft();
    }
    await this.props.getListEmail();
    await this.props.getCustomerGroupList();
    this.setState({ isLoading: false });
  };

  toggle = (tab) => (e) => {
    if (this.state.activeItem !== tab) {
      this.setState({
        activeItem: tab,
      });
    }
  };

  onClickChoice1 = (nr) => () => {
    this.setState({
      radio1: nr,
    });
  };

  handleDraft = async () => {
    if (this.props.match.params.draftId) {
      await this.props.getDraft(this.props.match.params.draftId);
    } else {
      await this.props.deleteLocalDraft();
    }
  };

  onEditorStateChange = (editorState) => {
    this.setState({
      editorState,
    });
  };

  handleSaveToDraft = async (content) => {
    if (this.props.mailState.contactChoice === "new") {
      await this.props.addNewEmail();
      await this.props.addDraft(content, this.props.contactState.newEmail.id);
    } else if (this.props.mailState.contactChoice === "exist") {
      await this.props.addDraft(content, this.props.mailState.contactIdSelect);
    }
    await this.props.history.push(
      "/draft/" + String(localStorage.getItem("savedId"))
    );
  };

  handleSendNow = async (content) => {
    await this.toggleModal()
    if (this.props.mailState.contactChoice === "new") {
      if (this.props.match.params.draftId) {
        await this.props.doDraftToSend(
          content,
          this.props.contactState.newEmail.id
        );
      } else {
        await this.props.sendMailNow(
          content,
          this.props.contactState.newEmail.id
        );
        await this.props.addNewEmail();
      }
    } else if (this.props.mailState.contactChoice === "exist") {
      if (this.props.match.params.draftId) {
        await this.props.doDraftToSend(
          content,
          this.props.mailState.contactIdSelect
            ? this.props.mailState.contactIdSelect
            : this.props.draft.contact_id
        );
      } else {
        await this.props.sendMailNow(
          content,
          this.props.mailState.contactIdSelect
        );
      }
    }
    await this.toggleModal()
    this.props.history.push("/dashboard")
  };

  toggleModal = () => {
      this.setState({
        modal: !this.state.modal,
      });
  };

  handleSendScheduled = async (content) => {
    if (this.props.mailState.contactChoice === "new") {
      await this.props.addNewEmail();
      if (this.props.match.params.draftId) {
        await this.props.doDraftToScheduled(
          content,
          this.props.contactState.newEmail.id
        );
      } else {
        await this.props.sendMailScheduled(
          content,
          this.props.contactState.newEmail.id
        );
      }
    } else if (this.props.mailState.contactChoice === "exist") {
      if (this.props.match.params.draftId) {
        await this.props.doDraftToScheduled(
          content,
          this.props.mailState.contactIdSelect
            ? this.props.mailState.contactIdSelect
            : this.props.draft.contact_id
        );
      } else {
        this.props.sendMailScheduled(
          content,
          this.props.mailState.contactIdSelect
        );
      }
    }
    // alert("Pengiriman terjadwal sukses");
    // window.location.reload();
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
      if (this.state.isLoading) {
        return <Loading />;
      }
      const editorState = this.props.editor;
      if (this.props.match.draftId && !editorState) {
        return <Loading />;
      }
      let selectedSegment = this.props.mailState.groupIdSelect
        ? this.props.customerGroups.filter(
            (item) =>
              String(item.id) === String(this.props.mailState.groupIdSelect)
          )[0].name
        : false;
      let validScheduled = false;
      if (this.props.mailState) {
        if (this.props.mailState.sendDate && this.props.mailState.sendTime) {
          validScheduled = true;
        } else {
          validScheduled = false;
        }
      }
      return (
        <MDBBox>
        
          <Navbar
            isLogin={this.state.isLogin}
            fontColor={"white"}
            backNav={"rgb(241, 76, 89)"}
            style={{ position: "fixed" }}
            logout={() => this.props.doLogOut()}
            bio={this.props.bio}
          />
          <MDBBox
            style={{
              backgroundColor: "#f7f7f7",
              padding: "30px 0 100px 0",
            }}
          >
            <h3
              className="text-left ml-5 mb-4"
              style={{ fontWeight: "600", color: "#192e35" }}
            >
              Buat Siaran Baru
            </h3>
            <MDBContainer
              style={{
                minWidth: "100%",
                minHeight: "100%",
                padding: "0 20px",
                margin: "0",
              }}
            >
              <MDBNav
                tabs
                className="d-flex justify-content-around"
                style={{ backgroundColor: "#f14c59" }}
              >
                <MDBRow style={{ margin: "0" }} className="w-100">
                  <MDBCol
                    size="4"
                    className="d-flex justify-content-center"
                    style={{
                      backgroundColor:
                        this.state.activeItem !== "1" ? "#bdbdcb" : "#f14c59",
                    }}
                  >
                    <MDBNavItem>
                      <MDBNavLink
                        link
                        to="#"
                        active={this.state.activeItem === "1"}
                        onClick={this.toggle("1")}
                        role="tab"
                        className="d-flex"
                        style={{ cursor: "text" }}
                      >
                        <MDBBox
                          style={{
                            backgroundColor: "white",
                            color: "#f14c59",
                          }}
                          className="d-flex justify-content-center align-items-center mr-3 circleNewBro font-weight-bold"
                        >
                          1
                        </MDBBox>
                        <MDBBox className="text-uppercase text-white">
                          Penerima
                        </MDBBox>
                      </MDBNavLink>
                    </MDBNavItem>
                  </MDBCol>
                  <MDBCol
                    size="4"
                    className="d-flex justify-content-center"
                    style={{
                      backgroundColor:
                        this.state.activeItem !== "2" ? "#bdbdcb" : "#f14c59",
                    }}
                  >
                    <MDBNavItem>
                      <MDBNavLink
                        link
                        to="#"
                        active={this.state.activeItem === "2"}
                        onClick={this.toggle("2")}
                        role="tab"
                        className="d-flex"
                        style={{ cursor: "text" }}
                      >
                        <MDBBox
                          style={{
                            backgroundColor: "white",
                            color: "#f14c59",
                          }}
                          className="d-flex justify-content-center align-items-center mr-3 circleNewBro font-weight-bold"
                        >
                          2
                        </MDBBox>
                        <MDBBox className="text-uppercase text-white">
                          Konten
                        </MDBBox>
                      </MDBNavLink>
                    </MDBNavItem>
                  </MDBCol>
                  <MDBCol
                    size="4"
                    className="d-flex justify-content-center"
                    style={{
                      backgroundColor:
                        this.state.activeItem !== "3" ? "#bdbdcb" : "#f14c59",
                    }}
                  >
                    <MDBNavItem>
                      <MDBNavLink
                        link
                        to="#"
                        active={this.state.activeItem === "3"}
                        onClick={this.toggle("3")}
                        role="tab"
                        className="d-flex"
                        style={{ cursor: "text" }}
                      >
                        <MDBBox
                          style={{
                            backgroundColor: "white",
                            color: "#f14c59",
                          }}
                          className="d-flex justify-content-center align-items-center mr-3 circleNewBro font-weight-bold"
                        >
                          3
                        </MDBBox>
                        <MDBBox className="text-uppercase text-white">
                          Pratinjau
                        </MDBBox>
                      </MDBNavLink>
                    </MDBNavItem>
                  </MDBCol>
                </MDBRow>
              </MDBNav>
              <MDBTabContent
                className="card"
                activeItem={this.state.activeItem}
              >
                <MDBTabPane tabId="1" role="tabpanel">
                  {/* recipient */}
                  <MDBRow
                    className="text-center"
                    style={{
                      margin: "0px auto",
                      backgroundColor: "white",
                    }}
                  >
                    <MDBCol size="6" className="border-right">
                      <MDBBox className="py-3">
                        <MDBBox className="text-left ml-5">
                          <p
                            className="text-left mt-3 mb-0"
                            style={{ fontWeight: "400" }}
                          >
                            Kirim siaran menggunakan :
                          </p>
                          <MDBBox className="mt-2 mb-3">
                            <MDBInput
                              onClick={this.onClickChoice1(1)}
                              checked={this.state.radio1 === 1 ? true : false}
                              label="Email yang sudah ada"
                              type="radio"
                              id="radio1"
                              name="contactChoice"
                              value="exist"
                              disabled={this.props.emailList ? false : true}
                              onChange={(e) => this.props.changeInputMail(e)}
                            />
                            <select
                              className="browser-default custom-select w-75 ml-3 mt-2 mb-3"
                              disabled={
                                (this.state.radio1 !== 1 ? true : false) ||
                                (this.props.emailList ? false : true)
                              }
                              name="contactIdSelect"
                              onChange={(e) => this.props.changeInputMail(e)}
                            >
                              <option
                                value=""
                                disabled
                                selected={
                                  this.props.match.params.draftId ? false : true
                                }
                              >
                                Pilih Email
                              </option>
                              {this.props.emailList
                                ? this.props.emailList.map((el, index) => (
                                    <option
                                      key={index}
                                      value={el.id}
                                      selected={
                                        this.props.match.params.draftId &&
                                        el.id === this.props.draft.contact_id
                                          ? true
                                          : false
                                      }
                                    >
                                      {el.email_or_wa}
                                    </option>
                                  ))
                                : false}
                            </select>
                            <MDBInput
                              onClick={this.onClickChoice1(2)}
                              checked={this.state.radio1 === 2 ? true : false}
                              label="Email baru"
                              name="contactChoice"
                              value="new"
                              type="radio"
                              id="radio2"
                              onChange={(e) => this.props.changeInputMail(e)}
                            />
                            <input
                              name="newContact"
                              type="text"
                              className="form-control w-75 ml-3 mt-1"
                              id="formGroupExampleInput"
                              placeholder="Masukkan email"
                              disabled={this.state.radio1 !== 2 ? true : false}
                              onChange={(e) => this.props.changeInputMail(e)}
                            />
                            <input
                              name="password"
                              type="password"
                              className="form-control w-75 ml-3 mt-1"
                              id="formGroupExampleInput"
                              placeholder="Masukkan Password email"
                              disabled={this.state.radio1 !== 2 ? true : false}
                              onChange={(e) => this.props.changeInputMail(e)}
                            />
                          </MDBBox>
                        </MDBBox>
                      </MDBBox>
                    </MDBCol>
                    <MDBCol size="6">
                      <MDBBox className="py-3 ml-5 text-left">
                        <span
                          className="text-left"
                          style={{ fontWeight: "400" }}
                        >
                          Siapa yang akan menerima?
                        </span>

                        <MDBBox className="form-group text-left mt-3">
                          <label htmlFor="formGroupExampleInput">
                            <p
                              className="text-left mb-0"
                              style={{ fontWeight: "400" }}
                            >
                              Daftar Segment :
                            </p>
                          </label>
                        </MDBBox>
                        <select
                          className="browser-default custom-select w-50 ml-3 mb-3"
                          name="groupIdSelect"
                          onChange={(e) => this.props.changeInputMail(e)}
                        >
                          <option
                            value=""
                            disabled
                            selected={
                              this.props.match.params.draftId ? false : true
                            }
                          >
                            Pilih Grup
                          </option>
                          {this.props.customerGroups
                            ? this.props.customerGroups.map((el, index) => (
                                <option
                                  key={index}
                                  value={el.id}
                                  selected={
                                    this.props.match.params.draftId &&
                                    el.id === this.props.draft.group_id
                                      ? true
                                      : false
                                  }
                                >
                                  {el.name}
                                </option>
                              ))
                            : false}
                        </select>
                        <p style={{ fontSize: "15px", marginTop: "30px" }}>
                          *Ketika menambahkan email baru :
                          <br />
                          <span className="ml-2">
                            1. Pastikan email adalah email dengan server gmail
                            yang valid
                          </span>
                          <br />
                          <span className="ml-2">
                            2. Pastikan password yang anda masukkan adalah
                            password email tersebut
                          </span>
                          <br />
                          <span className="ml-2">
                            3. Login ke email tersebut dan matikan verifikasi 2
                            langkah di{" "}
                            <a href="https://myaccount.google.com/security">
                              sini
                            </a>
                          </span>
                          <br />
                          <span className="ml-2">
                            4. Lalu izinkan aplikasi yang kurang aman di{" "}
                            <a href="https://myaccount.google.com/lesssecureapps">
                              sini
                            </a>
                          </span>
                          <br />
                          <span className="ml-2">
                            4. Dan terakhir Lalu izinkan "Display Captcha" di{" "}
                            <a href="https://accounts.google.com/DisplayUnlockCaptcha">
                              sini
                            </a>
                          </span>
                        </p>
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
                      disabled
                    >
                      Kembali
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
                      active={this.state.activeItem === "2"}
                      onClick={this.toggle("2")}
                    >
                      Selanjutnya
                    </MDBBtn>
                  </MDBRow>
                  {/* akhir recipient */}
                </MDBTabPane>
                <MDBTabPane tabId="2" role="tabpanel">
                  {/* content */}
                  <MDBRow
                    className="border-bottom"
                    style={{
                      margin: "0px 25px",
                      backgroundColor: "white",
                    }}
                  >
                    <MDBCol size="12">
                      <MDBBox className="py-3">
                        <MDBBox className="form-group text-left ml-5">
                          <label htmlFor="emailsubject">
                            <p
                              className="text-left mb-0"
                              style={{ fontWeight: "400" }}
                            >
                              Subjek Email
                            </p>
                          </label>
                          <input
                            defaultValue={
                              this.props.match.params.draftId
                                ? this.props.draft.subject
                                : ""
                            }
                            type="text"
                            className="form-control w-75"
                            id="emailsubject"
                            name="subject"
                            placeholder="Subjek Email"
                            onChange={(e) => this.props.changeInputMail(e)}
                          />
                        </MDBBox>
                        <MDBBox className="form-group text-left ml-5">
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
                                  onEditorStateChange={(editorState) =>
                                    this.props.changeEditor(editorState)
                                  }
                                  placeholder="Klik disini untuk mulai mengetik"
                                />
                              </MDBBox>
                              <MDBBox className="form-group text-left mt-2">
                            <p>
                              Jika anda ingin mencantumkan
                              <span
                                style={{ color: "rgb(241, 76, 89)" }}
                                className="ml-1 mr-1"
                              >
                                link
                              </span>
                              yang ingin bisa di lacak, tulis kalimat yang akan
                              menjadi link dan cantumkan linknya.
                            </p>
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
                                  defaultValue={
                                    this.props.match.params.draftId
                                      ? this.props.draft.words
                                      : ""
                                  }
                                  type="text"
                                  className="form-control w-100"
                                  id="emailsubject"
                                  name="words"
                                  placeholder="Kalimat dari link"
                                  onChange={(e) =>
                                    this.props.changeInputMail(e)
                                  }
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
                                  defaultValue={
                                    this.props.match.params.draftId
                                      ? this.props.draft.link
                                      : ""
                                  }
                                  type="text"
                                  className="form-control w-100"
                                  id="Link yang ingin di track"
                                  name="link"
                                  placeholder="Link yang ingin di track"
                                  onChange={(e) =>
                                    this.props.changeInputMail(e)
                                  }
                                />
                              </MDBCol>
                            </MDBRow>
                          </MDBBox>
                            </MDBCol>
                            <MDBCol size="3">
                              Salam pembuka : <br />
                              <span style={{ color: "rgb(241, 76, 89)" }}>
                                Dear, [Nama Pertama Pelanggan]{" "}
                              </span>{" "}
                              <br />
                              dan salam penutup : <br />
                              <span style={{ color: "rgb(241, 76, 89)" }}>
                                Best regards, [Nama Anda]
                              </span>{" "}
                              <br />
                              akan otomatis tertulis. <br /> <br />
                              Untuk mengantisipasi penulisan berulang dari
                              salam, harap tidak menuliskan pada badan email
                              disamping.
                            </MDBCol>
                          </MDBRow>
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
                        borderRadius: "40px",
                        backgroundColor: "#f14c59",
                        color: "white",
                        fontSize: "15px",
                        fontWeight: "400",
                      }}
                      color="transparent"
                      active={this.state.activeItem === "1"}
                      onClick={this.toggle("1")}
                    >
                      Kembali
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
                      active={this.state.activeItem === "3"}
                      onClick={this.toggle("3")}
                    >
                      Selanjutnya
                    </MDBBtn>
                  </MDBRow>
                  {/* akhir content */}
                </MDBTabPane>
                <MDBTabPane tabId="3" role="tabpanel">
                  {/* preview */}
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
                              Subjek Email
                            </p>
                          </label>
                          <input
                            value={
                              this.props.mailState.subject
                                ? this.props.mailState.subject
                                : this.props.draft.subject
                            }
                            type="text"
                            className="form-control w-100"
                            id="emailsubject"
                            name="subject"
                            disabled
                          />
                        </MDBBox>
                        <MDBBox className="form-group text-left ml-5">
                          <label htmlFor="emailcontent">
                            <p
                              className="text-left mb-0"
                              style={{ fontWeight: "400" }}
                            >
                              Konten Email
                            </p>
                          </label>
                          <MDBBox
                            style={{
                              border: "1px solid #ced4da",
                              minHeight: "240px",
                            }}
                          >
                            <Editor
                              editorState={
                                this.state.activeItem === "3"
                                  ? editorState
                                  : false
                              }
                              readOnly={true}
                              toolbarHidden={true}
                            />
                          </MDBBox>
                          <MDBBox className="form-group text-left mt-2">
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
                                    this.props.match.params.draftId
                                      ? this.props.draft.words
                                      : this.props.mailState.words
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
                                    this.props.match.params.draftId
                                      ? this.props.draft.link
                                      : this.props.mailState.link
                                  }
                                  type="text"
                                  className="form-control w-100"
                                  id="emailsubject"
                                  name="link"
                                  disabled
                                />
                              </MDBCol>
                            </MDBRow>
                          </MDBBox>
                        </MDBBox>
                      </MDBBox>
                    </MDBCol>
                    <MDBCol size="4">
                      <MDBBox className="d-flex justify-content-center">
                        <MDBBox className="mt-4">
                          {this.props.draft.status === "draft" ? (
                            <MDBBox
                              className="px-2 d-flex align-items-center"
                              style={{
                                height: "65px",
                                width: "350px",
                                border: "2px solid #c0c0c0",
                              }}
                            >
                              <MDBBox style={{ color: "#a13034" }}>
                                Email ini sedang berada di dalam draf.
                              </MDBBox>
                            </MDBBox>
                          ) : (
                            false
                          )}
                          {/* akhir status */}
                          {/* recipients */}
                          <MDBBox className="d-flex align-items-center mt-3 ml-1">
                            {this.props.match.params.draftId ? (
                              <React.Fragment>
                                <i className="fas fa-users mr-2"></i>Grup :{" "}
                                {this.props.draft
                                  ? this.props.draft.group_customer.name
                                  : false}
                              </React.Fragment>
                            ) : (
                              <React.Fragment>
                                <i className="fas fa-users mr-2"></i>Grup :{" "}
                                {this.props.mailState.groupIdSelect
                                  ? selectedSegment
                                  : false}
                              </React.Fragment>
                            )}
                          </MDBBox>
                          {/* akhir recipients */}
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
                              onClick={() => 
                                this.handleSendNow(
                                  draftToHtml(
                                    convertToRaw(
                                      editorState.getCurrentContent()
                                    )
                                  )
                                )
                              }
                            >
                              <i className="far fa-envelope mr-2"></i>
                              Kirim Sekarang
                            </MDBBtn>
                            <MDBModal
                              isOpen={this.state.modal}
                              // toggle={this.handleClick}
                              centered
                            >
                              <MDBModalBody>
                                <RocketLoad />
                                Email anda sedang dikirim...
                              </MDBModalBody>
                            </MDBModal>
                          </MDBBox>
                          <hr />
                          {/* date */}
                          <MDBBox className="d-flex align-items-center mt-3 ml-1">
                            <form>
                              <label htmlFor="sendDate" className="mr-2">
                                <i className="far fa-calendar mr-2"></i> Tanggal
                              </label>
                              <input
                                type="date"
                                id="sendDate"
                                name="sendDate"
                                className="px-2 py-1 mr-2"
                                style={{
                                  width: "200px",
                                  border: "1px solid rgb(241, 76, 89)",
                                  borderRadius: "40px",
                                }}
                                onChange={(e) => this.props.changeInputMail(e)}
                              />
                              <br />
                              <label htmlFor="sendTime" className="mr-2">
                                <i className="far fa-clock mr-2"></i> Pukul
                              </label>
                              <input
                                type="time"
                                id="sendTime"
                                name="sendTime"
                                className="px-2 py-1 mr-2"
                                style={{
                                  width: "200px",
                                  border: "1px solid rgb(241, 76, 89)",
                                  borderRadius: "40px",
                                }}
                                onChange={(e) => this.props.changeInputMail(e)}
                              />
                            </form>
                          </MDBBox>

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
                              width: "auto",
                            }}
                            color="transparent"
                            onClick={() =>
                              this.handleSendScheduled(
                                draftToHtml(
                                  convertToRaw(editorState.getCurrentContent())
                                )
                              )
                            }
                            disabled={!validScheduled}
                          >
                            <i className="far fa-envelope mr-2"></i>
                            Jadwalkan Pengiriman
                          </MDBBtn>
                        </MDBBox>
                        <MDBBox className="d-flex align-items-center justify-content-center">
                          {!this.props.match.params.draftId ? (
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
                                width: "auto",
                              }}
                              color="transparent"
                              onClick={() =>
                                this.handleSaveToDraft(
                                  draftToHtml(
                                    convertToRaw(
                                      editorState.getCurrentContent()
                                    )
                                  )
                                )
                              }
                            >
                              <i className="fas fa-save mr-2"></i>
                              Simpan sebagai draft
                            </MDBBtn>
                          ) : (
                            false
                          )}
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
                        borderRadius: "40px",
                        backgroundColor: "#f14c59",
                        color: "white",
                        fontSize: "15px",
                        fontWeight: "400",
                      }}
                      color="transparent"
                      active={this.state.activeItem === "2"}
                      onClick={this.toggle("2")}
                    >
                      Kembali
                    </MDBBtn>
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
                      disabled
                    >
                      Selanjutnya
                    </MDBBtn>
                  </MDBRow>
                  {/* akhir preview */}
                </MDBTabPane>
              </MDBTabContent>
            </MDBContainer>
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
    emailList: state.contactState.emailList,
    contactState: state.contactState,
    mailState: state.mailState,
    customerGroups: state.customerState.customerGroup,
  };
};
const mapDispatchToProps = {
  doLogOut,
  getUserBio,
  doRefershSignin,
  addDraft,
  doDraftToSend,
  changeInputMail,
  getDraft,
  changeEditor,
  getListEmail,
  getCustomerGroupList,
  addNewEmail,
  sendMailNow,
  sendMailScheduled,
  doDraftToScheduled,
  deleteExistDraft,
};
export default connect(mapStateToProps, mapDispatchToProps)(NewBroadcast);
