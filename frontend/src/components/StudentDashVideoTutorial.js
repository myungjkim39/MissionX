import React from "react";
import Sidebar from "./StudentDashboardSidebar";
import "./StudentDashboardScratchBlock.css";
import { useState, useEffect } from "react";

export default function VideoTutorial() {
  const [videoLink, setVideoLink] = useState([]);

  const getVideoLink = () => {
    fetch("http://localhost:4000/studentdashboard/video")
      .then((res) => res.json())

      .then((videoLinkData) => {
        //console.log(StudentProfileData);

        setVideoLink(videoLinkData[0].video);
      });
  };

  useEffect(() => getVideoLink());

  return (
    <div className="outerbox">
      <Sidebar />
      <div id="contentbox">
        <div id="innerbox">
          <div className="content">
            <div className="blocks">
              <div className="left-box">
                <div className="arrow-circle" />
                <p4>
                  <i class="arrow-left"></i>
                </p4>
              </div>
              <iframe
                src={videoLink}
                width="640"
                height="400"
                frameborder="0"
                allow="autoplay; fullscreen; picture-in-picture"
                allowfullscreen
              ></iframe>
              <p>
                <a href="https://vimeo.com/65583694"></a>
                <a href="https://vimeo.com/scratchedteam"></a>
                <a href="https://vimeo.com"></a>.
              </p>
              <div className="right-box">
                <div className="arrow-circle" />
                <p4>
                  <i class="arrow-right"></i>
                </p4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
