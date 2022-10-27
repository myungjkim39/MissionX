import React from "react";
import Header from "../../components/StudentDashboardHeader.js";
import VideoTutorial from "../../components/StudentDashVideoTutorial.js";
import Footer from "../../Shared components/Footer.js";
export default function StudentDashboardVideoTutorial() {
  return (
    <div className="StudentDashboardVideoTutorial">
      <Header />
      <VideoTutorial />
      <Footer />
    </div>
  );
}
