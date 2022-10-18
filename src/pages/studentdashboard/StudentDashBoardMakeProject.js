import React from 'react'

import Header from "../../components/StudentDashboardHeader.js";
import Project from "../../components/StudentDashProjectContent.js";
import Footer from "../../Shared components/Footer.js";

export default function StudentDashBoardMakeProject() {
  return (
    <div className="student-dashboard-make-project">
      <Header />
      <Project />
      <Footer />
    </div>
  )
};
