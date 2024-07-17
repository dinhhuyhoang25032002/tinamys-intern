import "./Section7.scss";
import BtnText from "./custom-btn/BtnText";
import imageSection7 from "../assets/background/background-privacypolicy.png";
const Section7 = () => {
  return (
    <div className="body-section-7">
      <div className="content-section-7">
        <div className="content-left-section-7">
          <h1
            className="text weg-1 title"
            style={{ marginBottom: "1.5rem", color: "#001e4d" }}
          >
            Chính sách về quyền riêng tư
          </h1>
          <span
            style={{ color: "#0070ff", marginBottom: "1.5rem" }}
            className=" text weg fs-16 title-1 "
          >
            Quyền riêng tư của bạn rất quan trọng đối với chúng tôi !
          </span>
          <ul>
            <li className="text weg ">
              <i className="bx bx-check"></i>Những thông tin nào được thu thập
            </li>
            <li className="text weg">
              <i className="bx bx-check"></i>Các thông tin đã thu thập được sử
              dụng
            </li>
            <li className="text weg">
              <i className="bx bx-check"></i>Thông tin được cung cấp ra bên
              ngoài như thế nào
            </li>
            <li className="text weg">
              <i className="bx bx-check"></i>Các thông tin khác về quyền riêng
              tư
            </li>
          </ul>
          <div className="btn-container">
            <BtnText
              title={
                <span className="text weg fs-15">
                  Xem chi tiết <i className="fa-solid fa-angle-right"></i>
                </span>
              }
              style={{
                width: "100%",
                height: 55,
                borderRadius: "40px",
                backgroundColor: "#1079ff",
                color: "white",
              }}
            />
          </div>
        </div>
        <div className="content-right-section-7">
          <img
            src={imageSection7}
            className="image-contain wid-100 hei-100"
            alt="image-section-7"
            loading="lazy"
          />
        </div>
      </div>
    </div>
  );
};
export default Section7;
