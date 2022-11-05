import React from "react";
import StudentHeader from "../../components/StudentDashboard/StudentDashboardHeader.js";
import ScratchBlock from "../../components/StudentDashboard/StudentDashboardScratchBlock.js";
import Footer from "../../components/Shared-components/Footer.js";

export default function StudentDashboardLearningObjectives() {
  return (
    <div className="student-dashboard-learning-objectives">
      <StudentHeader />
      <ScratchBlock />
      <Footer />
    </div>
  );
}

