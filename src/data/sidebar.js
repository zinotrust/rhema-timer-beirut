import { FaTh } from "react-icons/fa";
import { BsAlarm, BsAlarmFill } from "react-icons/bs";

const menu = [
  {
    title: "Home",
    icon: <FaTh />,
    path: "/",
  },
  {
    title: "Friday Class",
    icon: <BsAlarmFill />,
    path: "/friday",
  },
  {
    title: "Saturday Class",
    icon: <BsAlarm />,
    path: "/saturday",
  },
  // {
  //   title: "Level 1 Weekend",
  //   icon: <BsAlarm />,
  //   childrens: [
  //     {
  //       title: "Friday",
  //       path: "/friday",
  //     },
  //     {
  //       title: "Saturday",
  //       path: "/saturday",
  //     },
  //   ],
  // },
  // {
  //   title: "Stop Watch",
  //   icon: <BsAlarm color="red" />,
  //   path: "/stop-watch",
  // },
];

export default menu;
