import React from "react";

import "../css/style.css";
import {
  MDBBox,
  MDBRow,
  MDBCol,
  MDBDropdown,
  MDBDropdownToggle,
  MDBDropdownMenu,
  MDBDropdownItem,
  MDBBtn,
} from "mdbreact";

const PreviewEmail = () => {
  return (
    <MDBBox>
      <MDBRow
        style={{
          margin: "25px 25px 0 25px",
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
            <MDBBox className="text-uppercase text-white">recipient</MDBBox>
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
                <p className="text-left mb-0" style={{ fontWeight: "400" }}>
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
                <p className="text-left mb-0" style={{ fontWeight: "400" }}>
                  Email content
                </p>
              </label>
              <MDBBox className="">
                <MDBBox
                  className="w-100 d-flex align-items-center"
                  style={{ height: "75px", backgroundColor: "#c0c0c0" }}
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
                            style={{ boxShadow: "none", fontSize: "15px" }}
                          >
                            Format
                          </MDBDropdownToggle>
                          <MDBDropdownMenu basic>
                            <MDBDropdownItem>email@domain.com</MDBDropdownItem>
                            <MDBDropdownItem divider />
                            <MDBDropdownItem>081234567891</MDBDropdownItem>
                          </MDBDropdownMenu>
                        </MDBDropdown>
                        {/* akhir format */}
                        {/* font */}
                        <MDBDropdown>
                          <MDBDropdownToggle
                            caret
                            className="text-capitalize py-0 pl-0 pr-3 border-right"
                            color="transparent"
                            style={{ boxShadow: "none", fontSize: "15px" }}
                          >
                            Font
                          </MDBDropdownToggle>
                          <MDBDropdownMenu basic>
                            <MDBDropdownItem>Times New Roman</MDBDropdownItem>
                            <MDBDropdownItem divider />
                            <MDBDropdownItem>081234567891</MDBDropdownItem>
                          </MDBDropdownMenu>
                        </MDBDropdown>
                        {/* akhir font */}
                        {/* size */}
                        <MDBDropdown>
                          <MDBDropdownToggle
                            caret
                            className="text-capitalize py-0 pl-0 pr-3 border-right"
                            color="transparent"
                            style={{ boxShadow: "none", fontSize: "15px" }}
                          >
                            Size
                          </MDBDropdownToggle>
                          <MDBDropdownMenu basic>
                            <MDBDropdownItem>Times New Roman</MDBDropdownItem>
                            <MDBDropdownItem divider />
                            <MDBDropdownItem>081234567891</MDBDropdownItem>
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
  );
};
export default PreviewEmail;
