import React, { useEffect, useRef } from "react";
import lottie from "lottie-web";

const Loading = () => {
  const container = useRef(null);

  useEffect(() => {
    lottie.loadAnimation({
      container: container.current,
      renderer: "svg",
      loop: true,
      autoplay: true,
      animationData: require("../images/loading.json"),
    });
  }, []);

  return (
    <div className="d-flex align-items-center" style={{minHeight:"50vmin"}}>
      <div
        className="container"
        ref={container}
        style={{ height: "100px" }}
      ></div>
    </div>
  );
};

export default Loading;
