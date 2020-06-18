import React, { Component } from "react";
import {
  MDBContainer,
  MDBBtn,
  MDBModal,
  MDBModalFooter,
  MDBInput,
  MDBCard,
  MDBCardBody,
} from "mdbreact";


class SignIn extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
  }

  state = {
    modal: false,
  };

  toggle(){
    this.setState({
      modal: !this.state.modal,
    });
  };

  render() {

// const SignIn = (props) => {
    return (
      <MDBContainer>

    {/* Nanti dihapus kalau jadi component */}
        <div onClick={this.toggle} style={{cursor:"pointer"}}>
          Sign In
        </div>
        <MDBModal isOpen={this.state.modal} toggle={this.toggle} size="md">
    {/* Nanti dihapus kalau jadi component */}
          <MDBCard>
            <MDBCardBody className="mx-4">
              <div className="text-center">
                <h3 className="dark-grey-text mb-5">
                  <strong>Sign in</strong>
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
                <a href="#!" className="red-text ml-1">
                  Password?
                </a>
              </p>
              <div className="text-center mb-3">
                <MDBBtn
                  type="button"
                  gradient="young-passion"
                  rounded
                  className="btn-block z-depth-1a"
                >
                  Sign in
                </MDBBtn>
              </div>
            </MDBCardBody>
            <MDBModalFooter className="mx-5 pt-3 mb-1">
              <p className="font-small grey-text d-flex justify-content-end">
                Not a member?
                <a href="#!" className="red-text ml-1">
                  Sign Up
                </a>
              </p>
            </MDBModalFooter>
          </MDBCard>

    {/* Nanti dihapus kalau jadi component */}
        </MDBModal>
    {/* Nanti dihapus kalau jadi component */}

      </MDBContainer>
    );
  }
}

export default SignIn;
