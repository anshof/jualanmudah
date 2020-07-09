import React, { Component } from "react";
import {
  MDBTabPane,
  MDBTabContent,
  MDBNav,
  MDBNavItem,
  MDBNavLink,
  MDBDropdown,
  MDBDropdownToggle,
  MDBBtn,
  MDBBox,
  MDBDropdownMenu,
  MDBDropdownItem,
  MDBCol,
  MDBRow,
  MDBContainer,
} from "mdbreact";
import Navbar from "../components/Navbar";
class Accordion extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLogin: true,
      activeItem: "1",
    };
  }

  toggle = (tab) => (e) => {
    if (this.state.activeItem !== tab) {
      this.setState({
        activeItem: tab,
      });
    }
  };

  render() {
    return (
      <MDBBox>
        <Navbar
          isLogin={this.state.isLogin}
          fontColor={"white"}
          backNav={"rgb(241, 76, 89)"}
          style={{ position: "fixed" }}
        />
        <MDBBox
          style={{
            backgroundColor: "#f7f7f7",
            padding: "100px 0 100px 0",
          }}
        >
          <h3
            className="text-left ml-5 mb-4"
            style={{ fontWeight: "600", color: "#192e35" }}
          >
            Buat Siaran Baru
          </h3>
          <MDBContainer>
            <MDBNav
              tabs
              className="d-flex justify-content-around"
              style={{ backgroundColor: "#f14c59" }}
            >
              <MDBNavItem>
                <MDBNavLink
                  link
                  to="#"
                  active={this.state.activeItem === "1"}
                  onClick={this.toggle("1")}
                  role="tab"
                  className="d-flex"
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
                    recipient
                  </MDBBox>
                </MDBNavLink>
              </MDBNavItem>
              <MDBNavItem>
                <MDBNavLink
                  link
                  to="#"
                  active={this.state.activeItem === "2"}
                  onClick={this.toggle("2")}
                  role="tab"
                  className="d-flex"
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
                  <MDBBox className="text-uppercase text-white">content</MDBBox>
                </MDBNavLink>
              </MDBNavItem>
              <MDBNavItem>
                <MDBNavLink
                  link
                  to="#"
                  active={this.state.activeItem === "3"}
                  onClick={this.toggle("3")}
                  role="tab"
                  className="d-flex"
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
                  <MDBBox className="text-uppercase text-white">preview</MDBBox>
                </MDBNavLink>
              </MDBNavItem>
            </MDBNav>
            <MDBTabContent className="card" activeItem={this.state.activeItem}>
              <MDBTabPane tabId="1" role="tabpanel">
                {/* recipient */}
                <MDBRow
                  className="border-bottom"
                  style={{
                    margin: "0px 25px",
                    backgroundColor: "white",
                  }}
                >
                  <MDBCol size="4" className="border-right">
                    <MDBBox className="py-3">
                      <MDBBox className="border-bottom">
                        <MDBBox className="form-group text-left ml-5">
                          <label htmlFor="formGroupExampleInput">
                            <p
                              className="text-left mb-0"
                              style={{ fontWeight: "400" }}
                            >
                              What is your broadcast name?
                            </p>
                          </label>
                          <input
                            type="text"
                            className="form-control w-75"
                            id="formGroupExampleInput"
                          />
                        </MDBBox>
                      </MDBBox>
                      <MDBBox className="text-left ml-5">
                        <p
                          className="text-left mt-3 mb-0"
                          style={{ fontWeight: "400" }}
                        >
                          Who will this broadcast be from?
                        </p>
                        <MDBBox className="mt-3 d-flex align-items-center">
                          <span>Send from</span>
                          <MDBDropdown>
                            <MDBDropdownToggle
                              caret
                              className="border text-capitalize py-2"
                              color="transparent"
                              style={{ boxShadow: "none", fontSize: "15px" }}
                            >
                              Choose sender
                            </MDBDropdownToggle>
                            <MDBDropdownMenu basic>
                              <MDBDropdownItem>
                                email@domain.com
                              </MDBDropdownItem>
                              <MDBDropdownItem divider />
                              <MDBDropdownItem>081234567891</MDBDropdownItem>
                            </MDBDropdownMenu>
                          </MDBDropdown>
                        </MDBBox>
                      </MDBBox>
                    </MDBBox>
                  </MDBCol>
                  <MDBCol size="8">
                    <MDBBox className="py-3 ml-5 text-left">
                      <span className="text-left" style={{ fontWeight: "400" }}>
                        Who will receive this broadcast?
                      </span>
                      <p
                        className="text-left pl-3"
                        style={{ color: "#a13034" }}
                      >
                        Select your subscribers (0 subscribers selected)
                      </p>
                      <MDBBtn
                        className="my-0 py-2 text-capitalize"
                        style={{
                          boxShadow: "none",
                          border: "1px solid #f14c59",
                          borderRadius: "40px",
                          color: "#f14c59",
                          fontSize: "15px",
                          fontWeight: "300",
                        }}
                        color="transparent"
                      >
                        Select all
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
                      >
                        Deselect all
                      </MDBBtn>
                      <MDBBox className="form-group text-left mt-3">
                        <label htmlFor="formGroupExampleInput">
                          <p
                            className="text-left mb-0"
                            style={{ fontWeight: "400" }}
                          >
                            List
                          </p>
                        </label>
                        <input
                          type="text"
                          className="form-control w-50"
                          id="formGroupExampleInput"
                        />
                      </MDBBox>

                      <form>
                        <input
                          type="checkbox"
                          id="vehicle1"
                          name="vehicle1"
                          value="Bike"
                          className="mr-3"
                        />
                        <label for="vehicle1"> Woman</label>
                        <br />
                        <input
                          type="checkbox"
                          id="vehicle2"
                          name="vehicle2"
                          className="mr-3"
                          value="Car"
                        />
                        <label for="vehicle2"> Man</label>
                        <br />
                        <input
                          type="checkbox"
                          id="vehicle3"
                          name="vehicle3"
                          className="mr-3"
                          value="Boat"
                        />
                        <label for="vehicle3"> Manager</label>
                      </form>
                      <MDBBox className="d-flex align-items-center">
                        <MDBDropdown>
                          <MDBDropdownToggle
                            caret
                            className="border text-capitalize py-2 ml-0"
                            color="transparent"
                            style={{
                              boxShadow: "none",
                              fontSize: "15px",
                              fontWeight: "300",
                            }}
                          >
                            Select segment
                          </MDBDropdownToggle>
                          <MDBDropdownMenu basic>
                            <MDBDropdownItem>email@domain.com</MDBDropdownItem>
                            <MDBDropdownItem divider />
                            <MDBDropdownItem>081234567891</MDBDropdownItem>
                          </MDBDropdownMenu>
                        </MDBDropdown>
                        <span className="mr-2">or</span>
                        <input
                          type="text"
                          className="form-control w-25"
                          id="formGroupExampleInput"
                          placeholder="+ New segment"
                        />
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
                        <MDBBox className="">
                          <MDBBox
                            className="w-100 d-flex align-items-center"
                            style={{
                              height: "100px",
                              backgroundColor: "#c0c0c0",
                            }}
                          >
                            <MDBBox>
                              <MDBBox className="d-flex justify-content-start">
                                <MDBBox className="ml-0 pl-0 d-flex align-items-center">
                                  {/* format */}
                                  <MDBDropdown>
                                    <MDBDropdownToggle
                                      caret
                                      className="text-capitalize py-0 pl-0 pr-3 border-right"
                                      color="transparent"
                                      style={{
                                        boxShadow: "none",
                                        fontSize: "15px",
                                      }}
                                    >
                                      Format
                                    </MDBDropdownToggle>
                                    <MDBDropdownMenu basic>
                                      <MDBDropdownItem>
                                        email@domain.com
                                      </MDBDropdownItem>
                                      <MDBDropdownItem divider />
                                      <MDBDropdownItem>
                                        081234567891
                                      </MDBDropdownItem>
                                    </MDBDropdownMenu>
                                  </MDBDropdown>
                                  {/* akhir format */}
                                  {/* font */}
                                  <MDBDropdown>
                                    <MDBDropdownToggle
                                      caret
                                      className="text-capitalize py-0 pl-0 pr-3 border-right"
                                      color="transparent"
                                      style={{
                                        boxShadow: "none",
                                        fontSize: "15px",
                                      }}
                                    >
                                      Font
                                    </MDBDropdownToggle>
                                    <MDBDropdownMenu basic>
                                      <MDBDropdownItem>
                                        Times New Roman
                                      </MDBDropdownItem>
                                      <MDBDropdownItem divider />
                                      <MDBDropdownItem>
                                        081234567891
                                      </MDBDropdownItem>
                                    </MDBDropdownMenu>
                                  </MDBDropdown>
                                  {/* akhir font */}
                                  {/* size */}
                                  <MDBDropdown>
                                    <MDBDropdownToggle
                                      caret
                                      className="text-capitalize py-0 pl-0 pr-3 border-right"
                                      color="transparent"
                                      style={{
                                        boxShadow: "none",
                                        fontSize: "15px",
                                      }}
                                    >
                                      Size
                                    </MDBDropdownToggle>
                                    <MDBDropdownMenu basic>
                                      <MDBDropdownItem>
                                        Times New Roman
                                      </MDBDropdownItem>
                                      <MDBDropdownItem divider />
                                      <MDBDropdownItem>
                                        081234567891
                                      </MDBDropdownItem>
                                    </MDBDropdownMenu>
                                  </MDBDropdown>
                                  {/* akhir size */}
                                  <i class="fas fa-bold mr-3"></i>
                                  <i class="fas fa-italic mr-3"></i>
                                  <i class="fas fa-underline mr-3"></i>
                                  <i class="fas fa-strikethrough mr-3"></i>
                                  <i class="fas fa-list-ul mr-3"></i>
                                  <i class="fas fa-quote-right mr-3"></i>
                                  <i class="fas fa-align-left mr-3"></i>
                                  <i class="fas fa-align-center mr-3"></i>
                                  <i class="fas fa-align-right mr-3"></i>
                                  <i class="fas fa-align-justify mr-3"></i>
                                </MDBBox>
                              </MDBBox>
                              <MDBBox>
                                <MDBBtn
                                  color="transparent"
                                  className="border p-1 ml-2 text-capitalize text-white"
                                  style={{ boxShadow: "none" }}
                                >
                                  <i class="far fa-image mr-1"></i>
                                  Image
                                </MDBBtn>
                              </MDBBox>
                            </MDBBox>
                            <MDBBox className="border-left">
                              <MDBBtn
                                style={{
                                  boxShadow: "none",
                                  backgroundColor: "#a13034",
                                }}
                                color="transparent"
                                className="text-white text-capitalize p-2 ml-3"
                              >
                                Email builder
                              </MDBBtn>
                            </MDBBox>
                          </MDBBox>
                          <textarea
                            className="form-control border w-100"
                            id="emailcontent"
                            rows="5"
                            style={{ height: "200px" }}
                          />
                        </MDBBox>
                      </MDBBox>
                    </MDBBox>
                  </MDBCol>
                  <MDBCol
                    size="4"
                    className="d-flex justify-content-center align-items-center"
                  >
                    <MDBBox
                      className="d-flex justify-content-center align-items-center"
                      style={{
                        height: "250px",
                        width: "150px",
                        border: "2px solid #c0c0c0",
                      }}
                    >
                      <MDBBox>
                        <i class="fas fa-envelope-open-text fa-2x"></i> <br />
                        A/B <br /> testing
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
                    active={this.state.activeItem === "1"}
                    onClick={this.toggle("1")}
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
                        <MDBBox className="">
                          <MDBBox
                            className="w-100 d-flex align-items-center"
                            style={{
                              height: "100px",
                              backgroundColor: "#c0c0c0",
                            }}
                          >
                            <MDBBox>
                              <MDBBox className="d-flex justify-content-start">
                                <MDBBox className="ml-0 pl-0 d-flex align-items-center">
                                  {/* format */}
                                  <MDBDropdown>
                                    <MDBDropdownToggle
                                      caret
                                      className="text-capitalize py-0 pl-0 pr-3 border-right"
                                      color="transparent"
                                      style={{
                                        boxShadow: "none",
                                        fontSize: "15px",
                                      }}
                                    >
                                      Format
                                    </MDBDropdownToggle>
                                    <MDBDropdownMenu basic>
                                      <MDBDropdownItem>
                                        email@domain.com
                                      </MDBDropdownItem>
                                      <MDBDropdownItem divider />
                                      <MDBDropdownItem>
                                        081234567891
                                      </MDBDropdownItem>
                                    </MDBDropdownMenu>
                                  </MDBDropdown>
                                  {/* akhir format */}
                                  {/* font */}
                                  <MDBDropdown>
                                    <MDBDropdownToggle
                                      caret
                                      className="text-capitalize py-0 pl-0 pr-3 border-right"
                                      color="transparent"
                                      style={{
                                        boxShadow: "none",
                                        fontSize: "15px",
                                      }}
                                    >
                                      Font
                                    </MDBDropdownToggle>
                                    <MDBDropdownMenu basic>
                                      <MDBDropdownItem>
                                        Times New Roman
                                      </MDBDropdownItem>
                                      <MDBDropdownItem divider />
                                      <MDBDropdownItem>
                                        081234567891
                                      </MDBDropdownItem>
                                    </MDBDropdownMenu>
                                  </MDBDropdown>
                                  {/* akhir font */}
                                  {/* size */}
                                  <MDBDropdown>
                                    <MDBDropdownToggle
                                      caret
                                      className="text-capitalize py-0 pl-0 pr-3 border-right"
                                      color="transparent"
                                      style={{
                                        boxShadow: "none",
                                        fontSize: "15px",
                                      }}
                                    >
                                      Size
                                    </MDBDropdownToggle>
                                    <MDBDropdownMenu basic>
                                      <MDBDropdownItem>
                                        Times New Roman
                                      </MDBDropdownItem>
                                      <MDBDropdownItem divider />
                                      <MDBDropdownItem>
                                        081234567891
                                      </MDBDropdownItem>
                                    </MDBDropdownMenu>
                                  </MDBDropdown>
                                  {/* akhir size */}
                                  <i class="fas fa-bold mr-3"></i>
                                  <i class="fas fa-italic mr-3"></i>
                                  <i class="fas fa-underline mr-3"></i>
                                  <i class="fas fa-strikethrough mr-3"></i>
                                  <i class="fas fa-list-ul mr-3"></i>
                                  <i class="fas fa-quote-right mr-3"></i>
                                  <i class="fas fa-align-left mr-3"></i>
                                  <i class="fas fa-align-center mr-3"></i>
                                  <i class="fas fa-align-right mr-3"></i>
                                  <i class="fas fa-align-justify mr-3"></i>
                                </MDBBox>
                              </MDBBox>
                              <MDBBox>
                                <MDBBtn
                                  color="transparent"
                                  className="border p-1 ml-2 text-capitalize text-white"
                                  style={{ boxShadow: "none" }}
                                >
                                  <i class="far fa-image mr-1"></i>
                                  Image
                                </MDBBtn>
                              </MDBBox>
                            </MDBBox>
                            <MDBBox className="border-left">
                              <MDBBtn
                                style={{
                                  boxShadow: "none",
                                  backgroundColor: "#a13034",
                                }}
                                color="transparent"
                                className="text-white text-capitalize p-2 ml-3"
                              >
                                Email builder
                              </MDBBtn>
                            </MDBBox>
                          </MDBBox>
                          <textarea
                            className="form-control border w-100"
                            id="emailcontent"
                            rows="5"
                            style={{ height: "200px" }}
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
                            This broadcast currently a draft. When sent it will
                            be delivered to 4 recipients.
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
                {/* akhir preview */}
              </MDBTabPane>
            </MDBTabContent>
          </MDBContainer>
        </MDBBox>
      </MDBBox>
    );
  }
}

export default Accordion;
