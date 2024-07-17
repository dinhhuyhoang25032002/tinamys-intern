import "./Footer.scss";
import listDotImg from "../assets/background/footer-shape-1.fcf37f00.svg";
import waveImg from "../assets/background/footer-shape-3.6a2740c0.svg";
import circleImg from "../assets/background/footer-shape-2.e79c086e.svg";
import logoPage from "../assets/logo/logoPage.svg";
import BtnText from "./custom-btn/BtnText";
const Footer = () => {
  return (
    <div className="body-footer">
      <div className="content-footer-top">
        <div className="content-left">
          <a
            href="https://tinasoft.io/vi/"
            target="_blank"
            rel="noopener noreferrer"
            style={{ width: "100%", zIndex: 1 }}
          >
            <img
              src={logoPage}
              alt="logo-page"
              width={"55%"}
              className="image-contain"
            />
          </a>
          <div className="slogan text weg">Liên hệ</div>
          <p className=" text fs-13 contact">Email: contact@tinasoft.vn</p>
          <p className=" text fs-13 contact">
            Số điện thoại: +(84) 246 329 5589
          </p>
          <p className=" text fs-13 ">
            Địa chỉ văn phòng: Tầng 4, Tòa nhà Ellipse Tower, 110 Trần Phú, Hà
            Đông, Hà Nội
          </p>
        </div>
        <div className="container-center">
          <div className="slogan text weg">Support</div>
          <div className="content-center">
            <p className="text about">About MYS</p>
            <p className="text fs-14 weg">Giới thiệu</p>
            <a href="#feature" target="_top" style={{ textDecoration: "none" }}>
              <p className="text fs-14 weg">Tính năng</p>
            </a>
          </div>
          <div className="content-center">
            <p className="text about">Solution</p>
            <a href="#trial" style={{ textDecoration: "none" }}>
              <p className="text fs-14 weg">Đăng ký dùng thử</p>
            </a>
            <p className="text fs-14 weg">Faqs</p>
            <p className="text fs-14 weg">Help Center</p>
          </div>
        </div>

        <div className="content-right">
          <p className="text about">Trải nghiệm ứng dụng!</p>
          <a
            href="https://apps.apple.com/us/app/tinamys/id6449159582"
            target="_blank"
            rel="noopener noreferrer"
          >
            <BtnText
              title={
                <>
                  <i
                    style={{ color: "white", fontSize: 18 }}
                    className="bx bxl-apple "
                  ></i>
                  <p className="text weg fs-15">App Store</p>
                </>
              }
              style={{
                padding: "14px 19px",
                border: "none",
                backgroundColor: "#222943",
                marginBottom: 15,
              }}
            />
          </a>
          <a
            href="https://play.google.com/store/apps/details?id=com.tinasoft.mys&pli=1"
            target="_blank"
            rel="noopener noreferrer"
          >
            <BtnText
              title={
                <>
                  <i
                    style={{ color: "white", fontSize: 18 }}
                    className="bx bxl-play-store"
                  ></i>
                  <p className="text weg fs-15">Play Store</p>
                </>
              }
              style={{
                padding: "14px 19px",
                border: "none",
                backgroundColor: "#222943",
              }}
            />
          </a>
        </div>
      </div>
      <div className="content-footer-bottom">
        <hr style={{ width: "100%", opacity: 0.4 }} />
        <div className="container-license">
          <div className="content-left-license">
            <a
              href="https://tinasoft.io/vi"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "white" }}
            >
              <span className="text weg ">© 2024 TINASOFT VIỆT NAM</span>
            </a>
          </div>
          <div className="content-right-license">
            <p className="text policy fs-15">Privacy Policy</p>
            <svg
              width="6px"
              height="6px"
              className="mx-6"
              viewBox="0 0 338 338"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle
                cx="168.891"
                cy="168.685"
                r="168.574"
                fill="#2B59FF"
              ></circle>
            </svg>
            <p className="text policy  fs-15">Refund Policy</p>
          </div>
        </div>
      </div>
      <div className="container-circle-top">
        <svg
          width="96%"
          height="90%"
          className=""
          viewBox="0 0 338 338"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle
            cx="168.891"
            cy="168.685"
            r="168.574"
            fill="#ffffff1a"
          ></circle>
        </svg>
      </div>
      <div className="container-img-list-dot">
        <img
          src={listDotImg}
          className="image-contain"
          alt="image-list-dot-footer"
        />
      </div>
      <div className="container-wave-img">
        <img src={waveImg} alt="image-wave-img-footer" />
      </div>
      <div className="container-circle-image-footer">
        <img
          src={circleImg}
          alt="image-circle-footer"
          className="image-circle"
        />
      </div>
      <img />
    </div>
  );
};
export default Footer;
