import "./LoginScreen.css";
import { Link } from "react-router-dom";

function LoginScreen() {
  function loginTeacher(event) {
    event.preventDefault();
    const email = document.getElementById("teacherEmail").value;
    const password = document.getElementById("teacherPassword").value;
    const body = {
      email: email,
      password: password,
    };
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    };
    fetch("http://localhost:4000/teacherpassword", requestOptions)
      .then((response) => response.text())
      .then((result) => alert(result))
      .catch((error) => alert("error", error));
  }
  function loginStudent(event) {
    event.preventDefault();
    const email = document.getElementById("studentEmail").value;
    const password = document.getElementById("studentPassword").value;
    const body = {
      email: email,
      password: password,
    };
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    };
    fetch("http://localhost:4000/studentpassword", requestOptions)
      .then((response) => response.text())
      .then((result) => alert(result))
      .catch((error) => alert("error", error));
  }
  return (
    <div>
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
            <Link to="/signup">
              <button className="loginbuttons">SIGN UP</button>
            </Link>
          </div>
          <form>
            <div>
              <input
                type="email"
                id="studentEmail"
                name="email"
                placeholder="Email Address"
                required
              />
              <br></br>
              <input
                type="text"
                name="password"
                id="studentPassword"
                placeholder="Password"
                required
              />
            </div>
            <div className="buttonplaceholder">
              <button onClick={loginStudent} className="loginbutton">
                Login
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
            <button className="loginbuttons">LOG IN</button>
            <Link to="/signup">
              <button className="loginbuttons">SIGN UP</button>
            </Link>
          </div>
          <form>
            <div>
              <input
                type="email"
                name="email"
                id="teacherEmail"
                placeholder="Email Address"
                required
              />
              <br></br>
              <input
                type="text"
                name="password"
                id="teacherPassword"
                placeholder="Password"
                required
              />
            </div>
            <div className="buttonplaceholder">
              <button onClick={loginTeacher} className="loginbutton">
                Login
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default LoginScreen;
