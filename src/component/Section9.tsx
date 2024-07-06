import { ReactNode } from "react";
import feedbackIcon1 from "../assets/image/avatarfeedback1.svg";
import feedbackIcon2 from "../assets/image/avatarfeedback2.svg";
import feedbackIcon3 from "../assets/image/avatarfeedback3.svg";
import imageSection9 from "../assets/background/background-night.png";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.scss";
import "./section6/SliderSection.scss";
import "./Section9.scss";
import Slider from "react-slick";

type item = {
  title: string;
  content: ReactNode | string;
  icon?: string;
};
const settings = {
  className: "slider variable-width",
  dots: true,
  infinite: true,
  centerMode: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  variableWidth: true,
  initialSlide: 0,
  speed: 600,
  // autoplay: true,
  // autoplaySpeed: 1000,
  focusOnSelect: true,
  // responsive: [
  //   {
  //     breakpoint: 350,
  //     settings: {
  //       slidesToShow: 1,
  //       slidesToScroll: 1,
  //       centerMode: false,
  //       variableWidth: false,
  //     },
  //   },
  // ],
};

const Data: Array<item> = [
  {
    title: "Phạm Khánh Linh",
    content: (
      <div className="feeback text fs-14">
        <p className="text weg">Nhân viên kinh doanh</p>
        <i className="fa-solid fa-venus"></i>
        <p>
          Tôi không bỏ lỡ bất cứ deadline nào nhờ MYS, hệ thống sẽ nhắc việc khi
          đến hạn hoặc quá hạn nhờ đó mà vị trí bận rộn như tôi không bị lỡ mất
          bất cứ công việc quan trọng nào!
        </p>
      </div>
    ),
    icon: feedbackIcon1,
  },
  {
    title: "Lê Đắc Duy",
    content: (
      <div className="feeback">
        <p className="text weg">Trưởng phòng Tài chính</p>
        <i className="fa-solid fa-mars"></i>
        <p>
          Thực sự cảm ơn MYS, nhờ MYS tôi đã giảm thiểu tần suất họp báo cáo
          công việc hàng ngày và hàng tuần rất nhiều, do tiến độ được cập nhật
          theo thời gian thực, tôi chỉ cần truy cập vào ứng dụng là thấy được
          tất cả.
        </p>
      </div>
    ),
    icon: feedbackIcon2,
  },
  {
    title: "Nguyễn Thị Phương Thảo",
    content: (
      <div className="feeback">
        <p className="text weg">CEO</p>
        <i className="fa-solid fa-venus"></i>
        <p>
          Ứng dụng có giao diện thoáng, đẹp, dễ sử dụng. Các phòng ban ở công ty
          tôi từ kế toán, văn thư đến kĩ thuật đều không gặp phải trở ngại gì
          trong cách dùng.
        </p>
      </div>
    ),
    icon: feedbackIcon3,
  },
];

const Section9 = () => {
  return (
    <div className="body-section-9">
      <div className="content-section-9">
        <div className="content-top">
          <div className="container-image">
            <img
              src={imageSection9}
              className="image-contain wid-100 hei-100"
            />
          </div>
          <div className="container-content-feedback">
            <h1 className="text weg title">Những phản hồi từ khách hàng</h1>
            <ul>
              <li>
                <i className="fa-solid fa-star"></i>
              </li>
              <li>
                <i className="fa-solid fa-star"></i>
              </li>
              <li>
                <i className="fa-solid fa-star"></i>
              </li>
              <li>
                <i className="fa-solid fa-star"></i>
              </li>
              <li>
                <i className="fa-solid fa-star"></i>
              </li>
            </ul>
            <p className="text content">
              “Một ứng dụng thú vị, nơi tôi có thể chia sẻ với bạn bè và những
              người xung quanh. Mong mô hình của app sẽ được nhân rộng và nhiều
              người biết đến”
            </p>
          </div>
        </div>
        <div className="content-bottom">
          <div className="slider-container">
            <Slider {...settings}>
              {Data.map((item, index) => {
                return (
                  <div
                    className="tag-container-section-9"
                    key={index}
                    style={{ width: 700, height: 300 }}
                  >
                    <div className="container-text">
                      <p className="text  weg name-employee fs-18">
                        {" "}
                        {item.title}
                      </p>
                      {item.content}
                    </div>

                    <div className="container-img">
                      <img
                        alt="icon-image-section-9 image-contain"
                        src={item.icon}
                        width={"100%"}
                        height={"100%"}
                      />
                    </div>
                  </div>
                );
              })}
            </Slider>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Section9;
