import { FALSE } from "sass";
import "./Section10.scss";
import { useState } from "react";

const Section10 = () => {
  const [isOpen1, setOpen1] = useState(true);
  const [isOpen2, setOpen2] = useState(false);
  const [isOpen3, setOpen3] = useState(false);
  const [isOpen4, setOpen4] = useState(true);
  return (
    <div className="body-section-10">
      <div className="content-section-10">
        <h1 className="text weg title ">Những câu hỏi về MYS</h1>
        <div className="group-box">
          <div className="group-item">
            <div className="box-item">
              <div className="content-box">
                <div className="top-content">
                  <span className="text weg">
                    MYS có dễ dàng sử dụng không?
                  </span>
                  <button
                    className={
                      isOpen1 === true ? "btn-open active" : "btn-open"
                    }
                    onClick={() => setOpen1(!isOpen1)}
                  >
                    <i className={"fa-solid fa-chevron-right"}></i>
                  </button>
                </div>
                <div
                  className={
                    isOpen1 === true
                      ? "bottom-content active"
                      : "bottom-content"
                  }
                >
                  <p>
                    Ứng dụng hoàn toàn thân thiện với người dùng, các tính năng
                    được bố trí rõ ràng, logic giúp người dùng dễ dàng tương
                    tác. Đội ngũ hỗ trợ 24/7 sẵn sàng giải đáp mọi thắc mắc của
                    người dùng.
                  </p>
                </div>
              </div>
            </div>
            <div className="box-item">
              <div className="content-box">
                <div className="top-content">
                  <span className="text weg">
                    MYS có trên những nền tảng nào?
                  </span>
                  <button
                    className={
                      isOpen2 === true ? "btn-open active" : "btn-open"
                    }
                    onClick={() => setOpen2(!isOpen2)}
                  >
                    <i className="fa-solid fa-chevron-right"></i>
                  </button>
                </div>
                <div
                  className={
                    isOpen2 === true
                      ? "bottom-content active"
                      : "bottom-content"
                  }
                >
                  <p>
                    MYS đã sẵn sàng được sử dụng trên web và có mặt tại ứng dụng
                    Android & IOS.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="group-item">
            <div className="box-item">
              <div className="content-box">
                <div className="top-content">
                  <span className="text weg">Tính năng chính của MYS?</span>
                  <button
                    className={
                      isOpen3 === true ? "btn-open active" : "btn-open"
                    }
                    onClick={() => setOpen3(!isOpen3)}
                  >
                    <i className="fa-solid fa-chevron-right"></i>
                  </button>
                </div>
                <div
                  className={
                    isOpen3 === true
                      ? "bottom-content active"
                      : "bottom-content"
                  }
                >
                  <p>
                    Xác lập, quản lý mục tiêu, người tham gia và dễ dàng theo
                    dõi tiến độ, nhận thông báo mỗi khi có cập nhật, can thiệp
                    kịp thời.
                  </p>
                </div>
              </div>
            </div>
            <div className="box-item">
              <div className="content-box">
                <div className="top-content">
                  <span className="text weg">Những ưu điểm của MYS?</span>
                  <button
                    className={
                      isOpen4 === true ? "btn-open active" : "btn-open"
                    }
                    onClick={() => setOpen4(!isOpen4)}
                  >
                    <i className="fa-solid fa-chevron-right"></i>
                  </button>
                </div>
                <div
                  className={
                    isOpen4 === true
                      ? "bottom-content active"
                      : "bottom-content"
                  }
                >
                  <p>
                    Dễ sử dụng và tiện lợi, hỗ trợ trên mọi nền tảng, chi phí
                    thấp, hiệu quả sử dụng cao và được hỗ trợ công nghệ AI
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <p className="text fs-14">
          Chưa thể giải đáp những thắc mắc?
          <a
            style={{ textDecoration: "none", marginLeft: 7, color: "#2a6df5" }}
            href="#section-2"
          >
            Liên hệ với chúng tôi
          </a>
        </p>
      </div>
    </div>
  );
};
export default Section10;
