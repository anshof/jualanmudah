import React from "react";
import { Link } from "react-router-dom";
import { MDBBox, MDBRow, MDBCol } from "mdbreact";

import "../css/style.css";

const PictName = (props) => {
  return (
    <MDBBox
      style={{
        padding: "30px 0",
        margin: "0",
      }}
    >
      <MDBBox className="my-4">
        <Link
          to={props.active !== "broadcasts" ? "/dashboard" : "#"}
          className="mb-1"
          style={{
            fontSize: "20px",
            fontWeight: "400",
            color: props.active !== "broadcasts" ? "white" : "#f14c59",
            cursor: props.active !== "broadcasts" ? "pointer" : "text",
          }}
        >
          <MDBRow
            style={{
              minWidth: props.active !== "broadcasts" ? "100px" : "300px",
              margin: "0",
              padding: "10px 0",
              backgroundColor:
                props.active !== "broadcasts" ? "#f14c59" : "white",
              borderRadius: "15px 0 0 15px",
            }}
          >
            <MDBCol size="3" style={{ padding: "0" }}>
              <i className="fas fa-envelope-open"></i>
            </MDBCol>
            <MDBCol size="9" className="text-left">
              Broadcasts
            </MDBCol>
          </MDBRow>
        </Link>
      </MDBBox>
      <MDBBox className="my-4">
        <Link
          to={props.active === "segments" ? "#" : "/segment-list"}
          className="mb-1"
          style={{
            fontSize: "20px",
            fontWeight: "400",
            color: props.active !== "segments" ? "white" : "#f14c59",
            cursor: props.active !== "segments" ? "pointer" : "text",
          }}
        >
          <MDBRow
            style={{
              minWidth: props.active !== "segments" ? "100px" : "300px",
              margin: "0",
              padding: "10px 0",
              backgroundColor:
                props.active !== "segments" ? "#f14c59" : "white",
              borderRadius: "15px 0 0 15px",
            }}
          >
            <MDBCol size="3" className="text-center" style={{ padding: "0" }}>
              <i className="fas fa-users"></i>
            </MDBCol>
            <MDBCol size="9" className="text-left">
              Semua grup
            </MDBCol>
          </MDBRow>
        </Link>
      </MDBBox>
      <MDBBox className="my-4">
        <Link
          to={props.active !== "draft" ? "/draft" : "#"}
          className="mb-1"
          style={{
            fontSize: "20px",
            fontWeight: "400",
            color: props.active !== "draft" ? "white" : "#f14c59",
            cursor: props.active !== "draft" ? "pointer" : "text",
          }}
        >
          <MDBRow
            style={{
              minWidth: props.active !== "draft" ? "100px" : "300px",
              margin: "0",
              padding: "10px 0",
              backgroundColor: props.active !== "draft" ? "#f14c59" : "white",
              borderRadius: "15px 0 0 15px",
            }}
          >
            <MDBCol size="3" className="text-center" style={{ padding: "0" }}>
              <i className="fas fa-file-alt"></i>
            </MDBCol>
            <MDBCol size="9" className="text-left">
              Draft
            </MDBCol>
          </MDBRow>
        </Link>
      </MDBBox>
      <MDBBox className="my-4">
        <Link
          to={props.active !== "database" ? "/database" : "#"}
          className="mb-1"
          style={{
            fontSize: "20px",
            fontWeight: "400",
            color: props.active !== "database" ? "white" : "#f14c59",
            cursor: props.active !== "database" ? "pointer" : "text",
          }}
        >
          <MDBRow
            style={{
              minWidth: props.active !== "database" ? "100px" : "300px",
              margin: "0",
              padding: "10px 0",
              backgroundColor:
                props.active !== "database" ? "#f14c59" : "white",
              borderRadius: "15px 0 0 15px",
            }}
          >
            <MDBCol size="3" style={{ padding: "0" }}>
              <i className="fas fa-database"></i>
            </MDBCol>
            <MDBCol size="9" className="text-left">
              Database
            </MDBCol>
          </MDBRow>
        </Link>
      </MDBBox>
      <MDBBox className="my-4">
        <Link
          to={props.active !== "profile" ? "/profile" : "#"}
          className="mb-1"
          style={{
            fontSize: "20px",
            fontWeight: "400",
            color: props.active !== "profile" ? "white" : "#f14c59",
            cursor: props.active !== "profile" ? "pointer" : "text",
          }}
        >
          <MDBRow
            style={{
              minWidth: props.active !== "profile" ? "100px" : "300px",
              margin: "0",
              padding: "10px 0",
              backgroundColor: props.active !== "profile" ? "#f14c59" : "white",
              borderRadius: "15px 0 0 15px",
            }}
          >
            <MDBCol size="3" className="text-center" style={{ padding: "0" }}>
              <i className="fas fa-user"></i>
            </MDBCol>
            <MDBCol size="9" className="text-left">
              Profile
            </MDBCol>
          </MDBRow>
        </Link>
      </MDBBox>
      <MDBBox className="text-center my-4" style={{ padding: "0" }}>
        <Link to="/broadcast">
          <button
            color="transparent"
            style={{
              backgroundColor: "white",
              border: "1px solid #f14c59",
              color: "#f14c59",
              boxShadow: "none",
              borderRadius: "40px",
              fontSize: "18px",
              height: "40px",
              margin: "0",
            }}
            className="text-capitalize w-100"
          >
            <i className="fas fa-plus mr-1"></i> Buat Broadcast
          </button>
        </Link>
      </MDBBox>
      <MDBBox className="text-center my-4" style={{ padding: "0" }}>
        <Link to="/segment">
          <button
            color="transparent"
            style={{
              backgroundColor: "white",
              border: "1px solid #f14c59",
              color: "#f14c59",
              boxShadow: "none",
              borderRadius: "40px",
              fontSize: "18px",
              height: "40px",
              margin: "0",
              padding: "0 13px",
            }}
            className="text-capitalize w-100"
          >
            <i className="fas fa-plus mr-1"></i> Buat Grup
          </button>
        </Link>
      </MDBBox>
    </MDBBox>
  );
};
export default PictName;
