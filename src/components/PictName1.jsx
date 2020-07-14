import React from "react";
import { Link } from "react-router-dom";
import { MDBBox } from "mdbreact";

import "../css/style.css";

const PictName = (props) => {
  return (
    <MDBBox
      style={{
        borderRadius: "20px",
        padding: "30px 20px",
        boxShadow: "0 0 10px #e1e1e1",
        backgroundColor: "white",
        margin: "0",
      }}
      className="text-left"
    >
      <MDBBox>
        <MDBBox className="d-flex justify-content-center">
          <MDBBox>
            <img
              src={
                props.bio.user_image ===
                "https://firebasestorage.googleapis.com/v0/b/personal-email-d3b3b.appspot.com/o/images%2Fuser_image%2F9ff2f2f01c4bd1b013.png?alt=media&token=272b7417-a9fa-4fde-99b1-e00fa6d377ee"
                  ? props.bio.user_image
                  : require("../images/deafult-profile.jpg")
              }
              alt="pict"
              style={{
                height: "80px",
                width: "80px",
                borderRadius: "50%",
                objectFit: "cover",
              }}
              className="mx-auto"
            />
          </MDBBox>
        </MDBBox>
        <p
          className="text-center mb-0 pt-2"
          style={{ fontSize: "18px", fontWeight: "700", color: "#a13034" }}
        >
          {props.bio.full_name}
        </p>
      </MDBBox>
      <MDBBox
        className="text-center"
        style={{ margin: "0", padding: "0", marginTop: "10px" }}
      >
        <Link to="/broadcast">
          <button
            color="transparent"
            style={{
              backgroundColor: "#f14c59",
              border: "1px solid #f14c59",
              color: "white",
              boxShadow: "none",
              borderRadius: "40px",
              fontSize: "14px",
              height: "40px",
              margin: "0",
              padding: "0 13px",
            }}
            className="text-capitalize"
          >
            <i className="fas fa-plus mr-1"></i> Buat Broadcast
          </button>
        </Link>
      </MDBBox>
      
      <hr />
      <MDBBox
        className="text-center"
        style={{ margin: "0", padding: "0", marginTop: "10px" }}
      >
        <Link to="/segment">
          <button
            color="transparent"
            style={{
              backgroundColor: "#f14c59",
              border: "1px solid #f14c59",
              color: "white",
              boxShadow: "none",
              borderRadius: "40px",
              fontSize: "14px",
              height: "40px",
              margin: "0",
              padding: "0 13px",
            }}
            className="text-capitalize"
          >
            <i className="fas fa-plus mr-1"></i> Buat Grup
          </button>
        </Link>
      </MDBBox>
      
      <hr />
      <MDBBox className="pl-3">
        <Link
          to={props.active !== "broadcasts" ? "/dashboard" : "#"}
          className="mb-1"
          style={{
            fontSize: "18px",
            fontWeight: "600",
            color: props.active !== "broadcasts" ? "rgb(241, 76, 89)" : "#192e35",
            cursor : props.active !== "broadcasts" ? "pointer" : "text"
          }}
        >
          Broadcasts
        </Link>
      </MDBBox>
      <hr />
      <MDBBox className="pl-3">
      <Link
          to={props.active === "segments" ? "#" : "/segment-list"}
          className="mb-1"
          style={{
            fontSize: "18px",
            fontWeight: "600",
            color: props.active !== "segments" ? "rgb(241, 76, 89)" : "#192e35",
            cursor : props.active !== "segments" ? "pointer" : "text"
          }}
        >
          Semua grup
        </Link>
      </MDBBox>
      <hr />
      <MDBBox className="pl-3">
        <Link
          to={props.active !== "draft" ? "/draft" : "#"}
          className="mb-1"
          style={{
            fontSize: "18px",
            fontWeight: "600",
            color: props.active !== "draft" ? "rgb(241, 76, 89)" : "#192e35",
            cursor : props.active !== "draft" ? "pointer" : "text"
          }}
        >
          Draft
        </Link>
      </MDBBox>
      <hr />
      <MDBBox className="pl-3">
        <Link
          to={props.active !== "database" ? "/database" : "#"}
          className="mb-1"
          style={{
            fontSize: "18px",
            fontWeight: "600",
            color: props.active !== "database" ? "rgb(241, 76, 89)" : "#192e35",
            cursor : props.active !== "database" ? "pointer" : "text"
          }}
        >
          Database
        </Link>
      </MDBBox>
      {/* <hr />
      <MDBBox className="pl-3">
        <Link
        to="/staff"
          className="mb-1"
          style={{
            fontSize: "18px",
            fontWeight: "600",
            color: "#192e35",
          }}
        >
          Staff
        </Link>
      </MDBBox> */}
    </MDBBox>
  );
};
export default PictName;
