import React from "react";
import Footer from "../components/Shared-components/Footer.js";
import StudentProfiles from "../components/TeacherDashboard/StudentProfiles";
import TeacherDashboardHeader from "../components/TeacherDashboardHeader";
import TeacherSidebar from "../components/TeacherSidebar";

export default function TeacherDashboardStudentProfiles() {
  return (
    //calling components

    <div>
      
      <TeacherDashboardHeader />
      <div className='studentProfilesetup'>
      <TeacherSidebar />
      <StudentProfiles />
      </div>
      
      <Footer />
    </div>
  );
}
