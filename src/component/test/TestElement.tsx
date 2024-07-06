// import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.scss";
// import "./TestElement.scss";
// import React, { useRef } from "react";

// type SliderRef = {
//   slickNext(): void;
//   slickPrev(): void;
// };
import { useEffect } from "react";

const TestElement = () => {
  useEffect(() => {
    // 👇️ Scroll to top on page load
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);

  return (
    <div>
      <h2>Top of the page</h2>

      <div style={{ height: "155rem" }} />

      {/* 👇️ Scroll to top on button click */}
      <button
        onClick={() => {
          window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
        }}
        style={{
          position: "fixed",
          padding: "1rem 2rem",
          fontSize: "20px",
          bottom: "40px",
          right: "40px",
          backgroundColor: "#0C9",
          color: "#fff",
          textAlign: "center",
        }}
      >
        Scroll to top
      </button>
    </div>
  );
};
export default TestElement;
