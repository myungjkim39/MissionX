import React from 'react'

import PartOne from '../components/TeacherDashboard/PartOne'
import Footer from '../components/Shared-components/Footer'

import TeacherDashboardHeader from "../components/TeacherDashboardHeader"
import TeacherSidebar from '../components/TeacherSidebar'


//import PrBackground from '../components/TeacherDashboard/PrBackground'
//<PrBackground/>

export default function TeacherDashboardProgressTracker() {
  return (
    //calling components
    
    <div>
     
     <TeacherDashboardHeader />

    <div className='ProgressTrackerCenter'>
     <TeacherSidebar/>
     <PartOne/>
    </div>
     <Footer/>
     
  
     

    </div>
  )
}