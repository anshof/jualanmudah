import React from "react";
import { Link } from "react-router-dom";
import {
  MDBBtn,
  MDBModalFooter,
  MDBInput,
  MDBModal,
  MDBModalBody,
  MDBIcon,
<<<<<<< HEAD
  MDBRow,
=======
  MDBRow
>>>>>>> bb77cbe90b80782e76d570eb82fc9069f63838f6
} from "mdbreact";

import SignUp from "./SignUp";

function SignIn(props) {
<<<<<<< HEAD
  console.log("cek props", props);
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
      <MDBModalBody className="signin-modal mx-4">
        <div className="text-center">
          <h3 className="dark-grey-text mb-3" style={{ fontWeight: "600" }}>
=======
  return (
    <div className="signin">
    <MDBRow style={{justifyContent:"end", marginTop:"15px", marginRight:"20px"}}>
      <MDBIcon
        icon="times"
        onClick={props.toggle("Signin")}
        style={{ cursor: "pointer", color:"#9e9e9e"}}
      />
      </MDBRow>
      <MDBModalBody className="signin-modal mx-4">
        <div className="text-center">
          <h3
            className="dark-grey-text mb-3"
            style={{ fontWeight: "600" }}
          >
>>>>>>> bb77cbe90b80782e76d570eb82fc9069f63838f6
            Sign in
          </h3>
        </div>
        <MDBInput
          label="Your email"
          group
          type="email"
          validate
          error="wrong"
          success="right"
        />
        <MDBInput
          label="Your password"
          group
          type="password"
          validate
          containerClass="mb-0"
        />
        <p className="font-small red-text d-flex justify-content-end pb-3">
          Forgot
          <Link to="#!" className="red-text ml-1">
            Password?
          </Link>
        </p>
        <div className="text-center mb-3 signin-button">
          <MDBBtn type="button" rounded className="btn-block z-depth-1a">
            Sign in
          </MDBBtn>
        </div>
      </MDBModalBody>
      <MDBModalFooter className="mx-5 pt-3 mb-1">
        <p className="font-small grey-text d-flex justify-content-end">
          Not a member?
          <div
            className="red-text ml-1"
            onClick={props.toggle("Signup")}
            style={{ cursor: "pointer" }}
          >
            Sign Up
          </div>
        </p>
        <MDBModal
          isOpen={props.modalSignup}
          toggle={props.toggle("Signup")}
          size="md"
          backdrop={false}
        >
<<<<<<< HEAD
          <SignUp toggle={props.toggle} />
=======
          <SignUp toggle={props.toggle}/>
>>>>>>> bb77cbe90b80782e76d570eb82fc9069f63838f6
        </MDBModal>
      </MDBModalFooter>
    </div>
  );
}

export default SignIn;
