import React from 'react'
import Sidebar from '../components/TeacherSidebar.js';
import TeacherNavbar from '../components/TeacherDashboardHeader.js';
import HelpRequest from '../components/TeacherHelpRequest.js';
import TeacherProfileViewer from '../components/TeacherProfileViewer.js';
import Footer from '../Shared components/Footer';

export default function TeacherHelpRequest() {
  return (
    <div>
      <div className="teacher-dashboard-help-request">
        
              <div className="Dash-header">
                  <TeacherNavbar />

              </div> 
        {/* <div className="content-container"> */}

          <Sidebar />


                  <HelpRequest />
                  {/* </div> */}
              
              <Footer/>
        
                      {/* <div className="Teacher-Profile">
                  <TeacherProfileViewer />
              </div> */}

          </div>

    </div>
  )
}

