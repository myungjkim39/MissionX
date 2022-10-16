import React from "react";
import ProgressCircles from "./ProgressCircles";
import "./StudentReco.css";

export default function StudentReco(props) {
  const CompletedStatement = "Projects completed";
  return (
    <div className="progresstrackerWhite">
      <div className="left">
        <div className="progressTrackerName">{props.student}</div>
        <div className="progressTrackerCompletedPojects">
          {CompletedStatement}
        </div>
      </div>
      <div className="right">
        <ProgressCircles info={props.levels} />
      </div>
    </div>
  );
}
