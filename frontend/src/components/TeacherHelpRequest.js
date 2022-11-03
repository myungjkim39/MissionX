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
    { name: "AIDEN", profileImage: Aiden, dateTime: dateTime, done: false },
    { name: "RAWIRI", profileImage: Rawiri, dateTime: dateTime, done: false },
    { name: "NEVEAH", profileImage: Neveah, dateTime: dateTime, done: false },
    { name: "JAVIER", profileImage: Javier, dateTime: dateTime, done: false },
    { name: "TOKIO", profileImage: Tokio, dateTime: dateTime, done: false },
  ];

  const [tasksArray, setTasksArray] = useState([1, 2, 3, 4, 5]);

  const deleteTaskFromArray = (index) => {
    // setTasksArray(tasksArray.filter((task) => task !== taskToDelete));
    let newStudentDatabase = studentDatabase.splice(0, index);
    let newTaskArray = tasksArray.splice(0, index);
  };

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
                  {/* {index + 1}. {task} */}
                  <button
                    onClick={() => deleteTaskFromArray()}
                    className="mark-as-done">MARK AS DONE</button>
                </h5>
              </>
          </div>
        </div>
        {studentDatabase.map((student) => (
          <TeacherHelpRequestBox
            name={student.name}
            profileImage={student.profileImage}
            dateTime={student.dateTime}
          />
        ))}
      </div>
    </div>
  );
}
export default TeacherHelpRequest;
