
import "./TeacherDashboardHeader.css";

export default function Header() {
  return (
    <div className="teacher-dash-header">
        <img
          src="/src-assets/NavBar/LevelUpWorks-blue.png"
          alt="Level Up Logo"
          className="teacher-dashheader-logo"
        />

      <div className="teacher-dashheader-right">
        <button className="teacher-dashheader1-takescreenshot"> Take Screenshot </button>
        <button className="teacher-dashheader1-help-centre"> Help Centre </button>
        <button className="teacher-dashheader1-more-projects"> More Projects </button>

        <div className="teacher-dashheader-flagsimage">
          <img src="/src-assets/NavBar/NZflag.png"
            alt="nzFlag"
            className="teacher-dashheader-nzflag" />

          <img
            src="/src-assets/NavBar/Maoriflag.png"
            alt="Maoriflag"
            className="teacher-dashheader-maoriflag"
          />
        </div>
      </div>
    </div>
  );
}

