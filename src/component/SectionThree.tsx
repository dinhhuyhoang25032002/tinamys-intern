import "./SectionTwo.scss";
import imgageSecThree from "../assets/image/image-section-three.png";
import imageIcon from "../assets/icon/icon1.svg";
import iphone3 from "../assets/image/iPhone-3.png";
const SectionThree = () => {
  return (
    <div className="body-two">
      <div
        className="content-section-two"
        style={{ display: "flex", flexDirection: "row-reverse" }}
      >
        <div className="content-left po-re ani">
          <img
            alt="image-section-three"
            className="  image-contain"
            src={imgageSecThree}
            width="80%"
            loading="lazy"
          />
          <img
            src={iphone3}
            loading="lazy"
            alt="image-section-two"
            className="image-iphone img  image-contain"
            width="80%"
          />
          <img
            src={imageIcon}
            loading="lazy"
            className="po-ab image-contain image-icon"
            width={65}
            height={55}
            style={{ left: -70, bottom: -40 }}
          />
        </div>
        <div className="content-right">
          <h1 className="text weg title-1">
            Quản lý mục tiêu theo cấp bậc công ty, nhóm, nhân viên
          </h1>
          <ul>
            <li className="text ">
              <i className="bx bx-check"></i>
              Chia nhỏ mục tiêu theo cấp bậc từ công ty, nhóm đến từng nhân viên
            </li>
            <li className="text ">
              <i className="bx bx-check"></i>
              Giám sát tiến độ thực hiện mục tiêu, đánh giá hiệu quả, giúp cấp
              trên đưa ra quyết định chính xác và nhanh chóng
            </li>
            <li className="text ">
              <i className="bx bx-check"></i>
              Giao tiếp và trao đổi nội bộ trên từng công việc. Thông tin đồng
              bộ, kịp thời và dễ dàng phối hợp
            </li>
            <li className="text ">
              <i className="bx bx-check"></i>
              Quản lý mục tiêu, tiến độ hoàn thành của nhân viên cấp dưới trên
              một bảng chung
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
export default SectionThree;
