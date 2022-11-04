import React from 'react'
import StudentHeader from "../../components/StudentDashboard/StudentDashboardHeader.js"
import StudentProject from "../../components/StudentDashboard/StudentDashInstructions.js"
import Footer from "../../components/Shared-components/Footer.js"

export default function StudentDashboardInstructions() {
  return (
    <div className= "student-dashboard-instructions">
      < StudentHeader />
      < StudentProject />
      < Footer />
    </div>
  )
}
