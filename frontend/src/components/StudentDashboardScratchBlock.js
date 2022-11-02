import React from "react";
import StudentSidebar from "./StudentDashboardSidebar";
import "./StudentDashboardScratchBlock.css";
import { useState, useEffect } from "react";

export default function ScratchBlock() {
  const [objectiveHtml, setObjectiveHtml] = useState([]);

  const getObjectives = () => {
    fetch("http://localhost:4000/studentdashboard/objectives")
      .then((res) => res.json())

      .then((objectiveData) => {
        console.log(objectiveData);

        setObjectiveHtml(objectiveData);
      });
  };

  useEffect(() => getObjectives(), []);

  return (
    <div className="outer-box">
      <StudentSidebar />
      <div dangerouslySetInnerHTML={{ __html: objectiveHtml }} />

      {/* Inserted into Database */}

      {/* <div className="content-box">
        <div className="inner-box">
          <div className= "student-content">
            <h1>Explore Scratch blocks</h1>
            <p2>
              Learn the basic function of some basic scratch blocks such as
              “say,” “wait,” “go to” and “hide.”
            </p2>
            <br />
            <div className="blocks">
              <div className="block1">
                Look Blocks
                <img
                  src="/public-images/projects/Project01-obj1.png"
                  alt="object1"
                  className="object1"
                />
              </div>
              <img
                src="/public-images/projects/Project01-obj2.png"
                alt="object2"
                className="object2"
              />

              <div className="block2">
                Look Blocks
                <img
                  src="/public-images/projects/Project01-obj3.png"
                  alt="object3"
                  className="object1"
                />
              </div>
              <img
                src="/public-images/projects/Project01-obj4.png"
                alt="object2"
                className="object3"
              />

              <div className="block3">
                Look Blocks
                <img
                  src="/public-images/projects/Project01-obj5.png"
                  alt="object5"
                  className="object1"
                />
              </div>
              <img
                src="/public-images/projects/Project01-obj6.png"
                alt="object2"
                className="object4"
              />
            </div>
          </div>
        </div>
      </div> */}
    </div>
  );
}
