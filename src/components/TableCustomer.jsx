import React from "react";

import { MDBRow, MDBCol } from "mdbreact";

import "../css/style.css";
import { Route } from "react-router-dom";

function Table(props) {
  const truncate = (str) => {
    return str.length > 15 ? str.substring(0, 15) + "..." : str;
  };
  return (
    <Route>
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
          <MDBCol size="2" style={{ textAlign: "center" }}>
            <span className="pl-1">{truncate(props.name)}</span>
          </MDBCol>
          <MDBCol size="2" style={{ textAlign: "center" }}>
            <span>{truncate(props.email)}</span>
          </MDBCol>
          <MDBCol size="2" style={{ textAlign: "center" }}>
            <span>{truncate(props.phone)}</span>
          </MDBCol>
          <MDBCol size="2" style={{ textAlign: "center" }}>
            <span>{truncate(props.bod)}</span>
          </MDBCol>
          <MDBCol size="2" style={{ textAlign: "center" }}>
            <span>{truncate(props.address)}</span>
          </MDBCol>
          <MDBCol size="2" style={{ textAlign: "center" }}>
            <span className="pl-2">{truncate(props.company)}</span>
          </MDBCol>
        </MDBRow>
    </Route>
  );
}
export default Table;
