import React from "react";

import { MDBRow, MDBCol } from "mdbreact";

import "../css/style.css";
import { Route } from "react-router-dom";

function Table(props) {
  const truncate=(str)=>{
    return str.length > 15 ? str.substring(0, 15) + "..." : str;
}
  return (
    <Route>
    {props.data.map((el,index)=>(
      <MDBRow
      className="text-capitalize d-flex align-items-center py-3 mb-2"
      style={{
        borderRadius: "20px",
        boxShadow: "0 0 10px #e1e1e1",
        backgroundColor: "white",
        fontWeight: "500",
      }}
      key={index}
    >
      <MDBCol size="2" style={{textAlign:"left"}}>
        <span className="pl-1">{truncate(el.name)}</span>
      </MDBCol>
      <MDBCol size="2" style={{textAlign:"left"}}>
        <span >{truncate(el.email)}</span>
      </MDBCol>
      <MDBCol size="2">
        <span >{truncate(el.phone)}</span>
      </MDBCol>
      <MDBCol size="2">
        <span >{truncate(el.bod)}</span>
      </MDBCol>
      <MDBCol size="2">
        <span >{truncate(el.address)}</span>
      </MDBCol>
      <MDBCol size="2" style={{textAlign:"left"}}>
        <span className="pr-1">{truncate(el.company)}</span>
      </MDBCol>
    </MDBRow>
    ))
    }
    </Route>
  );
};
export default Table;
