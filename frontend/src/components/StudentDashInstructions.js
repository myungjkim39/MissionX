import React from "react";
import StudentSidebar from "./StudentDashboardSidebar";
import "./StudentDashboardScratchBlock.css";
import { useState, useEffect } from "react";

export default function StudentProject() {
  const [instructionHtml, setInstructionHtml] = useState([]);

  const getInstructionLink = () => {
    fetch("http://localhost:4000/studentdashboard/instructions")
      .then((res) => res.json())

      .then((instructionData) => {
        // console.log(instructionData);

        setInstructionHtml(instructionData);
      });
  };

  useEffect(() => getInstructionLink(), []);

  return (
    <div className="outer-box">
      <StudentSidebar />
      <div className="content-box">
        <div className="inner-box">
          <div className="student-inst-content">
            <div className="instructions-content">
            <div dangerouslySetInnerHTML={{ __html: instructionHtml }} />
              {/* Inserted into Database */}
              {/* <div className="join-scratch">
                <h1>1. Join Scratch </h1>
              </div>
              <div className="inst-content">
                <p>
                  If you haven't used Scratch before, you will need to join
                  Scratch first. <br /> <br /> Go to https://scratch.mit.edu.
                  Click on Join Scratch.
                </p>
              </div>
              <br /> <br />
              <img
                src="/public-images/projects/Project01-instructions.png"
                alt="instructions"
                width="931px"
                height="244px"
              />
              <br /> <br />
              <div className="inst-content">
                <p>
                  Follow the instructions to join. You will need a username and
                  a password that you will remember. If possible, you should
                  also verify your email address so that you can Share projects
                  later. Ask your teacher to help with this step if you don't
                  have an email address, or if you are not sure what to do.
                </p>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
