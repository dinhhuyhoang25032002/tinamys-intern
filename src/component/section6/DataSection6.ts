import icon1 from "../../assets/icon/easy.svg";
import icon2 from "../../assets/icon/smartphone.svg";
import icon3 from "../../assets/icon/reduce-cost.svg";
import icon4 from "../../assets/icon/target.svg";
import icon5 from "../../assets/icon/artificial-intelligence.svg";
import { ReactNode } from "react";

type item = {
  icon?: string;
  title: string;
  content: string | ReactNode;
};
const Data: Array<item> = [
  {
    icon: icon1,
    title: "Dễ sử dụng và tiện lợi và tiết kiệm thời gian",
    content:
      "Giao diện đơn giản và thân thiện, giúp người dùng dễ dàng sử dụng và tiết kiệm thời gian",
  },
  {
    icon: icon2,
    title: "Hỗ trợ đa nền tảng",
    content: "Ứng dụng hiện có mặt trên iOS, Android và Website",
  },
  {
    icon: icon3,
    title: "Chi phí thấp",
    content: "Cho phép người dùng sử dụng miễn phí các tính năng cơ bản",
  },
  {
    icon: icon4,
    title: "Hiệu quả",
    content: "Giúp tăng hiệu suất công việc và đưa ra quyết định chính xác",
  },
  {
    icon: icon5,
    title: "Hỗ trợ công nghệ AI",
    content:
      "Người dùng sử dụng ứng dụng được hỗ trợ bởi công nghệ thông minh AI",
  },
];
export default Data;
