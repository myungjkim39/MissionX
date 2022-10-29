import React from 'react'

import PartOne from '../components/TeacherDashboard/PartOne'
import Footer from '../Shared components/Footer'
import PrBackground from '../components/TeacherDashboard/PrBackground'

import TeacherDashboardHeader from "../components/TeacherDashboardHeader"
import TeacherSidebar from '../TeacherSidebar'





export default function TeacherDashboardProgressTracker() {
  return (
    //calling components
    
    <div>
     <PrBackground/>

     <TeacherDashboardHeader />
     <TeacherSidebar/>

     <Header />

     <PartOne/>
     <Footer/>
  
     

    </div>
  )
}