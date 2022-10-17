import React from 'react'
import Sidebar from '../components/TeacherSidebar.js';
import TeacherNavbar from '../components/DashboardHeader.js';
import HelpRequest from '../components/HelpRequest.js';
import TeacherProfileViewer from '../components/TeacherProfileViewer.js';

export default function TeacherHelpRequest() {
  return (
    <div>
          <div className="teacher-dashboard-help-request">

              {/* <div className="Dash-header">
                  <TeacherNavbar />

              </div> */}

              <div className="Teacher-Sidebar">
                  <Sidebar />
              </div>

              <div className="Help-Request">
                  <HelpRequest />
        </div>
        
                      {/* <div className="Teacher-Profile">
                  <TeacherProfileViewer />
              </div> */}

          </div>

    </div>
  )
}

