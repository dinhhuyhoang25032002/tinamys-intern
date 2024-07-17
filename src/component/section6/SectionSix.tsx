import SliderSection from "./SliderSection";
import "./SectionSix.scss";
import Data from "./DataSection6";
import TagSection6 from "./TagSection6";
const SectionSix = () => {
  return (
    <div className="body-section-6">
      <div className="content-section-6">
        <div className="group-tag">
          <div className="title-tag">
            <span className="text weg-1 benefit " >
              Ưu điểm nổi trội của MYS
            </span>
            <span className="text  content-benefit ">
              Với những ưu điểm và tính năng vượt trội của MYS, công nghệ và
              giải pháp của chúng tôi sẽ giúp bạn đạt được mục tiêu, tối ưu hoá
              năng suất của doanh nghiệp.
            </span>
          </div>
          {Data.map((item, index) => {
            return (
              <TagSection6
                icon={item.icon}
                title={item.title}
                content={item.content}
                key={index}
                style={{ width: "40%", height: "27%" }}
              />
            );
          })}
        </div>
        <div className="silder">
          <SliderSection Data={Data} />
        </div>
      </div>
    </div>
  );
};
export default SectionSix;
