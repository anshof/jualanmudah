import React from "react";

import "../css/style.css";
import { MDBBox, MDBRow, MDBCol, MDBBtn } from "mdbreact";

const ContentWa = () => {
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
              backgroundColor: "#C0C0C0",
            }}
          >
            <MDBBox
              style={{
                backgroundColor: "white",
                color: "#C0C0C0",
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
              <label htmlFor="emailcontent">
                <p className="text-left mb-0" style={{ fontWeight: "400" }}>
                  Whatsapp content
                </p>
              </label>
              <MDBBox className="">
                <MDBBox
                  className="w-100 d-flex align-items-center"
                  style={{ height: "50px", backgroundColor: "#c0c0c0" }}
                >
                  <MDBBox>
                    <MDBBox className="d-flex justify-content-start">
                      <MDBBox className="pl-0 pt-0 d-flex align-items-center">
                        <i class="fas fa-bold mx-3"></i>
                        <i class="fas fa-italic mr-3"></i>
                        <i class="fas fa-underline mr-3"></i>
                        <i class="fas fa-strikethrough mr-3"></i>
                        <MDBBox>
                          <MDBBtn
                            color="transparent"
                            className="border p-2 ml-0 text-capitalize text-white"
                            style={{ boxShadow: "none" }}
                          >
                            <i class="far fa-image mr-1"></i>
                            Image
                          </MDBBtn>
                        </MDBBox>
                      </MDBBox>
                    </MDBBox>
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
export default ContentWa;
