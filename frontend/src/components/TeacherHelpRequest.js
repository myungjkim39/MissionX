import "./TeacherHelpRequest.css";
import React, { useState, useEffect }  from 'react'
import Aiden from "../images/AidenAndrews.png";
import Rawiri from "../images/RawiriFletcher.png";
import Neveah from "../images/NeveahMachenry.png";
import Javier from "../images/JavierFuego.png";
import Tokio from "../images/TokioHan.png";
import Done from "../images/DoneTick.png";
import Reply from "../images/ReplyTick.png";
import TeacherHelpRequestBox from "./TeacherHelpRequestBox";
// import HelpRequest1 from './components/TeacherHelpRequestBox'

function TeacherHelpRequest(props) {
  const dateTime = new Date().toDateString();

  const studentDatabase = [
    {
      name: "AIDEN",
      profileImage: Aiden,
      dateTime: dateTime,
      done: false,
      id: 1,
    },
    {
      name: "RAWIRI",
      profileImage: Rawiri,
      dateTime: dateTime,
      done: false,
      id: 2,
    },
    {
      name: "NEVEAH",
      profileImage: Neveah,
      dateTime: dateTime,
      done: false,
      id: 3,
    },
    {
      name: "JAVIER",
      profileImage: Javier,
      dateTime: dateTime,
      done: false,
      id: 4,
    },
    {
      name: "TOKIO",
      profileImage: Tokio,
      dateTime: dateTime,
      done: false,
      id: 5,
    },
  ];
  const [db, setdb] = useState(studentDatabase);
  const [markasdone, setmarkasdone] = useState([]);
  useEffect(() => {
    console.log(markasdone)
  },[markasdone])
  
  function checkboxhelprequest(e) {
    console.log(e)
    if (e.target.checked === true) {
      setmarkasdone(prevIds => [...prevIds, e.target.id])
    }
    if (e.target.checked === false) { 
      const filtered = markasdone.filter(id => id !== e.target.id)
      setmarkasdone(filtered)
    }
  }
  function markDone() {
    console.log(markasdone);
    markasdone.forEach(helpId => {
      db.forEach((hr, index) => {
        if (hr.id === parseFloat(helpId)) {
          console.log(db[index])
          db[index].done = true
          setdb([...db])
        }
      })
    })
  }
  


  //   const [task, deleteTask] = useState({ date_created:'dateCreated', done:'done'})
  // useEffect(() => {
  //   fetch('http://localhost:4000/helprequest').then(res => res.json()).then(json => setTeacher(json[0])).catch(err => console.log(err))
  // }, [])

  // const [student, setStudent] = useState({ profile_pic:'StudentPic', name:'StudentName'})
  // useEffect(() => {
  //   fetch('http://localhost:4000/student').then(res => res.json()).then(json => setStudent(json[0])).catch(err => console.log(err))
  // }, [])

  console.log(props.profileImage);
  return (
    <div className="helprequest-mainContainer">
      <div className="help-request">
        <h3>HELP REQUEST</h3>

        <div className="reply-done">
          <div className="reply-tick">
            <img src={Reply} width="17px" alt="" />
            <h5>REPLY</h5>
          </div>

          <div className="done-tick">
              <><img src={Done} width="17px" alt="" />
                <h5 className="task">
                  <button
                    onClick={() => markDone()}
                    className="mark-as-done">MARK AS DONE</button>
                </h5>
              </>
          </div>
        </div>
        {db.map((student) => (
          !student.done && (
            <div className="helpRequest-boxContainer">
              <input type="checkbox" id={student.id} onChange={e => checkboxhelprequest(e)} />
              <TeacherHelpRequestBox
            name={student.name}
            profileImage={student.profileImage}
            dateTime={student.dateTime}
          />
            </div>
          )

        ))}
      </div>
    </div>
  );
}
export default TeacherHelpRequest;
