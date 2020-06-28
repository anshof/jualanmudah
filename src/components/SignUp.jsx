import React from "react";
import {
  MDBBtn,
  MDBModalFooter,
  MDBInput,
  MDBCardBody,
  MDBIcon,
  MDBRow,
} from "mdbreact";

function SignUp(props) {
  console.log("cek props di signup", props);
  return (
    <div className="signup">
      <MDBRow
        style={{
          justifyContent: "end",
          marginTop: "15px",
          marginRight: "20px",
        }}
      >
        <MDBIcon
          icon="times"
          onClick={props.toggle("Signup")}
          style={{ cursor: "pointer", color: "#9e9e9e" }}
        />
      </MDBRow>
      <MDBCardBody className="mx-4">
        <div className="text-center">
          <h3 className="dark-grey-text mb-3" style={{ fontWeight: "600" }}>
            Sign up
          </h3>
        </div>
        <MDBInput
          name="nickname"
          label="Your username"
          group
          type="text"
          containerClass="mb-0"
        />
        <MDBInput
          name="email"
          label="Your email"
          group
          type="email"
<<<<<<< HEAD
          validate
=======
          // validate
>>>>>>> bb77cbe90b80782e76d570eb82fc9069f63838f6
          error="wrong"
          success="right"
          containerClass="mb-0"
        />
        <MDBInput
          name="password"
          label="Your password"
          group
          type="password"
          validate
          containerClass="mb-0"
        />
        <MDBInput
          name="name"
          label="Your full name"
          group
          type="text"
          containerClass="mb-0"
        />
        <MDBInput
          name="address"
          label="Your full address"
          group
          type="text"
          containerClass="mb-0"
        />
        <MDBInput
          name="position"
          label="Your position"
          group
          type="text"
          containerClass="mb-0"
        />
        <div className="text-center signup-button">
          <MDBBtn type="button" rounded className="btn-block z-depth-1a">
            Sign up
          </MDBBtn>
        </div>
      </MDBCardBody>
      <MDBModalFooter className="mx-5 pt-3 mb-1">
        <p className="font-small grey-text d-flex justify-content-end">
          Have an account?
<<<<<<< HEAD
          <div className="red-text ml-1" onClick={props.toggle("Signup")}>
=======
          <div
            className="red-text ml-1"
            onClick={props.toggle("Signup")}
          >
>>>>>>> bb77cbe90b80782e76d570eb82fc9069f63838f6
            Sign in
          </div>
        </p>
      </MDBModalFooter>
    </div>
  );
}

export default SignUp;
