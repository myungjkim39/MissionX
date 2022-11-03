import React from 'react'

import PartOne from '../components/TeacherDashboard/PartOne'
import Footer from '../Shared components/Footer'

import TeacherDashboardHeader from "../components/TeacherDashboardHeader"
import TeacherSidebar from '../components/TeacherSidebar'
import "./TeacherDash.css"

//import PrBackground from '../components/TeacherDashboard/PrBackground'
//<PrBackground/>

export default function TeacherDashboardProgressTracker() {
  return (
    //calling components
    
    <div className='teacherDashBackgroundPR'>
     
     <TeacherDashboardHeader />
     <TeacherSidebar/>
     <PartOne/>
     <Footer/>
     
  
     

    </div>
  )
}