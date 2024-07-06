import "./Section8.scss";
import ButtonDownload from "./custom-btn/ButtonImage";
import logoAppSt from "../assets/image/App-Store.8ff30bad.svg";
import logoPlaySt from "../assets/image/Play-Store.7d1a6776.svg";
import imageIphone from "../assets/image/iPhone-7.png";
const Section8 = () => {
  return (
    <div className="body-section-8">
      <div className="content-section-8">
        <div className="title">
          <h1 className="text weg">
            Trải nghiệm ứng dụng quản lý công việc TinaMYS
          </h1>
        </div>
        <div className="content-text text weg">
          Khám phá sức mạnh đột phá với TinaMYS - giải pháp quản trị mục tiêu,
          công việc cho doanh nghiệp: Đa chiều - thông minh - linh hoạt - hiệu
          quả
        </div>
        <div className="container-btn">
          <ButtonDownload src={logoAppSt} />
          <ButtonDownload src={logoPlaySt} className="btn-gg" />
        </div>
        <div className="container-img">
          <img
            alt="image-iphone-section-8"
            className="image-contain"
            src={imageIphone}
            width={"100%"}
            height={"100%"}
          />
        </div>
      </div>
    </div>
  );
};
export default Section8;
