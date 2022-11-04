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
        // console.log(objectiveData);

        setObjectiveHtml(objectiveData);
      });
  };

  useEffect(() => getObjectives(), []);

  return (
    <div className="outer-box">
      <StudentSidebar />
      <div dangerouslySetInnerHTML={{ __html: objectiveHtml }} />

      {/* Inserted into Database */}

      {/* <div style = "display: flex; width: 95%; height: 70vh; margin-left: 2vw;">
                        <div style = "display: flex; flex-direction: column; border-radius: 30px; width: 80vw; background-color: #ffffff80; align-items: center;">
          <div style = "font-style: nunito, bold; color: #707070; opacity: 1; justify-content: center; text-align: center; line-height: 45px;">
                <h1 style = "font-size: 24px;">Explore Scratch blocks</h1>
            <p2 style = "font-size: 16px;"> 
              Learn the basic function of some basic scratch blocks such as
              “say,” “wait,” “go to” and “hide.”</p2>
    
            <div style = "display: flex; flex-direction: row; align-items: flex-start; justify-content: flex-start; margin-right: 50px; margin-left: 120px">
              <div style= "display: flex; flex-direction: column; margin-right: 25px; font-style: nunito, bold; font-size: 18px;">
                Look Blocks
                <img src="/public-images/projects/Project01-obj1.png" alt="object1" width: "180px" height: "400px" style = "display: flex; flex-direction: column;"></img>
              </div>
              <img src="/public-images/projects/Project01-obj2.png" alt="object2" width: "160px" height "100px" style= "display: flex; flex-direction: column; margin-top: 50px;"></img>

              <div style = "display: flex; flex-direction: column; margin-left: 100px; margin-right: 25px; font-style: nunito, bold; font-size: 18px;">
                Control Blocks
                <img src="/public-images/projects/Project01-obj3.png" alt="object3" width: "143px" height: "48px" style= "display: flex; flex-direction: column;"></img>
              </div>
              <img src="/public-images/projects/Project01-obj4.png" alt="object4" width: "200px" height: "80px" style= "display: flex; flex-direction: column; margin-top: 50px;"></img>

              <div style = "display: flex; flex-direction: column; margin-left: 90px; margin-right: 25px; font-style: nunito, bold; font-size: 18px;">
                Motion Blocks
                <img src="/public-images/projects/Project01-obj5.png" alt="object5" width: "180px" height: "400px"></img>
              </div>
              <img src="/public-images/projects/Project01-obj6.png" alt="object6" width: "200px" height: "80px" style= "display: flex; flex-direction: column; margin-top: 50px;"></img>
         </div>
          </div>
        </div>
      </div> */}
    </div>
  );
}
