import React from "react";
import {
  MDBBtn,
  MDBModalFooter,
  MDBModalBody,
  MDBIcon,
  MDBRow,
} from "mdbreact";
import DataUploader from "./DataUploader";

function NewDatabase(props) {
  return (
    <div className="new-database">
      <MDBRow
        style={{
          justifyContent: "end",
          marginTop: "15px",
          marginRight: "20px",
        }}
      >
        <MDBIcon
          icon="times"
          onClick={props.toggle("NewDatabase")}
          style={{ cursor: "pointer", color: "#9e9e9e" }}
        />
      </MDBRow>
      <MDBModalBody className="new-database-modal mx-4">
      <div className="text-center">
          <h3
            className="dark-grey-text mb-5"
            style={{ fontWeight: "600" }}
          >
            New Database
          </h3>
        </div>
      <DataUploader />
      <MDBRow style={{display:"flex", justifyContent:"center"}}>
        <MDBBtn
          color="transparent"
          style={{
            backgroundColor: "#f14c59",
            color: "white",
            boxShadow: "none",
            borderRadius: "40px",
            fontSize: "16px",
            minWidth:"260px"
            // padding: ".50rem 1rem",
          }}
          className="text-capitalize mt-3"
        >
          <i class="fas fa-upload mr-1"></i> Upload New Database
          
        </MDBBtn>

        </MDBRow>
      <MDBRow style={{display:"flex", justifyContent:"center"}}>
          or
      </MDBRow>
        <MDBRow style={{display:"flex", justifyContent:"center"}}>
        <MDBBtn
          color="transparent"
          style={{
            backgroundColor: "#f14c59",
            color: "white",
            boxShadow: "none",
            borderRadius: "40px",
            fontSize: "16px",
            minWidth:"260px"
            // padding: ".50rem 1rem",
          }}
          className="text-capitalize mt-3"
        >
          <i class="fas fa-plus mr-1"></i> Update Current Database
        </MDBBtn>
        </MDBRow>
      </MDBModalBody>
      <MDBModalFooter className="mx-5 pt-3 mb-1">
        <p className="font-small grey-text d-flex justify-content-end">
          We will make sure that your
          <div
            className="red-text mx-1"
            style={{ cursor: "pointer" }}
          >
            data
          </div>
          is secured
        </p>
      </MDBModalFooter>
    </div>
  );
}

export default NewDatabase;
