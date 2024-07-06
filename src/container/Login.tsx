import "./Login.scss";
import logoPage from "../assets/logo/logoPage.svg";
import { useState, useCallback, useMemo } from "react";
import BtnText from "../component/custom-btn/BtnText";
import logoF from "../assets/logo/f.png";
import logoG from "../assets/logo/g.png";
import { Link } from "react-router-dom";
import { ErrorMessage, useFormik } from "formik";
import * as Yup from "yup";

const Login = () => {
  const [isShow, setShow] = useState(false);
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },

    validationSchema: Yup.object({
      email: Yup.string()
        .email("Invalid Email")
        .required("You must fill in this section!"),
      password: Yup.string()
        .min(8, "Your password must be at least 8 character!")
        .max(29, "Your password must be under 29 character!"),
    }),

    onSubmit: (values) => {
      console.log("check data: ", values);
    },
  });
  const handleSubmit = useCallback(() => {
    formik.handleSubmit();
  }, []);

  return (
    <div className="container-login">
      <div className="body-login">
        <div className="content-login">
          <div className="form-login">
            <h1 className="text weg title1" style={{ margin: 0 }}>
              Đăng nhập
            </h1>
            <span
              className="text weg title2"
              style={{
                color: "#929395",
                fontSize: 14,
                marginTop: 12,
                marginBottom: 25,
              }}
            >
              Hoàn thành các thông tin chi tiết dưới đây
            </span>
            <form style={{ width: "100%" }}>
              <div className="input-info">
                <div className="fle-left wid-100">
                  <span className="text weg-1 fs-14 ">
                    Email hoặc tên tài khoản
                  </span>
                </div>

                <div className="wid-100 po-re flex-ce">
                  <input
                    type="email"
                    className={
                      formik.errors.email ? "form-inp error" : "form-inp"
                    }
                    name="email"
                    value={formik.values.email}
                    onChange={formik.handleChange}
                  />
                </div>
              </div>
              {formik.errors.email && formik.touched.email && (
                <span style={{ color: "red" }} className="text fs-13">
                  {formik.errors.email}
                </span>
              )}
              <div className="input-info">
                <div className="wid-100">
                  <span className="text weg-1 fs-14 ">Mật khẩu</span>
                </div>
                <div
                  className="po-re flex-ce wid-100"
                  style={{ height: "fit-content" }}
                >
                  <input
                    type={isShow === true ? "text" : "password"}
                    className={
                      formik.errors.password ? "form-inp error" : "form-inp "
                    }
                    name="password"
                    value={formik.values.password}
                    onChange={formik.handleChange}
                  />
                  <div
                    className="eye po-ab"
                    style={{
                      position: "absolute",
                      top: "32%",
                      right: "3%",
                    }}
                    onClick={() => setShow(!isShow)}
                  >
                    <i
                      className={
                        isShow === true
                          ? "fa-regular fa-eye"
                          : "fa-regular fa-eye-slash"
                      }
                      style={{
                        color: "#929395",
                        cursor: "pointer",
                        fontSize: 13,
                      }}
                    ></i>
                  </div>
                </div>
              </div>
              {formik.errors.password && formik.touched.password && (
                <span style={{ color: "red" }} className="text  fs-13">
                
                  {formik.errors.password}
                </span>
              )}
              <div className="forgotPass">
                <span
                  className="text weg fs-14"
                  style={{
                    opacity: 0.8,
                    marginBottom: "auto",
                    marginTop: "auto",
                    cursor: "pointer",
                  }}
                >
                  Quên mật khẩu?
                </span>
              </div>

              <input
                value={"Đăng nhập"}
                style={{
                  backgroundColor: "#2082ff",
                  width: "100%",
                  color: "white",
                  height: 45,
                  fontWeight: 600,
                  fontFamily: " Inter, sans-serif",
                  marginTop: 10,
                  marginBottom: 10,
                  borderRadius: 7,
                  border: 1,
                  borderBlockColor: "#d7d7d7",
                  cursor: "pointer",
                }}
                type="button"
                className="btn-submit"
                onClick={() => handleSubmit()}
              />
            </form>
            <div className="btn-container">
              <BtnText
                title={
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <img
                      alt="logo-google"
                      src={logoG}
                      style={{
                        objectFit: "contain",
                        imageRendering: "pixelated",
                      }}
                    />
                    <span className="text weg" style={{ marginLeft: 10 }}>
                      Đăng nhập với Google
                    </span>
                  </div>
                }
                style={{
                  width: "100%",
                  height: 45,
                  backgroundColor: "white",
                  marginTop: 10,
                  marginBottom: 10,
                }}
                type="button"
              />
              <BtnText
                title={
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <img
                      alt="logo-google"
                      src={logoF}
                      width={19}
                      height={21}
                      style={{
                        objectFit: "cover",
                        imageRendering: "pixelated",
                      }}
                    />
                    <span className="text weg" style={{ marginLeft: 10 }}>
                      Đăng nhập với Facebook
                    </span>
                  </div>
                }
                style={{
                  width: "100%",
                  height: 45,
                  backgroundColor: "white",
                  marginTop: 10,
                  marginBottom: 10,
                }}
                type="button"
              />
            </div>

            <span className="text fs-14">
              Bạn chưa có tài khoản?
              <span
                className="text weg"
                style={{ opacity: 0.8, cursor: "pointer" }}
              >
                Đăng kí ngay
              </span>
            </span>
          </div>
          <div className="slogan-title text ">
            <span>Mapping Your</span> <span>Success</span>
          </div>
        </div>
      </div>
      <div className="logo">
        <Link to={"/"}>
          <img
            alt="logo-page"
            src={logoPage}
            width={100}
            height={44}
            style={{ cursor: "pointer" }}
          />
        </Link>
      </div>
      <div className="license">
        <span className="text weg fs-14">Powered by Tinasoft</span>

        <span className="text weg fs-14">
          <a
            href="https://tinasoft.io/vi/"
            style={{ textDecoration: "none", color: "#60abf9" }}
          >
            <i className="fa-regular fa-copyright"></i> 2023 TINASOFT VIỆT NAM
          </a>
        </span>
      </div>
    </div>
  );
};
export default Login;
