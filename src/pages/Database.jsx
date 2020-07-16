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
  MDBModal,
  MDBDataTable,
  MDBModalBody,
  MDBModalFooter,
  MDBBtn,
} from "mdbreact";
import "../css/style.css";

import Navbar from "../components/Navbar";
import PictName from "../components/PictName";
import Loading from "../components/Loading";

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
import { saveAs } from "file-saver";
class Database extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modalFormDatabase: false,
      modalNewDatabase: false,
      isLoadingTable: true,
    };
    this.toggle = this.toggle.bind(this);
    this.handleOnDrop = this.handleOnDrop.bind(this);
    this.callCustomerData = this.callCustomerData.bind(this);
    this.postUpload = this.postUpload.bind(this);
    this.handleOnError = this.handleOnError.bind(this);
    this.handleOnRemoveFile = this.handleOnRemoveFile.bind(this);
    this.onDownload = this.onDownload.bind(this);
  }

  componentDidMount = async () => {
    await this.props.getCustomerList();
    await this.props.doRefershSignin();
    await this.props.getUserBio();
    await this.callCustomerData();
    this.setState({ isLoadingTable: false });
  };

  toggle = (key) => () => {
    let modalKey = "modal" + key;
    this.setState({
      [modalKey]: !this.state[modalKey],
    });
    console.log(key);
  };

  handleOnDrop = (data) => {
    this.props.uploadDataCustomer(data);
  };

  callCustomerData = () => {
    if (this.props.customerList) {
      this.setState({
        data: {
          columns: [
            {
              label: "Nama",
              field: "name",
              width: 150,
              color: "pink",
            },
            {
              label: "Email (Valid)",
              field: "email",
              width: 200,
            },
            {
              label: "BoD",
              field: "bod",
              width: 270,
            },
            {
              label: "Alamat",
              field: "address",
              width: 100,
            },
            {
              label: "No. Telepon",
              field: "phone",
              width: 150,
            },
            {
              label: "Perusahaan",
              field: "company",
              width: 100,
            },
          ],
          rows: [
            ...this.props.customerList.map((el, index) => ({
              key: index,
              name: el.First_name + " " + el.last_name,
              email: (
                <p>
                  {el.email}
                  {el.validation === "valid" ? (
                    <i
                      className="fas fa-check ml-2"
                      style={{ color: "#4CAF50" }}
                    ></i>
                  ) : (
                    <i
                      className="fas fa-times ml-2"
                      style={{ color: "rgb(241, 76, 89)" }}
                    ></i>
                  )}
                </p>
              ),
              bod: moment.utc(el.bod).format("YYYY/MM/DD"),
              address: el.address,
              phone: el.phone[0] !== "0" ? "0" + el.phone : el.phone,
              company: el.company,
            })),
          ],
        },
      });
    }
  };

  postUpload = async () => {
    await this.props.addCustomer();
    await alert("Database telah diupdate");
    this.callCustomerData();
  };

  handleOnError = (err) => {
    console.log(err);
  };

  handleOnRemoveFile = (data) => {
    console.log(data);
  };

  onDownload = async () => {
    const blob = new Blob(
      [
        `First_name,last_name,email,phone,bod,address,gender, company
    (text),(text),(text),(num),(YYYY-MM-DD),(text),(male/female),(text)`,
      ],
      { type: "text/plain;charset=utf-8" }
    );
    saveAs(blob, "JMForm.csv");
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
              padding: "0 0 1px 0",
            }}
          >
            {/* main row */}
            <MDBRow
              style={{
                margin: "0",
              }}
            >
              {/* side bar */}
              <MDBCol size="2" style={{ backgroundColor: "#f14c59" }}>
                <PictName bio={this.props.bio} active={"database"} />
              </MDBCol>
              {/* end side bar */}
              {/* table */}
              <MDBCol size="10">
                {this.state.isLoadingTable ? (
                  <Loading />
                ) : (
                  <MDBBox
                    style={{
                      padding: "30px 15px",
                      minHeight: "100vmin",
                    }}
                  >
                    <MDBBox className="d-flex justify-content-end align-items-center mx-5 pb-3">
                      <MDBBox className="d-flex">
                        <MDBBtn
                          color="transparent"
                          style={{
                            backgroundColor: "white",
                            border: "1px solid #f14c59",
                            color: "#f14c59",
                            boxShadow: "none",
                            borderRadius: "40px",
                            fontSize: "16px",
                            width: "200px",
                            height: "50px",
                          }}
                          className="text-capitalize px-3"
                          onClick={this.toggle("NewDatabase")}
                        >
                          <i className="fas fa-plus-circle mr-1"></i> Unggah
                          Database
                        </MDBBtn>
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
                                  Unggah Database
                                </h3>
                              </div>
                              <div className="parse">
                                <CSVReader
                                  onDrop={this.handleOnDrop}
                                  onError={this.handleOnError}
                                  addRemoveButton
                                  onRemoveFile={this.handleOnRemoveFile}
                                  config={{
                                    header: true,
                                    skipEmptyLines: true,
                                  }}
                                >
                                  <span>
                                    Drop CSV disini atau klik untuk unggah.
                                  </span>
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
                                  <i className="fas fa-upload mr-1"></i> Unggah
                                  Database
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
                                Hapus data lama dengan email yang sama terlebih
                                dahulu
                              </p>
                            </MDBModalFooter>
                          </div>
                        </MDBModal>
                        <MDBBtn
                          color="transparent"
                          style={{
                            backgroundColor: "white",
                            border: "1px solid #f14c59",
                            color: "#f14c59",
                            boxShadow: "none",
                            borderRadius: "40px",
                            fontSize: "16px",
                            width: "200px",
                            height: "50px",
                            // padding: ".50rem 1rem",
                          }}
                          className="text-capitalize"
                          onClick={this.onDownload}
                        >
                          <i className="fas fa-download mr-1"></i> Unduh
                          Formulir
                        </MDBBtn>
                      </MDBBox>
                    </MDBBox>

                    <MDBDataTable
                      hover
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
