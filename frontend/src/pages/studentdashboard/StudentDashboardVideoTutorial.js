import React from "react";
import StudentHeader from "../../components/StudentDashboard/StudentDashboardHeader.js";
import VideoTutorial from "../../components/StudentDashboard/StudentDashVideoTutorial.js";
import Footer from "../../components/Shared-components/Footer.js";
export default function StudentDashboardVideoTutorial() {
  return (
    <div className="StudentDashboardVideoTutorial">
      <StudentHeader />
      <VideoTutorial />
      <Footer />
    </div>
  );
}
