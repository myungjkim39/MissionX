import React from 'react'


import Footer from '../Shared components/Footer'

import StudentProfiles from '../components/TeacherDashboard/StudentProfiles'

import TeacherDashboardHeader from "../components/TeacherDashboardHeader"
import TeacherSidebar from '../TeacherSidebar'






export default function TeacherDashboardStudentProfiles() {
  return (
    //calling components
    
    <div>
       <TeacherDashboardHeader />
       <TeacherSidebar/>

     <StudentProfiles/>
     <Footer/>
  
     

    </div>
  )
}