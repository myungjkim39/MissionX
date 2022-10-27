
import "./TeacherDashboardHeader.css";

export default function Header() {
  return (
    <div className="header">
        <img
          src="/src-assets/NavBar/LevelUpWorks-blue.png"
          alt="Level Up Logo"
          className="logo"
        />

      <div className="right">
        <button className="take-screenshot"> Take Screenshot </button>
        <button className="help-centre"> Help Centre </button>
        <button className="more-projects"> More Projects </button>

        <div className="flagsimage">
          <img src="/src-assets/NavBar/NZflag.png" alt="nzFlag" className="nzflag" />

          <img
            src="/src-assets/NavBar/Maoriflag.png"
            alt="Maoriflag"
            className="maoriflag"
          />
        </div>
      </div>
    </div>
  );
}

