import React from "react";
import { MDBDatePickerV5 } from "mdbreact";
import {Redirect} from "react-router-dom"
import { doLogOut } from "../stores/actions/userAction";

class DatePickerPage extends React.Component {
  render() {
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
      <div>
        <MDBDatePickerV5 inline getValue={(e) => console.log(e)} />
      </div>
    );
  }
}
}
export default DatePickerPage;
