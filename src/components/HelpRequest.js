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

function HelpRequest () {
          //   <HelpRequestBox name={student.name} image={student.profileImage} dateTime={student.dateTime} />
          // const HelpRequestBox = ({name, image, dateTime}) = {

  return (
    <div className="helprequest-mainContainer">
      <div className="help-request">
        <h3>Help Request</h3>

        <div className="reply-done">
        <div className="reply-tick">
          <img src={Reply} width="17px" alt="" />
          <h5>REPLY</h5></div>
        
        <div className="done-tick">
          <img src={Done} width="17px" alt="" />
            <h5>MARK AS DONE</h5></div>
          </div>


        <div className="help-container">


        {/* <div className="helpRequest-boxContainer">
          <input type="checkbox" />
          <div className="helprequest-secondContainer">
            <img src={profileImage} className="student-img" alt="" />
            <p className="helptext">{name} needs help with his project.</p>
            <div className="date-container">
              <div className="time-container">{dateTime}</div>
            </div>
          </div>
        </div> */}

          {/* studentDatabase.map(student = (
          <HelpRequestBox name={student.name} image={student.profileImage} dateTime={student.dateTime} />
          )) */}

           <input type="checkbox" />
          <div className="helprequest-secondContainer">
            <img src={Aiden} className="student-img" alt="" />
            <p className="helptext">AIDEN needs help with his project.</p>
            <div className="date-container">
              <div className="time-container"></div>
            </div>
          </div>
          <br></br>

           <input type="checkbox" />
          <div className="helprequest-secondContainer">
            <img src={Rawiri} className="student-img" alt="" />
            <p className="helptext">RAWIRI needs help with his project.</p>
            <div className="date-container">
              <div className="time-container"></div>
            </div>
          </div>
          <br></br>
            
           <input type="checkbox" />
          <div className="helprequest-secondContainer">
            <img src={Neveah} className="student-img" alt="" />
            <p className="helptext">NEVEAH needs help with his project.</p>
            <div className="date-container">
              <div className="time-container"></div>
            </div>
          </div><br></br> 
          
          <input type="checkbox" />
          <div className="helprequest-secondContainer">
            <img src={Javier} className="student-img" alt="" />
            <p className="helptext">JAVIER needs help with his project.</p>
            <div className="date-container">
              <div className="time-container">
              </div>
            </div>
          </div><br></br>
          
          <input type="checkbox" />
          <div className="helprequest-secondContainer">
            <img src={Tokio} className="student-img" alt="" />
            <p className="helptext">TOKIO needs help with his project.</p>
            <div className="date-container">
              <div className="time-container"></div>
            </div>
          </div>
            
        </div>
      </div>
    </div>




// const dateTime = (new Date()).toDateString();

// const studentDatabase = [
//   {name: "AIDEN", profileImage: Aiden, dateTime: dateTime },
//   {name: "RAWIRI", profileImage: Rawiri, dateTime: dateTime },
//   {name: "NEVEAH", profileImage: Neveah, dateTime: dateTime },
//   {name: "JAVIER", profileImage: Javier, dateTime: dateTime },
//   {name: "TOKIO", profileImage: Tokio, dateTime: dateTime}
// ]

//   const HelpRequest = () => {
//   return (
//     <div className="helprequest-mainContainer">
//       <h3>Help Request</h3>

//       <div className="help-container">
//         {
//           studentDatabase.map(student => (
//             <HelpRequestBox name={student.name} image={student.profileImage} dateTime={student.dateTime} />
//           ))
//         }
        // const HelpRequestBox = ({name, image, dateTime}) => {
        // <div className="helpRequest-boxContainer">
        //   <input type="checkbox" />
        //   <div className="helprequest-secondContainer">
        //     <img src={profileImage} className="student-img" alt="" />
        //     <p className="helptext">{name} needs help with his project.</p>
        //     <div className="date-container">
        //       <div className="time-container">{dateTime}</div>
        //     </div>
        //   </div>
        // </div>
        // }

//       </div>
//     </div>
//   );
//   const HelpRequestBox = ({ name, image, dateTime }) => {
//     return (
//       <div className="helpRequest-boxContainer">

//       </div>
//     )
//   }

    );
}
export default HelpRequest;
