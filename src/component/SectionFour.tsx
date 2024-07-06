import "./SectionTwo.scss";
import imageSecFour from "../assets/image/image-section-four.png";
import iphone4 from "../assets/image/iPhone-4.png";
const SectionFour = () => {
  return (
    <div className="body-two">
      <div className="content-section-two">
        <div className="content-left">
          <img
            src={imageSecFour}
            alt="image-section-four"
            className="img image-contain "
            width="80%"
          />
          <img
            src={iphone4}
            alt="image-section-four"
            className="img image-contain image-iphone "
            width="80%"
          />
        </div>
        <div className="content-right">
          <h1 className="title-1 text weg">Kế hoạch công việc hàng ngày</h1>
          <ul>
            <li className="text ">
              <i className="bx bx-check"></i>Chia nhỏ mục tiêu thành các công
              việc hàng ngày
            </li>
            <li className="text ">
              <i className="bx bx-check"></i>Cho phép lên kế hoạch công việc một
              cách chi tiết và rõ ràng hơn
            </li>
            <li className="text ">
              <i className="bx bx-check"></i>Định hướng mục tiêu của mỗi công
              việc đang được thực hiện hàng ngày
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
export default SectionFour;
