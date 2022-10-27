import React from 'react'
import "./Creation.css"

 function StudentsCreation() {
  return (
    <div className="studentsCreate">
      <h2>What we offer</h2>
      <br />
      <p>The creative problem solving programme is series of digital creation projects aimed to encourage self-motivation and student agenccy, designed by New Zealand's leading IT industry experts and schools.</p>
      <br />
      <br />
        <h3>What will students create?</h3>
        <img className = "creation"
            src='src-assets/Home/animation.png' alt="animation"/>
            <img className = "creation"
            src='src-assets/Home/chatbots.png' alt="animation"/>
            <img className = "creation"
            src='src-assets/Home/augreality.png' alt="animation"/>
            <img className = "creation"
            src='src-assets/Home/games.png' alt="animation"/>
        {/* <button className="create">GAMES</button>
        <button className="create">CHATBOTS</button>
        <button className="create">AUGMENTED REALITY</button> */}
        </div>
  )
}

export default StudentsCreation