import "./Section11.scss";
import { useFormik } from "formik";
import * as Yup from "yup";
import Input from "./custom-input/Input";
import "yup-phone";
import imageSection11 from "../assets/background/main-image-ele.png";

const Section11 = () => {
  const formik = useFormik({
    initialValues: {
      name: "",
      numberPhone: "",
      email: "",
      message: "",
    },
    validationSchema: Yup.object({
      name: Yup.string()
        .min(3, "Điền đầy đủ họ và tên")
        .max(30, "Tên không vượt quá 30 kí tự"),
      numberPhone: Yup.string()
        .phone("VN", true, "Số điện thoại không hợp lệ")
        .min(3, "Hãy nhập đủ số điện thoại")
        .max(18, "Số điện thoại không vượt quá 18 kí tự"),
      message: Yup.string().min(5, "Lời nhắn nên từ 5 kí tự"),
      email: Yup.string()
        .email("Email không hợp lệ")
        .required("Điền địa chỉ email"),
    }),
    onSubmit: (values) => {
      console.log("check data: ", values);
    },
  });

  return (
    <div className="body-section-11">
      <div className="content-section-11">
        <div className="content-left">
          <img
            alt="image-section-11"
            src={imageSection11}
            width={"100%"}
            loading="lazy"
            height={"100%"}
            className="image-contain"
          />
        </div>
        <div className="content-right">
          <div className="group-item">
            <div className="title-container">
              <h1 className="po-re text weg title " style={{ zIndex: 5 }}>
                Liên hệ với chúng tôi
                <svg
                  className="po-ab"
                  style={{ bottom: -1, left: 0, zIndex: -10 }}
                  width="228"
                  height="16"
                  viewBox="0 0 228 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M2.97461 12.9513C56.6422 4.19511 151.592 -1.43388 224.869 8.57321"
                    stroke="#08F2C5"
                    strokeWidth="5.54249"
                    strokeLinecap="round"
                  ></path>
                </svg>
              </h1>
            </div>
            <form onSubmit={formik.handleSubmit}>
              <div className="name-number-phone">
                <Input
                  type="text"
                  className={
                    formik.errors.name && formik.touched.name
                      ? formik.errors.name
                      : undefined
                  }
                  name="name"
                  value={formik.values.name}
                  onChange={formik.handleChange}
                  placeholder="Họ và tên*"
                />

                {formik.errors.name && formik.touched.name}
                <Input
                  type="text"
                  className={
                    formik.errors.numberPhone && formik.touched.numberPhone
                      ? formik.errors.numberPhone
                      : undefined
                  }
                  name="numberPhone"
                  value={formik.values.numberPhone}
                  onChange={formik.handleChange}
                  placeholder="Số điện thoại*"
                />
              </div>
              <div className="error-container-message">
                {formik.errors.name && formik.touched.name && (
                  <span
                    style={{ color: "red" }}
                    className="text fs-13 err-name"
                  >
                    {formik.errors.name}
                  </span>
                )}
                {formik.errors.numberPhone && formik.touched.numberPhone && (
                  <span style={{ color: "red" }} className="text fs-13">
                    {formik.errors.numberPhone}
                  </span>
                )}
              </div>

              <div className="email">
                <Input
                  type="email"
                  className={
                    formik.errors.email && formik.touched.email
                      ? formik.errors.email
                      : undefined
                  }
                  name="email"
                  value={formik.values.email}
                  onChange={formik.handleChange}
                  placeholder="Email*"
                />
              </div>
              {formik.errors.email && formik.touched.email && (
                <span style={{ color: "red" }} className="text fs-13">
                  {formik.errors.email}
                </span>
              )}
              <div className="note">
                <Input
                  type="text"
                  className={
                    formik.errors.message && formik.touched.message
                      ? formik.errors.message
                      : undefined
                  }
                  name="message"
                  value={formik.values.message}
                  onChange={formik.handleChange}
                  placeholder="Lời nhắn*"
                />
                {formik.errors.message && formik.touched.message && (
                  <span style={{ color: "red" }} className="text fs-13">
                    {formik.errors.message}
                  </span>
                )}
              </div>

              <input
                value={"Gửi lời nhắn"}
                style={{
                  backgroundColor: "#2082ff",
                  width: "28%",
                  color: "white",
                  height: 45,
                  fontWeight: 600,
                  fontFamily: " Inter, sans-serif",
                  marginTop: 10,
                  marginBottom: 10,
                  borderRadius: 12,
                  padding: "3px 10px",

                  cursor: "pointer",
                }}
                type="submit"
                className="btn-submit"
              />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Section11;
