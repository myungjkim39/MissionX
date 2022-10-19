import React from "react";
import Sidebar from "./StudentDashboardSidebar";
import "./StudentDashboardScratchBlock.css";

export default function VideoTutorial() {
  return (
    <div className="outerbox">
      <Sidebar />
      <div id="contentbox">
        <div id="innerbox">
          <div className="content">
            <img
              src="/src-assets/StudentDashboard/videotutorial-screenshot.png"
              alt="project"
              className="video-screenshot"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
