import "./SectionTwo.scss";
import imageSecTwo from "../assets/background/image-section-two.png";
import imageIP2 from "../assets/image/iPhone-2.png";
const SectionTwo = () => {
  return (
    <div className="body-two">
      <div className="content-section-two">
        <div className="content-left">
          <img
            src={imageSecTwo}
            alt="image-section-two"
            className="image-contain img "
            width={"90%"}
            height={"100%"}
          />
          <img
            src={imageIP2}
            alt="image-section-two"
            className="image-iphone img wid-100 image-contain"
          />
        </div>
        <div className="content-right ">
          <h1 className="text weg title-1">
            Lập mục tiêu theo chu kì năm, quý, tháng, tuần
          </h1>
          <ul>
            <li className="text weg">
              <i className="bx bx-check "></i>
              <span className="text">
                Lập mục tiêu chi tiết theo năm, quý, tháng, tuần
              </span>
            </li>
            <li className="text weg">
              <i className="bx bx-check"></i>
              <span className="text">
                Tổ chức các hạng mục công việc, phân bổ nhân lực liên nhóm để
                thực hiện mục tiêu và quản lý tiến độ trên một nền tảng hợp nhất
              </span>
            </li>
            <li className="text weg">
              <i className="bx bx-check"></i>
              <span className="text">
                Tổ chức công việc theo dự án, báo cáo độc lập, theo dõi đầu việc
                đa chiều, cảnh báo tiến độ thông minh
              </span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
export default SectionTwo;
