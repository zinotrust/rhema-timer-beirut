import React, { useContext, useEffect } from "react";
import { toast } from "react-toastify";
import DaySchedule from "../../components/classSchedule/DaySchedule";
import Heading from "../../components/heading/Heading";
import Timer from "../../components/timer/Timer";
import TimeContext from "../../context/timeContext";

const Saturday = () => {
  const { time } = useContext(TimeContext);

  useEffect(() => {
    let warn = new Audio("/warning.mp3");
    let final = new Audio("/final.mp3");

    switch (time) {
      // Start session 3
      case "9:15:00 AM":
        warn.play();
        toast.success("Start Session");
        break;
      case "10:20:00 AM":
        warn.play();
        toast.success("Warning Bell");
        break;
      case "10:30:00 AM":
        final.play();
        toast.success("Final Bell");
        break;
      // session 4
      case "10:45:00 AM":
        warn.play();
        toast.success("Break Over, Start Session");
        break;
      case "11:50:00 AM":
        warn.play();
        toast.success("Warning Bell");
        break;
      case "12:00:00 PM":
        final.play();
        toast.success("Final Bell");
        break;
      // session 5
      case "12:15:00 PM":
        warn.play();
        toast.success("Break Over, Start Session");
        break;
      case "1:20:00 PM":
        warn.play();
        toast.success("Warning Bell");
        break;
      case "1:30:00 PM":
        final.play();
        toast.success("Final Bell");
        break;
      // session 6
      case "2:30:00 PM":
        warn.play();
        toast.success("Break Over, Start Session");
        break;
      case "3:35:00 PM":
        warn.play();
        toast.success("Warning Bell");
        break;
      case "3:45:00 PM":
        final.play();
        toast.success("Final Bell");
        break;
      // session 7
      case "4:00:00 PM":
        warn.play();
        toast.success("Break Over, Start Session");
        break;
      case "5:05:00 PM":
        warn.play();
        toast.success("Warning Bell");
        break;
      case "5:15:00 PM":
        final.play();
        toast.success("Final Bell");
        break;
      // session 8
      case "5:30:00 PM":
        warn.play();
        toast.success("Break Over, Start Session");
        break;
      case "6:35:00 PM":
        warn.play();
        toast.success("Warning Bell");
        break;
      case "6:45:00 PM":
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
        The time is synced to the local time on this computer.
      </p>
      <div className="--flex-start --flex-dir-column">
        <Timer />
        <DaySchedule day={"Saturday"} />
      </div>
    </div>
  );
};

export default Saturday;
