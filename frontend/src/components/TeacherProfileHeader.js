import "./TeacherProfileHeader.css";
import { Link } from "react-router-dom";

export default function Header(props) {
  return (
    <div className="teacher-profile-header">
      <Link to="/">
        <img
          src="/src-assets/NavBar/LevelUpWorks-white.png"
          alt="Level Up Logo"
          className="teacher-profile-headerlogo"
        />
        </Link>

      <div className="navbar-options">
        <Link to="/">
          <button className="teacher-profile-home">HOME</button>
          </Link>
        <button className="teacher-profile-projects">PROJECTS</button>
        <button className="teacher-profile-teachers">TEACHERS</button>
                </div>

      <div className="teacherprofile-flagsimage">
        <img src="/src-assets/NavBar/NZflag.png"
          alt="nzFlag"
          className="nzflag10" />

          <img
            src="/src-assets/NavBar/Maoriflag.png"
            alt="Maoriflag"
            className="maoriflag10"
        />
              <div className="teacherprofile-header-name">{props.teacherName}</div>

      </div>

    </div>
  );
}

