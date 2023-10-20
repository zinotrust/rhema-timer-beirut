import React, { useContext, useEffect } from "react";
import { toast } from "react-toastify";
import NightSchedule from "../../components/classSchedule/NightSchedule";
import Heading from "../../components/heading/Heading";
import Timer from "../../components/timer/Timer";
import TimeContext from "../../context/timeContext";

const Evening = () => {
  const { time } = useContext(TimeContext);

  useEffect(() => {
    let warn = new Audio("/warning.mp3");
    let final = new Audio("/final.mp3");

    switch (time) {
      // session 1
      case "7:15:00 PM":
        warn.play();
        toast.success("Start Session");
        break;
      case "8:35:00 PM":
        warn.play();
        toast.success("Warning Bell");
        break;
      case "8:45:00 PM":
        final.play();
        toast.success("Final Bell");
        break;
      // session 2
      case "9:00:00 PM":
        warn.play();
        toast.success("Start Session");
        break;
      case "9:50:00 PM":
        warn.play();
        toast.success("Warning Bell");
        break;
      case "10:00:00 PM":
        final.play();
        toast.success("Final Bell");
        break;
      // Default
      default:
        break;
    }
  }, [time]);
  return (
    <div className="--mt">
      <h4 className="--my">
        <b>NOTE:</b>Please keep this page open.
      </h4>
      <p className="--my">
        The time is synced to the local time on this computer..
      </p>
      <div className="--flex-start --flex-dir-column">
        <Timer />
        <NightSchedule day={"Friday"} />
      </div>
    </div>
  );
};

export default Evening;
