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
  MDBDataTable,
} from "mdbreact";
import "../css/style.css";

import Navbar from "../components/Navbar";
import PictName from "../components/PictName";
import NewDatabase from "../components/NewDatabaseModal";
import DownloadFormDatabase from "../components/DownloadFormModal";

import {
  doLogOut,
  getUserBio,
  doRefershSignin,
} from "../stores/actions/userAction";
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
    const data = {
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
      ],
      rows: [
        ...this.props.customerList.map((el, index) => ({
          key: index, 
          name: el.First_name + " " + el.last_name,
          email: el.email,
          bod: el.bod.slice(0,-14),
          address: el.address,
          phone: el.phone,
          company: el.company,
        })),
      ],
    };
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
                <PictName bio={this.props.bio} />
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
};
export default connect(mapStateToProps, mapDispatchToProps)(Database);
