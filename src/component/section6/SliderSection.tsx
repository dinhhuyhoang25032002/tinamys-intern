import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.scss";
import "./SliderSection.scss";
import Slider from "react-slick";
import TagSection6 from "./TagSection6";
import { ReactNode } from "react";
type item = {
  icon?: string;
  title: string;
  content: ReactNode | string;
};
type PropSlider = {
  Data: Array<item>;
};
const SliderSection = ({ Data }: PropSlider) => {
  var settings = {
    className: " slider variable-width",
    centerMode: true,
    infinite: true,
  //  centerPadding: "120px",
    slidesToShow: 1,
    speed: 600,
    slidesToScroll: 1,
    dots: true,
    initialSlide: 0,

    autoplay: true,
    autoplaySpeed: 5000,
    variableWidth: true,
    responsive: [
      {
        breakpoint: 350,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerMode: false,
          variableWidth: false,
        
        },
      },
    ],
  };
  return (
    <div className="content-slider slider-container">
      <Slider {...settings}>
        {Data.map((item, index) => {
          return (
            <TagSection6
              icon={item.icon}
              title={item.title}
              content={item.content}
              style={{ width: 245, height: 180 }}
              key={index}
            />
          );
        })}
      </Slider>
    </div>
  );
};

export default SliderSection;
