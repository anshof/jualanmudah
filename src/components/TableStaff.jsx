import React from "react";

import { MDBRow, MDBCol } from "mdbreact";

import "../css/style.css";

const Table = () => {
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
        <span className="pl-1">Ana Shofiya Kurniawati</span>
      </MDBCol>
      <MDBCol size="3" style={{ textAlign: "center" }}>
        <span>1</span>
      </MDBCol>
      <MDBCol size="3" style={{ textAlign: "center" }}>
        <span>
          <i class="far fa-trash-alt"></i>
        </span>
      </MDBCol>
      <MDBCol size="3" style={{ textAlign: "center" }}>
        <span>20 Januari 2020 - 08:30</span>
      </MDBCol>
    </MDBRow>
  );
};
export default Table;
