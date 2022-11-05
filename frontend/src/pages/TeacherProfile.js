import React, {useEffect, useState} from 'react'
import '../components/TeacherProfileViewer.css'
import { Link } from 'react-router-dom';
import Footer from '../components/homecomponents/Footer.js';
import Header from '../components/TeacherProfileHeader';

function TeacherProfileViewer() {
  const [teacher, setTeacher] = useState({ profile_pic:'TeacherPic', name:'name', email:'email@email.com', school:'school', date_of_birth:'0000-00-00', contact_number:'000000'})
  useEffect(() => {
    fetch('http://localhost:4000/teacher').then(res => res.json()).then(json => setTeacher(json[0])).catch(err => console.log(err))
  }, [])
  return (
    <div className="teacher-profile">
      <Header teacherName={teacher.name} />
      <div className="teacher-profile-side">
        <div className="teacherprofile-options">
          <img src={teacher.profile_pic} width="width: 59px" alt="T Image" />
          <br />
          <button type="button" className="teacher-profile-btn1">
            EDIT PROFILE
          </button>
          <button type="button" className="teacher-profile-btn1">
            CHANGE PHOTO
          </button>
          <button type="button" className="teacher-profile-btn1">
            SETTINGS
          </button>
        </div>

        <div className="teacher-info">

          <div className="teacherprofileinfo-name">
            <h3>{teacher.name}</h3>
          </div>

          <div className="teacherprofileinfo-mainschool">
            <div className="teacherprofileinfo-title">
              <h4>School</h4>
              <p>{teacher.school}</p>
            </div>
            <div className="teacherprofileinfo-title">
              <h4>Date of Birth</h4>
              <p>{teacher.date_of_birth}</p>
            </div>
            <div className="teacherprofileinfo-title">
              <h4>Contact No</h4>
              <p>{teacher.contact_number}</p>
            </div>
            <div className="teacherprofileinfo-title">
              <h4>Email Address</h4>
              <p>{teacher.email}</p>
            </div>
          </div>
        </div>
      </div>
      <div className="dashboard-projects">
        <Link to="/teacherprojectlibrary">
          <button type="button" className="teacherprofile-back-projects">
            BACK TO PROJECTS
          </button>
        </Link>
        <Link to="/">
          <button type="button" className="teacherprofile-back-dashboard">
            BACK TO DASHBOARD
          </button>
        </Link>
      </div>
      <Footer />
    </div>
  );
  }

export default TeacherProfileViewer
