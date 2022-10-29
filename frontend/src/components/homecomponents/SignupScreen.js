import React from "react";
import "./SignupScreen.css";

function SignupScreen() {
  return (
    <div className="loginpage">
      <div className="loginStudents">
        <img
          className="loginImage"
          src="src-assets/LoginSignup/students.png"
          alt="animation"
        />
        <div className="loginheading">
          <h1>Students</h1>
        </div>
        <div className="loginButtonsContainer">
          <button className="loginbuttons">LOG IN</button>
          <button className="loginbuttons">SIGN UP</button>
        </div>
          <form action="mailto:surbhig@missionreadyhq.com" method="POST">
          <div>
          <input
              type="text"
              name="fullName"
              id="studentID"
              placeholder="Full Name"
              required
            />
            <br></br>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Email Address"
              required
            />
            <br></br>
            <input
              type="text"
              name="myName"
              id="myName"
              placeholder="Password"
              required
            />
            <br></br>
             <input
              type="text"
              name="myName"
              id="myName"
              placeholder="Confirm Password"
              required
            />
            </div>
            <br></br>
            <div className="buttonplaceholder">
            <button className="loginbutton">Login</button>
            </div>
          </form>
        
      </div>

      <div className="loginTeachers">
        <img
          className="loginImage"
          src="src-assets/LoginSignup/teachers.png"
          alt="animation"
        />
        <div className="loginheading">
          <h1>Teachers</h1>
        </div>
        <div className="loginButtonsContainer">
          <button className="loginbuttons">LOG IN</button>
          <button className="loginbuttons">SIGN UP</button>
        </div>
          <form action="mailto:surbhig@missionreadyhq.com" method="POST">
          <div>
          <input
              type="text"
              name="fullName"
              id="studentID"
              placeholder="Full Name"
              required
            />
            <br></br>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Email Address"
              required
            />
            <br></br>
            <input
              type="text"
              name="myName"
              id="myName"
              placeholder="Password"
              required
            />
            <br></br>
             <input
              type="text"
              name="myName"
              id="myName"
              placeholder="Confirm Password"
              required
            />
            </div>
            <br></br>
            <div className="buttonplaceholder">
            <button className="loginbutton">Login</button>
            </div>
          </form>
        
      </div>
    </div>
  );
}
export default SignupScreen;