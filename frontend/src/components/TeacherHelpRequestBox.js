import './TeacherHelpRequest.css';

function TeacherHelpRequestBox(props) {
  return (
    <div className="helpRequest-boxContainer">
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