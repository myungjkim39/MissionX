import './HelpRequest.css';
import React, { useState }  from 'react'
import Aiden from '../images/AidenAndrews.png'
import Rawiri from '../images/RawiriFletcher.png'
import Neveah from '../images/NeveahMachenry.png'
import Javier from '../images/JavierFuego.png'
import Tokio from '../images/TokioHan.png'
import Done from '../images/DoneTick.png'
import Reply from '../images/ReplyTick.png'

const dateTime = (new Date()).toDateString();

const studentDatabase = [
  {name: "AIDEN", profileImage: Aiden, dateTime: dateTime },
  {name: "RAWIRI", profileImage: Rawiri, dateTime: dateTime },
  {name: "NEVEAH", profileImage: Neveah, dateTime: dateTime },
  {name: "JAVIER", profileImage: Javier, dateTime: dateTime },
  {name: "TOKIO", profileImage: Tokio, dateTime: dateTime}
]

function HelpRequestBox(props) {
  console.log(props.profileImage)
  return (
      <div className="helpRequest-boxContainer">
          <input type="checkbox" />
          <div className="helprequest-secondContainer">
            <img src={props.profileImage} className="student-img" alt="" />
            <p className="helptext">{props.name} needs help with his project.</p>
            <div className="date-container">
              <div className="time-container">{dateTime}</div>
            </div>
          </div>
        </div> 
  );
}

function HelpRequest () {
  return (
    <div className="helprequest-mainContainer">
      <div className="help-request">
        <h3>HELP REQUEST</h3>

        <div className="reply-done">
        <div className="reply-tick">
          <img src={Reply} width="17px" alt="" />
          <h5>REPLY</h5></div>
        
        <div className="done-tick">
          <img src={Done} width="17px" alt="" />
            <h5>MARK AS DONE</h5></div>
          </div>


        <div className="help-container">

          {
            studentDatabase.map(student => (
              <HelpRequestBox name={student.name} profileImage={student.profileImage} dateTime={student.dateTime} />
            ))}
 
      </div>
      </div>
      </div>

    );
}
export default HelpRequest;
