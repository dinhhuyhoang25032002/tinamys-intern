import { MouseEventHandler } from "react";
import "./ButtonImage.scss";

type PropBtnDownload = {
  width?: number | string;
  height?: number | string;
  src: string;
  onClick?: MouseEventHandler;
  className?: string;
};
const ButtonDownload = ({ width, height, src, className }: PropBtnDownload) => {
  return (
    <button className="googleplay">
      <img
        alt="GooglePlay-Mys"
        src={src}
        className={className ? `image-contain ${className}` : "image-contain"}
        style={{ width: width, height: height }}
      />
    </button>
  );
};
export default ButtonDownload;
