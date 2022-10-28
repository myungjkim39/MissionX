import React from 'react'
import "./LoginScreen.css"

function LoginsScreen() {
  return (
    <div class="loginform">
    <img
    className="loginImage"
    src="src-assets/LoginSignup/teachers.png"
    alt="animation"
  />
    
    <h1>Teachers</h1>
    <button>LOG IN</button><button>Sign UP</button>
    <form action="mailto:surbhig@missionreadyhq.com" method="POST"></form>
    
    <label> Email: </label>
    <br></br>
    {/* <input type="email" name="email" id="email" placeholder="name@domain.com" required> */}
    <label> Password: </label>
    <br></br>
    {/* <input type="text" name="myName" id="myName" placeholder="Full Name" required> */}
    
    <br></br><br></br><br></br>
    <button>Login</button></div>
   
  )
}
export default LoginsScreen;
