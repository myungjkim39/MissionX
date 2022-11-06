import React from "react";
import "./SignupScreen.css";
import { Link } from "react-router-dom";

function SignupScreen() {
  function signupTeacher(event) {
    event.preventDefault();
    const name = document.getElementById("teachersName").value;
    const email = document.getElementById("teachersEmail").value;
    const password = document.getElementById("teachersPassword").value;
    const confirmPassword = document.getElementById("teachersCPassword").value;
    const body = {
      name: name,
      email: email,
      password: password,
      confirmPassword: confirmPassword,
    };
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    };
    fetch("http://localhost:4000/teacherregister", requestOptions)
      .then((response) => response.text())
      .then((result) => alert(result))
      .catch((error) => alert("error", error));
  }
  function signupStudent(event) {
    event.preventDefault();
    const name = document.getElementById("studentsName").value;
    const email = document.getElementById("studentsEmail").value;
    const password = document.getElementById("studentsPassword").value;
    const confirmPassword = document.getElementById("studentCPassword").value;
    const body = {
      name: name,
      email: email,
      password: password,
      confirmPassword: confirmPassword,
    };
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    };
    fetch("http://localhost:4000/studentregister", requestOptions)
      .then((response) => response.text())
      .then((result) => alert(result))
      .catch((error) => alert("error", error));
  }
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
          <Link to="/login">
            <button className="loginbuttons">LOG IN</button>
          </Link>
          <button className="loginbuttons">SIGN UP</button>
        </div>
        <form>
          <div>
            <input
              type="text"
              name="fullName"
              id="studentsName"
              placeholder="Full Name"
              required
            />
            <br></br>
            <input
              type="email"
              name="email"
              id="studentsEmail"
              placeholder="Email Address"
              required
            />
            <br></br>
            <input
              type="text"
              name="password"
              id="studentsPassword"
              placeholder="Password"
              required
            />
            <br></br>
            <input
              type="text"
              name="password"
              id="studentsCPassword"
              placeholder="Confirm Password"
              required
            />
          </div>
          <div className="buttonplaceholder">
            <button onClick={signupStudent} className="loginbutton">
              Signup
            </button>
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
        <Link to="/login">
          <button className="loginbuttons">LOG IN</button>
          </Link>
          <button className="loginbuttons">SIGN UP</button>
        </div>
        <form>
          <div>
            <input
              type="text"
              name="fullName"
              id="teachersName"
              placeholder="Full Name"
              required
            />
            <br></br>
            <input
              type="email"
              name="email"
              id="teachersEmail"
              placeholder="Email Address"
              required
            />
            <br></br>
            <input
              type="text"
              name="password"
              id="teachersPassword"
              placeholder="Password"
              required
            />
            <br></br>
            <input
              type="text"
              name="password"
              id="teachersCPassword"
              placeholder="Confirm Password"
              required
            />
          </div>
          <div className="buttonplaceholder">
            <button onClick={signupTeacher} className="loginbutton">
              Signup
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
export default SignupScreen;
