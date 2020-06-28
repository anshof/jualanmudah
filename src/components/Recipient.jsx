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

const Recipient = () => {
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
        <MDBCol size="4" className="border-right">
          <MDBBox className="py-3">
            <MDBBox className="border-bottom">
              <MDBBox className="form-group text-left ml-5">
                <label htmlFor="formGroupExampleInput">
                  <p className="text-left mb-0" style={{ fontWeight: "400" }}>
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
              <p className="text-left mt-3 mb-0" style={{ fontWeight: "400" }}>
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
                    <MDBDropdownItem>email@domain.com</MDBDropdownItem>
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
            <p className="text-left pl-3" style={{ color: "#a13034" }}>
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
                <p className="text-left mb-0" style={{ fontWeight: "400" }}>
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
    </MDBBox>
  );
};
export default Recipient;
