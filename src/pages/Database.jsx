import React, { Component, Fragment } from "react";
import moment from "moment";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { CSVReader } from "react-papaparse";
import {
  MDBBox,
  MDBRow,
  MDBCol,
  MDBIcon,
  MDBFormInline,
  MDBModal,
  MDBLink,
  MDBDataTable,
  MDBModalBody,
  MDBModalFooter,
  MDBBtn,
} from "mdbreact";
import "../css/style.css";

import Navbar from "../components/Navbar";
import PictName from "../components/PictName";
import DownloadFormDatabase from "../components/DownloadFormModal";

import {
  doLogOut,
  getUserBio,
  doRefershSignin,
} from "../stores/actions/userAction";
import {
  getCustomerList,
  addCustomer,
  uploadDataCustomer,
} from "../stores/actions/customerAction";

class Database extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modalFormDatabase: false,
      modalNewDatabase: false,
    };
    this.toggle = this.toggle.bind(this);
  }

  componentDidMount = async () => {
    await this.props.getCustomerList();
    await this.props.doRefershSignin();
    await this.props.getUserBio();
    if (this.props.customerList) {
      this.setState({
        data: {
          columns: [
            {
              label: "Name",
              field: "name",
              width: 150,
              color: "pink",
            },
            {
              label: "Email",
              field: "email",
              width: 200,
            },
            {
              label: "BOD",
              field: "bod",
              width: 270,
            },
            {
              label: "Address",
              field: "address",
              width: 100,
            },
            {
              label: "Phone",
              field: "phone",
              width: 150,
            },
            {
              label: "Company",
              field: "company",
              width: 100,
            },
            {
              label: "Hapus",
              field: "delete",
              sort: "asc",
              width: 270,
            },
          ],
          rows: [
            ...this.props.customerList.map((el, index) => ({
              key: index,
              name: el.First_name + " " + el.last_name,
              email: el.email,
              bod: moment.utc(el.bod).format("YYYY/MM/DD"),
              address: el.address,
              phone: el.phone[0] !== "0" ? "0" + el.phone : el.phone,
              company: el.company,
              delete: (
                <MDBBtn
                  color="transparent"
                  size="xs"
                  style={{ boxShadow: "none", padding: "0", margin: "0" }}
                >
                  <i
                    className="fa fa-trash"
                    aria-hidden="true"
                    // onClick={(id) => this.handleDeleteGroup(el.id)}
                    style={{ cursor: "pointer" }}
                  ></i>
                </MDBBtn>
              ),
            })),
          ],
        },
      });
    }
  };

  toggle = (key) => () => {
    let modalKey = "modal" + key;
    this.setState({
      [modalKey]: !this.state[modalKey],
    });
  };

  handleOnDrop = (data) => {
    this.props.uploadDataCustomer(data);
  };

  postUpload = async () => {
    await this.props.addCustomer();
    await alert("Database telah update");
    window.location.reload();
  };

  handleOnError = (err, file, inputElem, reason) => {
    console.log(err);
  };

  handleOnRemoveFile = (data) => {
    console.log(data);
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
      const data = this.state.data;
      if (!this.props.customerList) {
        return <h3 className="loading">Loading...</h3>;
      }
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
                  <div className="new-database">
                    <MDBRow
                      style={{
                        justifyContent: "end",
                        marginTop: "15px",
                        marginRight: "20px",
                      }}
                    >
                      <MDBIcon
                        icon="times"
                        onClick={this.toggle("NewDatabase")}
                        style={{ cursor: "pointer", color: "#9e9e9e" }}
                      />
                    </MDBRow>
                    <MDBModalBody className="new-database-modal mx-4">
                      <div className="text-center">
                        <h3
                          className="dark-grey-text mb-5"
                          style={{ fontWeight: "600" }}
                        >
                          New Database
                        </h3>
                      </div>
                      <div className="parse">
                        <CSVReader
                          onDrop={this.handleOnDrop}
                          onError={this.handleOnError}
                          addRemoveButton
                          onRemoveFile={this.handleOnRemoveFile}
                          config={{ header: true, skipEmptyLines: true }}
                        >
                          <span>Drop CSV disini atau klik untuk upload.</span>
                        </CSVReader>
                      </div>
                      <MDBRow
                        style={{
                          display: "flex",
                          justifyContent: "center",
                          marginTop: "20px",
                        }}
                      >
                        <MDBBtn
                          color="transparent"
                          style={{
                            backgroundColor: "#f14c59",
                            color: "white",
                            boxShadow: "none",
                            borderRadius: "40px",
                            fontSize: "16px",
                            minWidth: "260px",
                            // padding: ".50rem 1rem",
                          }}
                          onClick={this.postUpload}
                          className="text-capitalize mt-3"
                        >
                          <i className="fas fa-upload mr-1"></i> Upload Database
                        </MDBBtn>
                      </MDBRow>
                    </MDBModalBody>
                    <MDBModalFooter
                      className="pt-3 mb-1"
                      style={{ marginRight: "70px" }}
                    >
                      <p className="font-small gray-text d-flex justify-content-center">
                        Data dengan email yang sama tidak akan terupload
                        <br />
                        Hapus data lama dengan email yang sama terlebih dahulu
                      </p>
                    </MDBModalFooter>
                  </div>
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
                <PictName bio={this.props.bio} active={"database"} />
              </MDBCol>
              {/* end side bar */}
              {/* table */}
              <MDBCol size="10">
                <MDBDataTable
                  hover
                  data={data}
                  style={{
                    backgroundColor: "white",
                  }}
                />
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
  doRefershSignin,
  addCustomer,
  uploadDataCustomer,
};
export default connect(mapStateToProps, mapDispatchToProps)(Database);
