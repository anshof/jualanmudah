import React from "react";

import { MDBBox } from "mdbreact";

import "../css/style.css";

const PictName = () => {
  return (
    <MDBBox>
      <MDBBox className="d-flex justify-content-center">
        <MDBBox>
          <img
            src={
              "https://emmawatson2017.files.wordpress.com/2017/01/emma-watson-harry-potter-movies-wallpapers-hd-wallpaper-high.jpg"
            }
            alt="pict"
            style={{
              height: "100px",
              width: "100px",
              borderRadius: "50%",
              objectFit: "cover",
            }}
            className="mx-auto"
          />
        </MDBBox>
      </MDBBox>
      <h4
        className="text-center mb-0 pt-2"
        style={{ fontWeight: "600", color: "#a13034" }}
      >
        Hermione Granger
      </h4>
      <p className="text-muted text-center mt-0">hermione@alterra.id</p>
    </MDBBox>
  );
};
export default PictName;
