import React from "react";
import Header from "../../components/StudentDashboardHeader.js";
import ScratchBlock from "../../components/StudentDashboardScratchBlock.js";
import Footer from "../../Shared components/Footer.js";

export default function StudentDashboardLearningObjectives() {
  return (
    <div className="student-dashboard-learning-objectives">
      <Header />
      <ScratchBlock />
      <Footer />
    </div>
  );
}
