import React from "react";
import TimeTable from "./TimeTable";

const daySchedule = [
  {
    time: "9.15 - 10.30am",
    event: "Session 3",
  },
  {
    time: "10.30 - 10.45am",
    event: "15 Minute break",
  },
  {
    time: "10.45 - 12.00pm",
    event: "Session 4",
  },
  {
    time: "12.00 - 12.15pm",
    event: "15 Minute break",
  },
  {
    time: "12.15 - 1.30pm",
    event: "Session 5",
  },
  {
    time: "01.30 - 2.10pm",
    event: "40 Minute Lunch break",
  },
  {
    time: "02.10 - 2.15pm",
    event: "Announcements",
  },
  {
    time: "2.15 - 3.30pm",
    event: "Session 6",
  },
  {
    time: "3.30 - 3.45pm",
    event: "15 Minute Break",
  },
  {
    time: "3.45 - 5.00pm",
    event: "Session 7",
  },
  {
    time: "5.00 - 5.15pm",
    event: "15 Minute break",
  },
  {
    time: "5.15 - 6.30pm",
    event: "Session 8",
  },
];

const DaySchedule = ({ day }) => {
  return (
    <div>
      <h4>{day} Schedule</h4>
      <TimeTable data={daySchedule} />
    </div>
  );
};

export default DaySchedule;
