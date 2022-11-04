import React from 'react'
import StudentHeader from "../../components/StudentDashboardHeader.js"
import Project from "../../components/StudentDashProjectContent.js"
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
