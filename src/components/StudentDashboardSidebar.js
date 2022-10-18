import { useState } from 'react';
import React from "react";
import './StudentDashboardSidebar.css';
import RawiriFletcher from '../images/RawiriFletcher.png';
import ProgressTracker from "../images/progressTrackerSelected.png";
import StudentProfiles from "../images/helpRequestsSelected.png";
import HelpRequest from "../images/studentProfilesSelected.png";
import ProjectSubmissions from "../images/projectSubmissionsSelected.png";
import ProjectLibrary from "../images/projectLibrarySelected.png";
import ArrowLeft from "../images/arrowLeft.png";
import UserProfile from "../images/userprofile.png";
import Settings from "../images/settings.png";
import Logout from "../images/Logout.png";

export default function StudentSidebar() {
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
        <div className={isExpanded ? "student-sidebar" : "Side-bar collapsed"}>
            
            <div className="sidebar-Items">

        <div>
        <img src={RawiriFletcher} className="rawiri" alt="" />
        </div>
                
                <div className="Item">
                    <img src={ProgressTracker} className="Sidebar-icons" alt="" />
                    <span className="Sidebar-Text">PROGRESS TRACKER</span>
                </div>
                
                <div className="Item">
                    <img src={StudentProfiles} className="Sidebar-icons" alt="" />
                    <span className="Sidebar-Text">STUDENTS PROFILE</span>
                </div>


                <div className="Item">
                                    {/* <link to="/HelpRequest"> */}
                    <img src={HelpRequest} className="Sidebar-icons" alt="" />
                    <span className="Sidebar-Text">HELP REQUEST</span>
                {/* </link> */}
                    </div>
                    

             <div className="Item">
                    <img src={ProjectSubmissions} className="Sidebar-icons" alt="" />
                    <span className="Sidebar-Text">PROJECT SUBMISSIONS</span>
                </div>

                 <div className="Item">
                    <img src={ProjectLibrary} className="Sidebar-icons" alt="" />
                    <span className="Sidebar-Text">PROJECT LIBRARY</span>
                </div>

            <div className="arrow-min">
                    <img src={ArrowLeft}
                        className={isExpanded ? "Sidebar-arrow" : "Sidebar-arrow collapsed"}
                        onClick={handleToggler}
                    alt="" />
                </div>
                
                <div className="bot-options">

               <div className="User-Profile">
                    <img src={UserProfile} className="Profile-setting" alt="" /> <br></br>
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

