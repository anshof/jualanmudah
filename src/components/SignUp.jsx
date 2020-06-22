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


class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modal2: false,
      modal3: false
    };

    this.toggle = this.toggle.bind(this);
  }


  // toggle(){
  //   this.setState({
  //     modal: !this.state.modal,
  //   });
  // };
  toggle = nr => () => {
    let modalNumber = 'modal' + nr
    this.setState({
      [modalNumber]: !this.state[modalNumber]
    });
  }

  render() {

// function SignUp({ props }) {
    return (
      <MDBContainer>

    {/* Nanti dihapus kalau jadi component */}
        <div onClick={this.toggle(2)} style={{cursor:"pointer"}}>
          Sign Up
        </div>
        <MDBModal isOpen={this.state.modal} toggle={this.toggle(2)} size="md" centered>
    {/* Nanti dihapus kalau jadi component */}
          <MDBCard>
            <MDBCardBody className="mx-4">
              <div className="text-center">
                <h3 className="dark-grey-text mb-5">
                  <strong>Sign up</strong>
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
                validate
                error="wrong"
                success="right"
              />
              <MDBInput
                name="password"
                label="Your password"
                group
                type="password"
                validate
                containerClass="mb-0"
              />
              <div className="text-center">
                <h4 className="dark-grey-text ">
                  <strong>Your Biodata</strong>
                </h4>
              </div>
              <MDBInput
                name="name"
                label="Your full name"
                group
                type="text"
                containerClass="mb-0"
              />
              <MDBInput
                name="country"
                label="Your country"
                group
                type="text"
                validate
                containerClass="mb-0"
              />
              <MDBInput
                name="state"
                label="Your state"
                group
                type="text"
                validate
                containerClass="mb-0"
              />
              <MDBInput
                name="city"
                label="Your city"
                group
                type="text"
                validate
                containerClass="mb-0"
              />
              <MDBInput
                name="zip"
                label="zip"
                group
                type="text"
                validate
                containerClass="mb-0"
              />
              <div className="text-center mb-3">
                <MDBBtn
                  type="button"
                  gradient="young-passion"
                  rounded
                  className="btn-block z-depth-1a"
                >
                  Sign up
                </MDBBtn>
              </div>
            </MDBCardBody>
            <MDBModalFooter className="mx-5 pt-3 mb-1">
              <p className="font-small grey-text d-flex justify-content-end">
                Have an account?
                <a href="#!" className="red-text ml-1">
                  Sign in
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

export default SignUp;
