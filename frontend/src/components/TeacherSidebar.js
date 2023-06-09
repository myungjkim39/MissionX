import { useState } from 'react';
// import React from "react";
import './TeacherSidebar.css';
import JasminaSalvador from '../images/JasminaSalvador.png';
import ProgressTracker from "../images/progressTrackerSelected.png";
import StudentProfiles from "../images/helpRequestsSelected.png";
import HelpRequest from "../images/studentProfilesSelected.png";
import ProjectSubmissions from "../images/projectSubmissionsSelected.png";
import ProjectLibrary from "../images/projectLibrarySelected.png";
import ArrowLeft from "../images/arrowLeft.png";
import UserProfile from "../images/userprofile.png";
import Settings from "../images/settings.png";
import Logout from "../images/Logout.png";
import { NavLink, Link } from "react-router-dom";

function Sidebar() {
    const sidebarCollapsed = localStorage.getItem('sidebar-collapsed');
    const [isExpanded, setIsExpanded] = useState(sidebarCollapsed ? false : true);

    const handleToggler = () => {
        if (isExpanded) {
            setIsExpanded(false);
            localStorage.setItem('sidebar-collapsed', true);
            return;
        }
        setIsExpanded(true);
        localStorage.removeItem('sidebar-collapsed');

        console.log("clicked")
    };

    return (
      <div className={isExpanded ? "Sidebar" : "Sidebar collapsed"}>
        <div className="helprequest-sidebar-items">
          <div>
            <NavLink id="link" to={"/teacherprofile"}>
              <img
                src={JasminaSalvador}
                className="helprequest-jasmina"
                alt=""
              />
            </NavLink>
          </div>

            <div className="teacherdash-sidebar-item">
              <NavLink id="link" to={"/teacherdashboard/progresstracker"}>
                <img src={ProgressTracker} className="sidebar-icon" alt="" />
                <span className="sidebar-text">PROGRESS TRACKER</span>
              </NavLink>
            </div>

            <div className="teacherdash-sidebar-item">
              <NavLink id="link" to={"/teacherdashboard/studentprofiles"}>
                <img src={StudentProfiles} className="sidebar-icon" alt="" />
                <span className="sidebar-text">STUDENTS PROFILE</span>
              </NavLink>
            </div>

            <div className="teacherdash-sidebar-item">
              <NavLink id="link" to={"/teacherdashboard/helprequests"}>
                <img src={HelpRequest} className="sidebar-icon" alt="" />
                <span className="sidebar-text">HELP REQUEST</span>
              </NavLink>
            </div>

            <div className="teacherdash-sidebar-item">
              <img src={ProjectSubmissions} className="sidebar-icon" alt="" />
              <span className="sidebar-text">PROJECT SUBMISSIONS</span>
            </div>

            <div className="teacherdash-sidebar-item">
              <NavLink id="link" to={"/teacherprojectlibrary"}>
                <img src={ProjectLibrary} className="sidebar-icon" alt="" />
                <span className="sidebar-text">PROJECT LIBRARY</span>
              </NavLink>
            </div>

          <div className="pinkarrow-min">
            <img
              src={ArrowLeft}
              className={
                isExpanded ? "sidebar-pinkarrow" : "sidebar-pinkarrow collapsed"
              }
              onClick={handleToggler}
              alt=""
            />
          </div>

          <div className="bottom-options">
            <div className="user-profile">
              <NavLink id="link" to={"/teacherprofile"}>
                <img src={UserProfile} className="profile-settings" alt="" />{" "}
                <br></br>
                <span className="sidebar-text">Profile</span>
              </NavLink>
            </div>

            <div className="user-profile">
              <img src={Settings} className="profile-settings" alt="" />{" "}
              <br></br>
              <span className="sidebar-text">Settings</span>
            </div>

            <div className="user-profile">
              <NavLink id="link" end to={"/"}>
                <img src={Logout} className="profile-settings" alt="" />{" "}
                <br></br>
                <span className="sidebar-text">Log out</span>
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    );
}
export default Sidebar;
