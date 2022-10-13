import React from 'react'
import './TeacherProfileViewer'

function TeacherProfileViewer () {
    return (
        <div className="teacher-profile">
        <div className="teacherprofile-options">
            {/* <img src={Image} alt="T Image" /> <br /> */}
            <button type="button">EDIT PROFILE</button>
            <button type="button">CHANGE PHOTO</button>
            <button type="button">SETTINGS</button>
            </div>

            <div className="teacher-info">
                <h3>Jasmina Salvador</h3>
            </div>
      </div>
    )
  }

export default TeacherProfileViewer
