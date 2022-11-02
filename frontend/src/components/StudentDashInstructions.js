import React from "react";
import StudentSidebar from "./StudentDashboardSidebar";
import "./StudentDashboardScratchBlock.css";

export default function StudentProject() {
  return (
    <div className="outer-box">
      <StudentSidebar />
      <div className="content-box">
        <div className="inner-box">
          <div className="student-content">
            
            <b>1. Join Scratch </b>
            <p>If you haven't used Scratch before, you will need to join Scratch first.</p>
            <p>Go to https://scratch.mit.edu. Click on Join Scratch.</p>
            <img src= "/public-images/projects/Project01-instructions.png" alt= "instructions"/>
            <p>Follow the instructions to join. You will need a username and a password that you will remember. If possible,</p>
            <p>you should also verify your email address so that you can Share projects later. Ask your teacher to help with</p>
            <p>this step if you don't have an email address, or if you are not sure what to do.</p>

          </div>
        </div>
      </div>
    </div>
  );
}