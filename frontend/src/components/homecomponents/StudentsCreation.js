import React from "react";
import "./StudentsCreation.css";
import { useState } from "react";

function StudentsCreation() {
  const [image, setPathImage] = useState("src-assets/Home/laptop1.png");
  function changeImage(newImagePath) {
    setPathImage(newImagePath);
  }

  return (
    <div className="underHeader">
      <div className="studentsCreate">
        <h2>What we offer</h2>
        <p className="studentCreationbox">
          The creative problem solving programme is series of digital creation
          projects aimed to encourage self-motivation and student agenccy,
          designed by New Zealand's leading IT industry experts and schools.
        </p>
        <h3 className="creationHeader">What will students create?</h3>
        <img
          className="creation"
          src="src-assets/Home/animation.png"
          alt="animation"
          onClick={()=>changeImage("src-assets/Home/laptop1.png")}
        />
        <img
          className="creation"
          src="src-assets/Home/chatbots.png"
          alt="animation"
          onClick={()=>changeImage("src-assets/Home/laptop2.png")}
        />
        <img
          className="creation"
          src="src-assets/Home/augreality.png"
          alt="animation"
          onClick={()=>changeImage("src-assets/Home/laptop3.png")}
        />
        <img
          className="creation"
          src="src-assets/Home/games.png"
          alt="animation"
          onClick={()=>changeImage("src-assets/Home/laptop4.png")}
        />
      </div>
      <div class="laptopScreens">
        <img id="pic" value="1" src={image} alt="animation" />
      </div>
    </div>
  );
}

export default StudentsCreation;
