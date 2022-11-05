import { useState } from "react";
import React from "react";
import "./StudentDashboardSidebar.css";
import RawiriFletcher from "../../images/RawiriFletcher.png";
import LearningObjectives from "../../images/src-assets/StudentDashboard/learningObjectives.png";
import Instructions from "../../images/src-assets/StudentDashboard/instructions.png";
import VideoTutorial from "../../images/src-assets/StudentDashboard/video.png";
import MakeProject from "../../images/src-assets/StudentDashboard/makeProject.png";
import SubmitProject from "../../images/src-assets/StudentDashboard/submitProject.png";
import BonusChallenge from "../../images/src-assets/StudentDashboard/bonusChallenge.png";
import TakeTheQuiz from "../../images/src-assets/StudentDashboard/takeTheQuiz.png";
import ArrowLeft from "../../images/arrowLeft.png";
import UserProfile from "../../images/userprofile.png";
import Settings from "../../images/settings.png";
import Logout from "../../images/Logout.png";
import { Link } from "react-router-dom";

export default function StudentSidebar() {
  const sidebarCollapsed = localStorage.getItem("sidebar-collapsed");
  const [isExpanded, setIsExpanded] = useState(sidebarCollapsed ? false : true);

  const handleToggler = () => {
    if (isExpanded) {
      setIsExpanded(false);
      localStorage.setItem("sidebar-collapsed", true);
      return;
    }
    setIsExpanded(true);
    localStorage.removeItem("sidebar-collapsed");

    console.log("clicked");
  };

  return (
    <div className={isExpanded ? "student-sidebar" : "Side-bar collapsed"}>
      <div className="sidebar-Items">
        <div>
          <img src={RawiriFletcher} className="rawiri" alt="" />
        </div>

        <div className="Item">
          <Link id="link" to={"/studentdashboard/learningobjectives"}>
            <img src={LearningObjectives} className="Sidebar-icons" alt="" />
            <span className="Sidebar-Text">LEARNING OBJECTIVES</span>
          </Link>
        </div>

        <div className="Item">
          <Link id="link" to={"/studentdashboard/instructions"}>
            <img src={Instructions} className="Sidebar-icons" alt="" />
            <span className="Sidebar-Text">INSTRUCTIONS</span>
          </Link>
        </div>

        <div className="Item">
          <Link id="link" to={"/studentdashboard/videotutorial"}>
            <img src={VideoTutorial} className="Sidebar-icons" alt="" />
            <span className="Sidebar-Text">VIDEO TUTORIAL</span>
          </Link>
        </div>

        <div className="Item">
          <Link id="link" to={"/studentdashboard/makeproject"}>
            <img src={MakeProject} className="Sidebar-icons" alt="" />
            <span className="Sidebar-Text">MAKE PROJECT</span>
          </Link>
        </div>

        <div className="Item">
          <img src={SubmitProject} className="Sidebar-icons" alt="" />
          <span className="Sidebar-Text">SUBMIT PROJECT</span>
        </div>

        <div className="Item">
          <img src={BonusChallenge} className="Sidebar-icons" alt="" />
          <span className="Sidebar-Text">BONUS CHALLENGE</span>
        </div>

        <div className="Item">
          <img src={TakeTheQuiz} className="Sidebar-icons" alt="" />
          <span className="Sidebar-Text">TAKE THE QUIZ</span>
        </div>

        <div className="arrow-min">
          <img
            src={ArrowLeft}
            className={isExpanded ? "Sidebar-arrow" : "Sidebar-arrow collapsed"}
            onClick={handleToggler}
            alt=""
          />
        </div>

        <div className="bot-options">
          <div className="User-Profile">
            <img src={UserProfile} className="Profile-setting" alt="" />{" "}
            <br></br>
            <span className="Sidebar-Text">Profile</span>
          </div>

          <div className="User-Profile">
            <img src={Settings} className="Profile-setting" alt="" /> <br></br>
            <span className="Sidebar-Text">Settings</span>
          </div>

          <div className="User-Profile">
            <img src={Logout} className="Profile-setting" alt="" /> <br></br>
            <span className="Sidebar-Text">Log out</span>
          </div>
        </div>
      </div>
    </div>
  );
}
