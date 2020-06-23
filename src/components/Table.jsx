import React from "react";

import { MDBBox, MDBRow, MDBCol } from "mdbreact";

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
      }}
    >
      <MDBCol size="3">
        <span className="text-center">Info produk terbaru</span>
      </MDBCol>
      <MDBCol size="2">
        <span className="text-center">0/0</span>
      </MDBCol>
      <MDBCol size="2">
        <span className="text-center">0%</span>
      </MDBCol>
      <MDBCol size="2">
        <MDBBox
          className="w-100"
          style={{ backgroundColor: "#4C59F0", borderRadius: "40px" }}
        >
          <span className="text-center text-uppercase text-white py-1">
            Running
          </span>
        </MDBBox>
      </MDBCol>
      <MDBCol size="3">
        <span className="text-center">20 Januari 2020 - 08:30</span>
      </MDBCol>
    </MDBRow>
  );
};
export default Table;
