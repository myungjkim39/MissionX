import React from "react";
import Sidebar from "./StudentDashboardSidebar";
import "./StudentDashboardScratchBlock.css";

export default function Project() {
  return (
    <div className="outerbox">
      <Sidebar />
      <div id="contentbox">
        <div id="innerbox">
          <div className="content">
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
