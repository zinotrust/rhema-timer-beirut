import React from "react";
import TimeTable from "./TimeTable";

const nightSchedule = [
  {
    time: "7.15 - 8.30pm",
    event: "Session 1",
  },
  {
    time: "8.30 - 8.45pm",
    event: "15 Minute break",
  },
  {
    time: "8.45 - 10.00pm",
    event: "Session 2",
  },
];

const NightSchedule = ({ day }) => {
  return (
    <div>
      <h4>{day} Schedule</h4>
      <TimeTable data={nightSchedule} />
    </div>
  );
};

export default NightSchedule;
