import React from 'react'
import StudentHeader from "../../components/StudentDashboardHeader.js";
import StudentProject from "../../components/StudentDashInstructions.js";
import Footer from "../../Shared components/Footer.js";

export default function StudentDashboardInstructions() {
  return (
    <div className= "student-dashboard-instructions">
      < StudentHeader />
      < StudentProject />
      < Footer />
    </div>
  )
}
