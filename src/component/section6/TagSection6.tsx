import { CSSProperties, ReactNode } from "react";
import "./TagSection6.scss";
type PropTagSection = {
  icon?: string;
  title?: string;
  content: string | ReactNode;
  style?: CSSProperties | undefined;
};
const TagSection6 = ({ icon, title, content, style }: PropTagSection) => {
  return (
    <div className="container-tag" style={style}>
      {icon && <img src={icon} className="icon-secton-6" />}
      <div className="content-tag">
        <h1 className="text weg  title">{title}</h1>
        <div className="text  content-feeback">{content}</div>
      </div>
    </div>
  );
};
export default TagSection6;
