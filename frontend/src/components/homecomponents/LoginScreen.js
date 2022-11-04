import "./LoginScreen.css";
import {useState, useEffect} from "react"
import { Link } from "react-router-dom";

function LoginScreen() {
//   const [errorMessages, setErrorMessages] = useState({});
//   const [isSubmitted, setIsSubmitted] = useState(false);
//   const errors={email: "invalid email", password: "invalid password"};
//   const handleSubmit = (e) => {
//   e.preventDefault();
// }
// useEffect(() => {
//   fetch('http://localhost:4000/studentpassword')
//   .then(response => response.json())
//   .then(json => console.log(json))
//   }, []);
//   const [data, setData] = useState({
//     email: '',
//     password: ''
//   });

//   const {email, pass} = data;
//   const changeHandler = (e) => {
//     setData({...data, [e.target.name]: e.target.value})
//   }
//   const handleEmail=(e) =>{
//     console.log
//   }
//   const handlepassword=(e) =>{
//     console.log


//   const checkEmail = () => {
//     const emailcheck = users.find(user => (user.email === data.email && user.password === data.password));
//     if(emailcheck) {
//       console.log("Login successful");
//     }else {
//       console.log("Wrong password or username");
//     }
//     // console.log(uname);
//     console.log(emailcheck);
//   }
//   useEffect(() => {
// checkEmail(email)
//   }, [data.email, data.password])

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
              // onChange={handleEmail}
              required
            />
            <br></br>
            <input
              type="text"
              name="password"
              value="password"
              placeholder="Password"
              // onChange={handleEmail}
              required
            />
          </div>
          <div className="buttonplaceholder">
            {/* <button onClick={handleEmail} className="loginbutton">Login</button> */}
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
          </div>
          <div className="buttonplaceholder">
            <button className="loginbutton">Login</button>
          </div>
        </form>
      </div>
    </div>
    </div>
  );
}


export default LoginScreen;
