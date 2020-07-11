import React from "react";
import { Link } from "react-router-dom";
import { MDBRow, MDBCol } from "mdbreact";

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
        <Link to="#"className="pl-1" style={{color:"rgb(241, 76, 89)"}}>{props.subject}</Link>
      </MDBCol>
      <MDBCol size="3" style={{ textAlign: "center" }}>
        <span>{props.group.name}</span>
      </MDBCol>
      <MDBCol size="3" style={{ textAlign: "center" }}>
        <span>
          <i className="far fa-trash-alt" onClick={() => props.delete(props.id)} style={{cursor:"pointer"}}></i>
        </span>
      </MDBCol>
      <MDBCol size="3" style={{ textAlign: "center" }}>
        <span>{props.createdAt.slice(0, -9)}</span>
      </MDBCol>
    </MDBRow>
  );
};
export default Table;
