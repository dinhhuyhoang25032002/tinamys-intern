import { CSSProperties, MouseEventHandler, ReactNode, memo } from "react";
import "./BtnText.scss";
type PropBtnText = {
  width?: number | string;
  height?: number | string;
  title: ReactNode | string;
  style?: CSSProperties;
  type?: "submit" | "reset" | "button" | undefined;
  onClick?: MouseEventHandler<HTMLButtonElement> | undefined;

};

const BtnText = ({ style, title, type, onClick }: PropBtnText) => {
  //  console.log("check type: ", type);

  return (
    <>
      <button style={style} className="btn-text" type={type} onClick={onClick}
      >
        {title}
      </button>
    </>
  );
};
export default memo(BtnText);
