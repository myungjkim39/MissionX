import React from "react";
import Navbar from "./Navbar.js";
import "./StudentDashboardScratchBlock.css";

export default function ScratchBlock() {
  return (
    <div className="outerbox">
      <Navbar />
      <div id="contentbox">
        <div id="innerbox">
          <div className="content">
            <h1>Explore Scrach blocks</h1>
            <p2>
              Learn the basic function of some basic scratch blocks such as
              “say,” “wait,” “go to” and “hide.”
            </p2>
            <div className="blocks">
              <div className="block1">
                Look Blocks
                <img
                  src="/projects/Project01-obj1.png"
                  alt="object1"
                  className="object1"
                />
              </div>
              <img
                src="/projects/Project01-obj2.png"
                alt="object2"
                className="object2"
              />

              <div className="block2">
                Look Blocks
                <img
                  src="/projects/Project01-obj3.png"
                  alt="object3"
                  className="object1"
                />
              </div>
              <img
                src="/projects/Project01-obj4.png"
                alt="object2"
                className="object3"
              />

              <div className="block3">
                Look Blocks
                <img
                  src="/projects/Project01-obj5.png"
                  alt="object5"
                  className="object1"
                />
              </div>
              <img
                src="/projects/Project01-obj6.png"
                alt="object2"
                className="object4"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
