import "./LoginScreen.css";
import {useState, useEffect} from "react"
import { Link } from "react-router-dom";

function LoginScreen() {

  const [data, setData] = useState({
    email: '',
    password: ''
  });
  const {email, password} = data;
  const handleEmail = (e) => {
    setData({...data, [e.target.name]: e.target.value})
  }
  const checkEmail = () => {
    const emailcheck = email.find(user => (user.email === data.email && user.password === data.password));
    if(emailcheck) {
      console.log("Login successful");
    }else {
      console.log("Wrong password or username");
    }
    console.log(email);
    console.log(emailcheck);
  }

  useEffect(() => {
    fetch('http://localhost:4000/studentpassword')
    .then(response => response.json())
    .then(json => console.log(json))
    }, []);
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
        <form method="POST">
          <div>
            <input
              type="email"
              value="email"
              name="email"
              placeholder="Email Address"
              onChange={handleEmail}
              required
            />
            <br></br>
            <input
              type="text"
              name="password"
              value="password"
              placeholder="Password"
              onChange={handleEmail}
              required
            />
          </div>
          <div className="buttonplaceholder">
            <button onClick={handleEmail} className="loginbutton">Login</button>
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
              type="email"
              name="email"
              value="email"
              placeholder="Email Address"
              onChange={handleEmail}
              required
            />
            <br></br>
            <input
              type="text"
              name="password"
              value="password"
              placeholder="Password"
              onChange={handleEmail}
              required
            />
          </div>
          <div className="buttonplaceholder">
            <button onClick={handleEmail} className="loginbutton">Login</button>
          </div>
        </form>
      </div>
    </div>
    </div>
  );
}

export default LoginScreen;
