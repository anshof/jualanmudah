import React from "react";
import {
  MDBBtn,
  MDBModalFooter,
  MDBModalBody,
  MDBIcon,
  MDBRow,
} from "mdbreact";

function DownloadFormDatabase(props) {
  return (
    <div className="form-database">
      <MDBRow
        style={{
          justifyContent: "end",
          marginTop: "15px",
          marginRight: "20px",
        }}
      >
        <MDBIcon
          icon="times"
          onClick={props.toggle("FormDatabase")}
          style={{ cursor: "pointer", color: "#9e9e9e" }}
        />
      </MDBRow>
      <MDBModalBody className="new-database-modal mx-4">
      <div className="text-center">
          <h3
            className="dark-grey-text mb-5"
            style={{ fontWeight: "600" }}
          >
            Database Form
          </h3>
        </div>
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
          className="text-capitalize mb-4"
        >
          <i className="fas fa-download mr-1"></i> Download Blank Form
          
        </MDBBtn>

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
          className="text-capitalize mb-4"
        >
          <i className="fas fa-download mr-1"></i> Download Database Form
        </MDBBtn>
      </MDBRow>
        <MDBRow style={{display:"flex", justifyContent:"center"}}>
        <MDBBtn
          color="#f14c59"
          borderColor="#f14c59"
          style={{
            backgroundColor: "transparent",
            color: "#f14c59",
            boxShadow: "none",
            border:"1px solid",
            borderColor:"#f14c59",
            borderRadius: "40px",
            fontSize: "16px",
            padding: ".50rem 1rem",
            minWidth:"150px"
          }}
          className="text-capitalize mb-4"
        >
         Cancel
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

export default DownloadFormDatabase;
