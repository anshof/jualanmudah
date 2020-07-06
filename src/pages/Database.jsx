import React, { Component, Fragment } from "react";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import {
  MDBBox,
  MDBRow,
  MDBCol,
  MDBIcon,
  MDBFormInline,
  MDBModal,
  MDBLink,
} from "mdbreact";
import "../css/style.css";

import Navbar from "../components/Navbar";
import Table from "../components/TableCustomer";
import PictName from "../components/PictName";
import Pagination from "../components/Pagination";
import NewDatabase from "../components/NewDatabaseModal";
import DownloadFormDatabase from "../components/DownloadFormModal";

import { doLogOut, getUserBio,doRefershSignin } from "../stores/actions/userAction";
import { getCustomerList } from "../stores/actions/customerAction";

class Database extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLogin: true,
      modalFormDatabase: false,
      modalNewDatabase: false,
    };
    this.toggle = this.toggle.bind(this);
  }

  componentDidMount = async () => {
    await this.props.doRefershSignin();
    this.props.getUserBio();
    this.props.getCustomerList();
  };

  toggle = (key) => () => {
    let modalKey = "modal" + key;
    this.setState({
      [modalKey]: !this.state[modalKey],
    });
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
      return (
        <Fragment>
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
              padding: "100px 0 1px 0",
            }}
          >
            {/* first row */}
            <MDBBox className="d-flex justify-content-between align-items-center mx-5 pb-3">
              <span
                className="text-left"
                style={{
                  fontWeight: "600",
                  color: "#192e35",
                  fontSize: "28px",
                }}
              >
                Database
              </span>
              <MDBBox className="d-flex">
                <button
                  color="transparent"
                  style={{
                    backgroundColor: "white",
                    border: "1px solid #f14c59",
                    color: "#f14c59",
                    boxShadow: "none",
                    borderRadius: "40px",
                    fontSize: "16px",
                    height: "40px",
                    marginTop: "8px",
                  }}
                  className="text-capitalize px-3"
                  onClick={this.toggle("NewDatabase")}
                >
                  <i className="fas fa-plus-circle mr-1"></i> New Database
                </button>
                <MDBModal
                  isOpen={this.state.modalNewDatabase}
                  toggle={this.toggle("NewDatabase")}
                  size="md"
                >
                  <NewDatabase toggle={this.toggle} />
                </MDBModal>
                <MDBLink to="../components/JMForm.csv" target="_blank" download>
                  <button
                    color="transparent"
                    style={{
                      backgroundColor: "white",
                      border: "1px solid #f14c59",
                      color: "#f14c59",
                      boxShadow: "none",
                      borderRadius: "40px",
                      fontSize: "16px",
                      height: "40px",
                    }}
                    className="text-capitalize px-3 mx-3"
                  >
                    <i className="fas fa-download mr-1"></i> Download Form
                  </button>
                </MDBLink>
                <MDBModal
                  isOpen={this.state.modalFormDatabase}
                  toggle={this.toggle("FormDatabase")}
                  size="md"
                >
                  <DownloadFormDatabase toggle={this.toggle} />
                </MDBModal>

                <MDBFormInline className="md-form" style={{ margin: "0px" }}>
                  <MDBIcon
                    style={{ cursor: "pointer", color: "#f14c59" }}
                    icon="search"
                  />
                  <input
                    className="form-control form-control-sm ml-2 w-75"
                    type="text"
                    placeholder="Search"
                    aria-label="Search"
                  />
                </MDBFormInline>
              </MDBBox>
            </MDBBox>
            {/* end first row */}
            {/* main row */}
            <MDBRow
              style={{
                margin: "20px",
              }}
            >
              {/* side bar */}
              <MDBCol size="2">
                <PictName />
              </MDBCol>
              {/* end side bar */}
              {/* table */}
              <MDBCol size="10">
                {/* title */}
                <MDBRow
                  className="text-uppercase mb-3"
                  style={{
                    fontWeight: "700",
                    color: "rgb(241, 76, 89)",
                    margin: "0px",
                  }}
                >
                  {/* name */}
                  <MDBCol
                    size="2"
                    className="d-flex align-items-center justify-content-center"
                  >
                    <span className="mr-1">Name</span>
                    <MDBIcon
                      style={{
                        cursor: "pointer",
                      }}
                      className="mr-1"
                      icon="caret-up"
                    />
                    <MDBIcon
                      style={{
                        cursor: "pointer",
                      }}
                      icon="caret-down"
                    />
                  </MDBCol>
                  {/* end name */}
                  {/* email */}
                  <MDBCol
                    size="2"
                    className="d-flex align-items-center justify-content-center"
                  >
                    <span className="mr-1">Email</span>
                    <MDBIcon
                      style={{
                        cursor: "pointer",
                      }}
                      className="mr-1"
                      icon="caret-up"
                    />
                    <MDBIcon
                      style={{
                        cursor: "pointer",
                      }}
                      icon="caret-down"
                    />
                  </MDBCol>
                  {/* end email */}
                  {/* phone */}
                  <MDBCol
                    size="2"
                    className="d-flex align-items-center justify-content-center"
                  >
                    <span className="mr-1">Phone</span>
                    <MDBIcon
                      style={{
                        cursor: "pointer",
                      }}
                      className="mr-1"
                      icon="caret-up"
                    />
                    <MDBIcon
                      style={{
                        cursor: "pointer",
                      }}
                      icon="caret-down"
                    />
                  </MDBCol>
                  {/* end phone */}
                  {/* bod */}
                  <MDBCol
                    size="2"
                    className="d-flex align-items-center justify-content-center"
                  >
                    <span className="mr-1">bod</span>
                    <MDBIcon
                      style={{
                        cursor: "pointer",
                      }}
                      className="mr-1"
                      icon="caret-up"
                    />
                    <MDBIcon
                      style={{
                        cursor: "pointer",
                      }}
                      icon="caret-down"
                    />
                  </MDBCol>
                  {/* end bod */}
                  {/* address */}
                  <MDBCol
                    size="2"
                    className="d-flex align-items-center justify-content-center"
                  >
                    <span className="mr-1">address</span>
                    <MDBIcon
                      style={{
                        cursor: "pointer",
                      }}
                      className="mr-1"
                      icon="caret-up"
                    />
                    <MDBIcon
                      style={{
                        cursor: "pointer",
                      }}
                      icon="caret-down"
                    />
                  </MDBCol>
                  {/* end address */}
                  {/* company */}
                  <MDBCol
                    size="2"
                    className="d-flex align-items-center justify-content-center"
                  >
                    <span className="mr-1">company</span>
                    <MDBIcon
                      style={{
                        cursor: "pointer",
                      }}
                      className="mr-1"
                      icon="caret-up"
                    />
                    <MDBIcon
                      style={{
                        cursor: "pointer",
                      }}
                      icon="caret-down"
                    />
                  </MDBCol>
                  {/* end company */}
                </MDBRow>
                {/* end title */}
                {this.props.customerList.map((el, index) => {
                  return (
                    <Table
                      key={index}
                      id={el.id}
                      name={String(el.First_name) + " " + String(el.last_name)}
                      email={el.email}
                      phone={el.phone}
                      bod={el.bod}
                      address={el.address}
                      company={el.company}
                    />
                  );
                })}
                <MDBBox className="pt-2 d-flex justify-content-center">
                  <Pagination />
                </MDBBox>
              </MDBCol>
              {/* end table */}
            </MDBRow>
            {/* end main row */}
          </MDBBox>
        </Fragment>
      );
    }
  }
}
const mapStateToProps = (state) => {
  return {
    bio: state.userState.bio,
    customerList: state.customerState.customerList,
  };
};
const mapDispatchToProps = {
  getUserBio,
  getCustomerList,
  doLogOut,
  doRefershSignin
};
export default connect(mapStateToProps, mapDispatchToProps)(Database);
