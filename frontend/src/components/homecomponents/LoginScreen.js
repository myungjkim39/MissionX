// import React, { useState } from "react";

// export default function Login() {

//   const [email, setEmail] = useState("");

//   const [password, setPassword] = useState("");

//   function validateForm() {

//     return email.length > 0 && password.length > 0;

//   }

//   function handleSubmit(event) {

//     event.preventDefault();

//   }

//   return (

//     <div className="Login">

//       <Form onSubmit={handleSubmit}>

//         <Form.Group size="lg" controlId="email">

//           <Form.Label>Email</Form.Label>

//           <Form.Control

//             autoFocus

//             type="email"

//             value={email}

//             onChange={(e) => setEmail(e.target.value)}

//           />

//         </Form.Group>

//         <Form.Group size="lg" controlId="password">

//           <Form.Label>Password</Form.Label>

//           <Form.Control

//             type="password"

//             value={password}

//             onChange={(e) => setPassword(e.target.value)}

//           />

//         </Form.Group>

//         <Button block size="lg" type="submit" disabled={!validateForm()}>

//           Login

//         </Button>

//       </Form>

//     </div>

//   );

// }

import React from "react";
import "./LoginScreen.css";

function LoginsScreen() {
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
  );
}
export default LoginsScreen;
