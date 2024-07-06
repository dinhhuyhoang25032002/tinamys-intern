import "./Header.scss";
import logo from "../assets/logo/logoPage.svg";
import ButtonDownload from "./custom-btn/ButtonImage";
import flagVN from "../assets/image/vietnam_flags.png";
import flagEN from "../assets/image/united-states_flags.png";
import flagCH from "../assets/image/china_flags.png";
import logoAppSt from "../assets/image/App-Store.8ff30bad.svg";
import logoPlaySt from "../assets/image/Play-Store.7d1a6776.svg";
import { Tooltip } from "react-tooltip";
import { useNavigate } from "react-router-dom";
const Header = () => {
  const navigation = useNavigate();

  return (
    <div className="body-header">
      <div className="content-header">
        <div className="logo-header" onClick={() => navigation("/")}>
          <img src={logo} />
        </div>
        <div className="container-item">
          <div style={{ display: "flex", gap: 7 }}>
            <a
              href="https://apps.apple.com/us/app/tinamys/id6449159582"
              target="blank"
            >
              <ButtonDownload width={90} height={30} src={logoAppSt} />
            </a>
            <a
              href="https://play.google.com/store/apps/details?id=com.tinasoft.mys&pli=1"
              target="blank"
            >
              <ButtonDownload width={90} height={30} src={logoPlaySt} />
            </a>
          </div>

          <button className="experience" onClick={() => navigation("/login")}>
            <span className="text weg">Trải nghiệm</span>
          </button>
          <div className="contact">
            <i className="bx bx-phone-call"></i>
            <div className="text-contact">
              <span className="text">Liên hệ với chúng tôi</span>
              <span className="text">+(84) 246 329 5589</span>
            </div>
          </div>
          <img
            alt="VN-Flag"
            src={flagVN}
            className="flag-icon image"
            data-tooltip-id="option-language"
          />
          <Tooltip
            id="option-language"
            place="bottom-end"
            clickable
            // style={{ backgroundColor: "transparent" }}
          >
            <div className="container-option">
              <div className="content-option">
                <div className="language en">
                  <img alt="flag-en" src={flagEN} className="image flag-icon" />
                  <span>English</span>
                </div>
                <div className="language vn">
                  <img alt="flag-vn" src={flagVN} className="image flag-icon" />
                  <span>Tiếng Việt</span>
                </div>
                <div className="language china">
                  <img alt="flag-ch" src={flagCH} className="image flag-icon" />
                  <span>中国人</span>
                </div>
              </div>
            </div>
          </Tooltip>
        </div>
      </div>
    </div>
  );
};
export default Header;
