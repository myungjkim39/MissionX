import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import StudentProfile from "./pages/StudentProfile";
import TeacherProfile from "./pages/TeacherProfile";
import StudentProject from "./pages/StudentProject";
import StudentDashboard from "./pages/StudentDashboard";
import StudentDashboardLearningObjectives from "./pages/StudentDashboard/StudentDashboardLearningObjectives";
import StudentDashboardInstructions from "./pages/StudentDashboard/StudentDashboardInstructions";
import StudentDashboardVideoTutorial from "./pages/StudentDashboard/StudentDashboardVideoTutorial";
import StudentDashboardMakeProject from "./pages/StudentDashboard/StudentDashBoardMakeProject";
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
          <Route path="/login" element={<Login />} /> 
          <Route path="/signup" element={<Signup />} /> 
          <Route path="/studentprofile" element={<StudentProfile />} /> 
          <Route path="/teacherprofile" element={<TeacherProfile />} /> 
          <Route path="/studentproject" element={<StudentProject />} /> 
          <Route path="/studentdashboard" element={<StudentDashboard />} /> 
          <Route path="/studentdashboard/learningobjectives" element={<StudentDashboardLearningObjectives />} /> 
          <Route path="/studentdashboard/instructions" element={<StudentDashboardInstructions />} /> 
          <Route path="/studentdashboard/videotutorial" element={<StudentDashboardVideoTutorial />} /> 
          <Route path="/studentdashboard/makeproject" element={<StudentDashboardMakeProject />} /> 
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


