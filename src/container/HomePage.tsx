import "./HomePage.scss";
import Header from "../component/Header";
import SectionOne from "../component/SecsionOne";
import SectionTwo from "../component/SectionTwo";
import SectionThree from "../component/SectionThree";
import SectionFour from "../component/SectionFour";
import SectionFive from "../component/SectionFive";
import SectionSix from "../component/section6/SectionSix";
import Section7 from "../component/Section7";
import Section8 from "../component/Section8";
import Section9 from "../component/Section9";
import Section10 from "../component/Section10";
import { useEffect, useState } from "react";

const HomePage = () => {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 300) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    });
  }, []);

  return (
    <div className="container-homepage">
      <div className="header-container">
        <Header />
      </div>
      <div className="body-homepage">
        <div className="content">
          <div className="container-section-one">
            <SectionOne />
          </div>
          <div className="container-section-two" id="section-2">
            <SectionTwo />
          </div>
          <div className="container-section-two">
            <SectionThree />
          </div>
          <div className="container-section-two">
            <SectionFour />
          </div>
          <div className="container-section-two">
            <SectionFive />
          </div>
          <div className="container-section-six">
            <SectionSix />
          </div>
          <div className="container-section-two">
            <Section7 />
          </div>
          <div className="container-section-eight">
            <Section8 />
          </div>
          <div className="container-section-nine">
            <Section9 />
          </div>
          <div className="container-section-ten">
            <Section10 />
          </div>
        </div>
      </div>

      <button
        className={showButton === true ? "go-top" : "go-top active"}
        onClick={() => {
          window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
        }}
      >
        <i className="bx bxs-to-top"></i>
      </button>
    </div>
  );
};
export default HomePage;
