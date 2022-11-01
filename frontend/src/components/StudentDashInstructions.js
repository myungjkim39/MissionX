import React from "react";
import StudentSidebar from "./StudentDashboardSidebar";
import "./StudentDashboardScratchBlock.css";

export default function StudentProject() {
  return (
    <div className="outer-box">
      <StudentSidebar />
      <div className="content-box">
        <div className="inner-box">
          <div className="student-content">

          </div>
        </div>
      </div>
    </div>
  );
}