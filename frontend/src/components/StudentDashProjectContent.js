import React from "react";
import StudentSidebar from "./StudentDashboardSidebar";
import "./StudentDashboardScratchBlock.css";

export default function Project() {
  return (
    <div className="outer-box">
      <StudentSidebar />
      <div className="content-box">
        <div className="inner-box">
          <div className="student-content">
            <img
              src="/src-assets/StudentDashboard/makeProject-screenshot.png"
              alt="project"
              className="project-screenshot"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
