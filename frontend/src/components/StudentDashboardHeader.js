import "./StudentDashboardHeader.css";

export default function StudentHeader() {
  return (
    <div className="student-header">
      <div className="student-left">
        <img
          src="/src-assets/NavBar/LevelUpWorks-blue.png"
          alt="Level Up Logo"
          className="student-logo"
        />

        <div className="projectName">
          <h3 className="h3">PROJECT</h3>
          <p className="p">Introduction</p>
        </div>
      </div>

      <div className="student-center">

      <div className="student-circle">1</div>

      <div className="student-mini-circle"></div>
      <div className="student-mini-circle"></div>
      <div className="student-mini-circle"></div>
      <div className="student-mini-circle"></div>
      <div className="student-mini-circle"></div>
      <div className="student-mini-circle"></div>
      <div className="student-mini-circle"></div>
      <div className="student-mini-circle"></div>
      <div className="student-mini-circle"></div>
      <div className="student-mini-circle"></div>
      <div className="student-mini-circle"></div>
      <div className="student-mini-circle"></div>
      <div className="student-mini-circle"></div>
      <div className="student-mini-circle"></div>
      </div>

      <div className="student-right">
        <button className="student-screen-btn"> Take Screenshot </button>
        <button className="student-help-btn"> Ask Teacher for help </button>
        <button className="student-projects-btn"> More Projects </button>

        <div className="flag-images">
          <img src="/src-assets/NavBar/NZflag.png" alt="student-nz-Flag" className="nzflag" />

          <img
            src="/src-assets/NavBar/Maoriflag.png"
            alt="Maoriflag"
            className="student-maori-flag"
          />
        </div>
      </div>
    </div>
  );
}

