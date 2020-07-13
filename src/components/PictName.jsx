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
      {/* btn new broadcast */}
      <MDBBox className="text-center" style={{ margin: "0", padding: "0" }}>
        <Link>
          <button
            color="transparent"
            style={{
              fontSize: "18px",
              fontWeight: "600",
              color:
                props.active !== "broadcasts" ? "rgb(241, 76, 89)" : "#192e35",
              cursor: props.active !== "broadcasts" ? "pointer" : "text",
            }}
          />
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
            cursor: props.active !== "segments" ? "pointer" : "text",
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
            cursor: props.active !== "draft" ? "pointer" : "text",
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
            cursor: props.active !== "database" ? "pointer" : "text",
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
