import "./SectionOne.scss";
import imgMys from "../assets/image/image-section-one.png";
import cicleIcon from "../assets/image/two-circle.c60ff0b6.svg";
import ButtonDownload from "./custom-btn/ButtonImage";
import logoAppSt from "../assets/image/App-Store.8ff30bad.svg";
import logoPlaySt from "../assets/image/Play-Store.7d1a6776.svg";
const SectionOne = () => {
  return (
    <div className="body-section-one">
      <div className="content-section-one">
        <div className="section-one-item">
          <div className="container-text">
            <h1 className="text title-1">
              <span style={{ position: "relative" }}>
                Thay
                <div style={{ position: "absolute", top: -20, left: -20 }}>
                  <svg
                    width="30%"
                    height="30%"
                    viewBox="0 0 62 67"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      className="lineCircle"
                      strokeWidth="1.69062"
                      strokeLinecap="round"
                      d="M20.694 62.3197C14.8739 60.6864 8.7803 59.8625 2.86918 59.1077C1.59601 58.9495 0.413967 59.8326 0.323026 61.0766C0.141145 62.3216 1.05108 63.4601 2.2333 63.6183C7.96255 64.3449 13.8731 65.1226 19.4206 66.6949C20.6028 67.0358 21.8765 66.3339 22.2402 65.1262C22.6039 63.9194 21.8762 62.6616 20.694 62.3197Z"
                      stroke="#FF5F55"
                    ></path>
                    <path
                      className="lineCircle"
                      strokeWidth="1.69062"
                      strokeLinecap="round"
                      d="M38.3352 39.1642C28.9683 29.6055 18.4193 21.2772 9.23422 11.462C8.41575 10.5453 6.9607 10.4962 6.0513 11.352C5.14189 12.2086 5.05131 13.6491 5.96071 14.5658C15.1457 24.4091 25.6948 32.7648 35.0617 42.3518C35.9712 43.2466 37.4258 43.2593 38.3352 42.3789C39.1537 41.4996 39.2446 40.0592 38.3352 39.1642Z"
                      stroke="#FF5F55"
                    ></path>
                    <path
                      className="lineCircle"
                      strokeWidth="1.69062"
                      strokeLinecap="round"
                      d="M55.8886 2.39698C56.1614 7.86795 56.4336 13.3389 56.7065 18.8108C56.7065 20.064 57.7983 21.0316 59.0715 20.9706C60.3446 20.9088 61.2535 19.8421 61.2535 18.588C60.9807 13.1079 60.7083 7.62877 60.4356 2.14962C60.3446 0.896452 59.2532 -0.0647889 57.9801 0.00341648C56.7977 0.0716218 55.7976 1.14472 55.8886 2.39698Z"
                      stroke="#FF5F55"
                    ></path>
                  </svg>
                </div>
              </span>
              đổi cách quản lý công việc
            </h1>
            <div className="group-item">
              <div className="mobie-image">
                <div
                  className="comment "
                  style={{
                    position: "absolute",
                    width: 128,
                    backgroundColor: "white",
                    borderRadius: 7,
                    padding: 5,
                    top: 50,
                    right: 8,
                  }}
                >
                  <div className="container-child-title text">
                    <div className="">
                      <img
                        alt="Mapping Your Success"
                        src={cicleIcon}
                        width="16"
                        height="11"
                        decoding="async"
                        data-nimg="1"
                        loading="lazy"
                      />
                    </div>
                    <h5 className="" style={{ margin: 0 }}>
                      MYS
                    </h5>
                  </div>
                  <p className="text" style={{ fontSize: 8, margin: 0 }}>
                    Phần mềm quản lý mục tiêu công ty, nhóm, cá nhân theo từng
                    năm, tháng, tuần, ngày và quản lý công việc.
                  </p>
                </div>
              </div>
              <div className="mobie-btn" style={{ display: "none" }}>
                <div style={{ display: "flex", gap: 10 }}>
                  <ButtonDownload width={92} height={40} src={logoAppSt} />
                  <ButtonDownload width={92} height={40} src={logoPlaySt} />
                </div>
              </div>
              <div className="group-text">
                <h1 className="text weg " style={{ fontSize: 30, margin: 0 }}>
                  Mapping Your{" "}
                  <span style={{ position: "relative" }}>
                    Success
                    <div style={{ position: "absolute", top: 10, left: 0 }}>
                      <svg
                        width="110%"
                        height="110%"
                        viewBox="0 0 296 70"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          className="lineCircle"
                          d="M123.477 56.5914C47.3723 64.5971 -12.4993 43.7699 4.85737 27.8086C26.5533 7.85694 230.104 -10.2483 280.993 12.2282C355.842 45.2872 99.9566 92.2446 15.646 54.0127"
                          stroke="#FF5F55"
                          strokeWidth="2"
                          strokeLinecap="round"
                        ></path>
                      </svg>
                    </div>
                  </span>
                </h1>
                <ul>
                  <li className="text weg">
                    <i className="fa-solid fa-circle-check"></i>
                    <span>
                      Quản lý mục tiêu của công ty, nhóm, nhân sự một cách dễ
                      dàng và tiện lợi
                    </span>
                  </li>
                  <li className="text weg">
                    <i className="fa-solid fa-circle-check"></i>
                    <span>
                      Cho phép lập mục tiêu theo chu kì năm, quý, tháng, tuần
                    </span>
                  </li>
                  <li className="text weg">
                    <i className="fa-solid fa-circle-check"></i>
                    <span>
                      Quản lý checkin tiến độ mục tiêu, dự án của công ty, nhóm
                    </span>
                  </li>
                  <li className="text weg">
                    <i className="fa-solid fa-circle-check"></i>
                    <span>
                      Tự động nhắc việc và thông báo đến những người liên quan
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          
          <div className="container-img-btn">
            <div className="container-btn">
              <button className="btn btn-profile">
                <i className="fa-regular fa-eye"></i>
                <span style={{ marginLeft: 6 }}>Xem Profile</span>
              </button>
              <button className="btn-exp btn">Trải nghiệm ngay!</button>
            </div>

            <div className="image-mys-container">
              <img
                alt="img-section-one"
                src={imgMys}
                className="image-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default SectionOne;
