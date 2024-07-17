import "./SectionTwo.scss";
import imageSectionFive from "../assets/image/image-section-five.png";
import iphone3 from "../assets/image/iPhone-3.png";
const SectionFive = () => {
  return (
    <div className="body-two">
      <div
        className="content-section-two"
        style={{ display: "flex", flexDirection: "row-reverse" }}
      >
        <div className="content-left">
          <img
            src={imageSectionFive}
            alt="image-section-five"
            className="img image-contain"
            width="100%"
            height={"85%"}
            style={{ marginTop: 90 }}
            loading="lazy"
          />
          <img
            src={iphone3}
            loading="lazy"
            alt="image-section-five"
            className="image-iphone img image-contain"
            width="80%"
          />
        </div>
        <div className="content-right">
          <h1 className="text weg title-1">
            Checkin tiến độ công việc, mục tiêu
          </h1>
          <ul>
            <li className="text ">
              <i className="bx bx-check"></i>
              Checkin tiến độ công việc định kỳ để giúp quản lý đưa ra quyết
              định chính xác
            </li>
            <li className="text ">
              <i className="bx bx-check"></i>
              Hệ thống tự động nhắc tiến độ công việc đến những người liên quan
            </li>
            <li className="text ">
              <i className="bx bx-check"></i>Hệ thống tự động cảnh báo công việc
              sắp đến hạn, quá hạn
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
export default SectionFive;
