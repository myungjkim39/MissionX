import { useState } from 'react';
import React from "react";
import './StudentSidebar.css';
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
        <div className={isExpanded ? "Sidebar" : "Sidebar collapsed"}>
            
            <div className="sidebar-items">

        <div>
        <img src={RawiriFletcher} className="rawiri" alt="" />
        </div>
                
                <div className="item">
                    <img src={ProgressTracker} className="sidebar-icon" alt="" />
                    <span className="sidebar-text">PROGRESS TRACKER</span>
                </div>
                
                <div className="item">
                    <img src={StudentProfiles} className="sidebar-icon" alt="" />
                    <span className="sidebar-text">STUDENTS PROFILE</span>
                </div>


                <div className="item">
                                    {/* <link to="/HelpRequest"> */}
                    <img src={HelpRequest} className="sidebar-icon" alt="" />
                    <span className="sidebar-text">HELP REQUEST</span>
                {/* </link> */}
                    </div>
                    

             <div className="item">
                    <img src={ProjectSubmissions} className="sidebar-icon" alt="" />
                    <span className="sidebar-text">PROJECT SUBMISSIONS</span>
                </div>

                 <div className="item">
                    <img src={ProjectLibrary} className="sidebar-icon" alt="" />
                    <span className="sidebar-text">PROJECT LIBRARY</span>
                </div>

            <div className="pinkarrow-min">
                    <img src={ArrowLeft}
                        className={isExpanded ? "sidebar-pinkarrow" : "sidebar-pinkarrow collapsed"}
                        onClick={handleToggler}
                    alt="" />
                </div>
                
                <div className="bottom-options">

               <div className="user-profile">
                    <img src={UserProfile} className="profile-settings" alt="" /> <br></br>
                  <span className="sidebar-text">Profile</span>
                    </div>
                    
                <div className="user-profile">
                    <img src={Settings} className="profile-settings" alt="" /> <br></br>
                <span className="sidebar-text">Settings</span>
                    </div>

                    <div className="user-profile">
                        <img src={Logout} className="profile-settings" alt="" /> <br></br>
                        <span className="sidebar-text">Log out</span> 
                    </div>
           </div> 

</div>
 </div>
    );
}

