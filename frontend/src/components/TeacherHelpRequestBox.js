import './TeacherHelpRequest.css';
import React, { useState, useEffect }  from 'react'
import Aiden from '../images/AidenAndrews.png'
import Rawiri from '../images/RawiriFletcher.png'
import Neveah from '../images/NeveahMachenry.png'
import Javier from '../images/JavierFuego.png'
import Tokio from '../images/TokioHan.png'
import Done from '../images/DoneTick.png'
import Reply from '../images/ReplyTick.png'


function TeacherHelpRequestBox(props) {
  return (
    <div className="helpRequest-boxContainer">
      <input type="checkbox" />
      <div className="helprequest-secondContainer">
        <img
          src={props.profileImage}
          className="student-img"
          alt=""
        />
        <p className="helptext">{props.name} needs help with his project.</p>
        <div className="date-container">
          <div className="time-container">{props.dateTime}</div>
        </div>
      </div>
    </div>
  );
}
export default TeacherHelpRequestBox;