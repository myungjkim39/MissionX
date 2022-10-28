import React from 'react'
import '../components/TeacherProfileViewer.css'
import { Link } from 'react-router-dom';
import Footer from '../Shared components/Footer.js';
import Header from '../components/TeacherProfileHeader';

function TeacherProfileViewer () {
  return (
    <div className="teacher-profile">
      <Header />
        <div className="teacher-profile-side">
        <div className="teacherprofile-options">
            <img src={Image} width="width: 69px" alt="T Image" /> <br />
            <button type="button" className="teacher-profile-btn1">EDIT PROFILE</button>
            <button type="button" className="teacher-profile-btn1">CHANGE PHOTO</button>
            <button type="button" className="teacher-profile-btn1">SETTINGS</button>
            </div>

            <div className="teacher-info">
            <h3>Jasmina Salvador</h3>
            <p>School</p>
            <p>Date of Birth</p>
          </div>
        </div>
        <div className="dashboard-projects">
          <Link to="/teacherprojectlibrary">
            <button type="button" className="teacherprofile-back-projects">BACK TO PROJECTS</button>
          </Link>
          <Link to="/">
            <button type="button" className="teacherprofile-back-dashboard">BACK TO DASHBOARD</button>
            </Link>
        </div>
        <Footer />
      </div>
    )
  }

export default TeacherProfileViewer
