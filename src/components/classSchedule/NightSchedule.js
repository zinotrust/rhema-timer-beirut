import React from "react";
import TimeTable from "./TimeTable";

// Friday Evening Beruit
const nightSchedule = [
  {
    time: "7.15 - 8.45pm",
    event: "Session 1",
  },
  {
    time: "8.45 - 9.00pm",
    event: "15 Minute break",
  },
  {
    time: "9.00 - 10.00pm",
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
