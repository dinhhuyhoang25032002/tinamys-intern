import "./HomePage.scss";
import Header from "../component/Header";
import SectionOne from "../component/SectionOne";
import SectionTwo from "../component/SectionTwo";
import SectionThree from "../component/SectionThree";
import SectionFour from "../component/SectionFour";
import SectionFive from "../component/SectionFive";
import SectionSix from "../component/section6/SectionSix";
import Section7 from "../component/Section7";
import Section8 from "../component/Section8";
import Section9 from "../component/Section9";
import Section10 from "../component/section10/Section10";
import Section11 from "../component/Section11";
import Footer from "../component/Footer";
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
          <div id="feature" style={{ height: 50, width: "100%" }}></div>
          <div className="container-section-six">
            <SectionSix />
          </div>
          <div className="container-section-two">
            <Section7 />
          </div>
          <div id="trial" style={{ height: 90, width: "100%" }}></div>
          <div className="container-section-eight">
            <Section8 />
          </div>
          <div className="container-section-nine">
            <Section9 />
          </div>
          <div className="container-section-ten">
            <Section10 />
          </div>
          <div id="contact" style={{ height: 70, width: "100%" }}></div>
          <div className="container-section-two">
            <Section11 />
          </div>
          <div className="container-footer">
            <Footer />
          </div>
        </div>
      </div>
      <div className="container-btn-right">
        <a href="#feature">
          <button
            className="btn-fix"
            onClick={() => {
              window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
            }}
          >
            <div className="text fs-15">Ưu điểm</div>
            <i className="bx bx-star icon-btn"></i>
          </button>
        </a>
        <a href="#contact">
          <button
            className="btn-fix"
            onClick={() => {
              window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
            }}
          >
            <div className="text fs-15">Liên hệ</div>
            <i className="fa-regular fa-envelope icon-btn"></i>
          </button>
        </a>

        <button
          className={showButton === true ? "btn-fix" : "btn-fix active"}
          onClick={() => {
            window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
          }}
        >
          <div
            className={showButton === true ? "text fs-15" : "text fs-15 active"}
          >
            Đầu trang
          </div>
          <i className="bx bxs-to-top icon-btn"></i>
        </button>
      </div>
    </div>
  );
};
export default HomePage;
