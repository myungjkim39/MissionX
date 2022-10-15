import "./StudentDashboardHeader.css";

export default function Header() {
  return (
    <div className="header">
      <div className="left">
        <img
          src="/src-assets/NavBar/LevelUpWorks-blue.png"
          alt="Level Up Logo"
          className="logo"
        />

        <div className="projectName">
          <h3 className="h3">PROJECT</h3>
          <p className="p">Introduction</p>
        </div>
      </div>

      <div className="center">

      <div className="circle">1</div>

      <div className="mini-circle"></div>
      <div className="mini-circle"></div>
      <div className="mini-circle"></div>
      <div className="mini-circle"></div>
      <div className="mini-circle"></div>
      <div className="mini-circle"></div>
      <div className="mini-circle"></div>
      <div className="mini-circle"></div>
      <div className="mini-circle"></div>
      <div className="mini-circle"></div>
      <div className="mini-circle"></div>
      <div className="mini-circle"></div>
      <div className="mini-circle"></div>
      <div className="mini-circle"></div>
      </div>

      <div className="right">
        <button className="screen-btn"> Take Screenshot </button>
        <button className="help-btn"> Ask Teacher for help </button>
        <button className="projects-btn"> More Projects </button>

        <div className="flagimages">
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

