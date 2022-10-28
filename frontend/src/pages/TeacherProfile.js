import React, {useEffect, useState} from 'react'
import '../components/TeacherProfileViewer.css'
import { Link } from 'react-router-dom';
import Footer from '../Shared components/Footer.js';
import Header from '../components/TeacherProfileHeader';

function TeacherProfileViewer() {
  const [teacher, setTeacher] = useState()
  useEffect(() => {
    fetch('http://localhost:4000/mockteacher_id').then(res => res.json()).then(json => setTeacher(json)).catch(err => console.log(err))
  }, [])
  return (
    <div className="teacher-profile">
      <Header />
        <div className="teacher-profile-side">
        <div className="teacherprofile-options">
          <img src={teacher.profilePic} width="width: 59px" alt="T Image" /> <br />
            <button type="button" className="teacher-profile-btn1">EDIT PROFILE</button>
            <button type="button" className="teacher-profile-btn1">CHANGE PHOTO</button>
            <button type="button" className="teacher-profile-btn1">SETTINGS</button>
            </div>

            <div className="teacher-info">
          {teacher && (<>
          <h3>{teacher.name}</h3>
          <p>School {teacher.school}</p>
          <p>Date of Birth {teacher.dateOfBirth}</p>
          <p>Contact No {teacher.contactNumber}</p>
          <p>Email Address {teacher.email}</p>
          </>)}
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
