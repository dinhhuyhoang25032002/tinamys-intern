// import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.scss";
import "./TestElement.scss";
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
    <div className="container">
      <div className="box-1 ">Box-1</div>
      <div className="box-2">Box-2</div>
      <div className="box-3">Box-3</div>
    </div>
  );
};
export default TestElement;
