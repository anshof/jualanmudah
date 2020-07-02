import React from "react";
import {
  MDBBtn,
  MDBModalFooter,
  MDBInput,
  MDBModalBody,
  MDBIcon,
  MDBRow,
  MDBLink,
} from "mdbreact";

function SignIn(props) {
  return (
    <div className="signin">
      <MDBRow
        style={{
          justifyContent: "end",
          marginTop: "15px",
          marginRight: "20px",
        }}
      >
        <MDBIcon
          icon="times"
          onClick={props.toggle("Signin")}
          style={{ cursor: "pointer", color: "#9e9e9e" }}
        />
      </MDBRow>
      <MDBModalBody
        className="signin-modal mx-4"
        style={{ padding: "0 50px", marginBottom: "30px" }}
      >
        <div className="text-center">
          <h3 className="dark-grey-text mb-3" style={{ fontWeight: "600" }}>
            Sign in
          </h3>
        </div>
        <MDBInput label="Your Username" group />
        <MDBInput
          label="Your Password"
          group
          type="password"
          validate
          containerClass="mb-0"
        />
        <div className="text-center mb-3 signin-button">
          <MDBBtn
            type="button"
            rounded
            className="btn-block z-depth-1a"
          >
            Sign in
          </MDBBtn>
        </div>
      </MDBModalBody>
      <MDBModalFooter className="mx-5 pt-3 mb-1">
        <p className="font-small grey-text d-flex justify-content-end">
          <span style={{margin:"auto"}}>Not a member?</span>
          <MDBLink
            to="/signup"
            className="red-text"
            style={{ cursor: "pointer" }}
          >
            Sign Up
          </MDBLink>
        </p>
      </MDBModalFooter>
    </div>
  );
}

export default SignIn;
