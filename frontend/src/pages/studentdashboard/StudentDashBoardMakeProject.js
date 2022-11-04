import React from 'react'
import StudentHeader from "../../components/StudentDashboard/StudentDashboardHeader.js"
import Project from "../../components/StudentDashboard/StudentDashProjectContent.js"
import Footer from "../../components/Shared-components/Footer.js"

export default function StudentDashBoardMakeProject() {
  return (
    <div className="student-dashboard-make-project">
      <StudentHeader />
      <Project />
      <Footer />
    </div>
  )
};
