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
            <div className="blocks">
              <div className="left-box">
              <div className="arrow-circle" />
              <p4><i class="arrow-left"></i></p4>
              </div>
            <img
              src="/src-assets/StudentDashboard/videotutorial-screenshot.png"
              alt="project"
              className="video-screenshot"
              />
              <div className="right-box">
                <div className="arrow-circle" />
                <p4><i class="arrow-right"></i></p4>
              </div>
              </div>
          </div>
        </div>
      </div>
    </div>
  );
}
