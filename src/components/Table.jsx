import React from "react";

import { MDBBox, MDBRow, MDBCol } from "mdbreact";

import "../css/style.css";

const Table = (props) => {
  return (
    <MDBRow
      className="text-capitalize d-flex align-items-center py-3"
      style={{
        borderRadius: "20px",
        boxShadow: "0 0 10px #e1e1e1",
        backgroundColor: "white",
        fontWeight: "500",
        margin: "0 0 10px 0",
        fontSize: "14px",
      }}
    >
      <MDBCol size="3" style={{ textAlign: "center" }}>
        <span className="pl-1">{props.title}</span>
      </MDBCol>
      <MDBCol size="3" style={{ textAlign: "center" }}>
        <span>{props.open}%</span>
      </MDBCol>
      <MDBCol size="3" style={{ textAlign: "center" }}>
        <MDBBox
          className="w-100"
          style={{ backgroundColor: "#1d3354", borderRadius: "40px" }}
        >
          <span className="text-center text-uppercase text-white py-1">
            {props.status}
          </span>
        </MDBBox>
      </MDBCol>
      <MDBCol size="3" style={{ textAlign: "center" }}>
        <span>{props.sendAt.slice(0, -9)}</span>
      </MDBCol>
    </MDBRow>
  );
};
export default Table;
