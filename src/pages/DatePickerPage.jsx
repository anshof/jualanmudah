import React from "react";
import { MDBDatePickerV5 } from "mdbreact";

class DatePickerPage extends React.Component {
  render() {
    return (
      <div>
        <MDBDatePickerV5 inline getValue={(e) => console.log(e)} />
      </div>
    );
  }
}

export default DatePickerPage;
