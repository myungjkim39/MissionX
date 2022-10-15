import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import StudentProfile from "./pages/StudentProfile";
import TeacherProfile from "./pages/TeacherProfile";
import StudentProject from "./pages/StudentProject";
import StudentDashboard from "./pages/StudentDashboard";
import StudentDashboardLearningObjectives from "./pages/studentdashboard/StudentDashboardLearningObjectives";
import StudentDashboardInstructions from "./pages/studentdashboard/StudentDashboardInstructions";
import StudentDashboardVideoTutorial from "./pages/studentdashboard/StudentDashboardVideoTutorial";
import StudentDashboardMakeProject from "./pages/studentdashboard/StudentDashBoardMakeProject";
import TeacherDashboardProgressTracker from "./pages/TeacherDashboardProgressTracker";
import TeacherProjectLibrary from "./pages/TeacherProjectLibrary";
import TeacherDashboardStudentProfiles from "./pages/TeacherDashboardStudentProfiles";
import TeacherDashboardHelpRequests from "./pages/TeacherDashboardHelpRequests";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} /> 
          <Route path="/studentprofile" element={<StudentProfile />} /> 
          <Route path="/teacherprofile" element={<TeacherProfile />} /> 
          <Route path="/studentproject" element={<StudentProject />} /> 
          <Route path="/studentdashboard" element={<StudentDashboard />} /> 
          <Route path="/studentdashboad/learningobjectives" element={<StudentDashboardLearningObjectives />} /> 
          <Route path="/studentdashboad/instructions" element={<StudentDashboardInstructions />} /> 
          <Route path="/studentdashboad/videotutorial" element={<StudentDashboardVideoTutorial />} /> 
          <Route path="/studentdashboad/makeproject" element={<StudentDashboardMakeProject />} /> 
          <Route path="/teacherdashboard/progresstracker" element={<TeacherDashboardProgressTracker />} /> 
          <Route path="/teacherprojectlibrary" element={<TeacherProjectLibrary />} /> 
          <Route path="/teacherdashboard/studentprofiles" element={<TeacherDashboardStudentProfiles />} /> 
          <Route path="/teacherdashboard/helprequests" element={<TeacherDashboardHelpRequests />} /> 
          
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
