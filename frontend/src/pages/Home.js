import React from "react"

import "./home.css";
import Navbar from '../components/homecomponents/Navbar'
import Header from "../components/homecomponents/Header";
import StudentsCreation from "../components/homecomponents/StudentsCreation";
import MiddleOfHomePage from "../components/homecomponents/MiddleOfHomePage";
import KeyCompetencies from "../components/homecomponents/KeyCompetencies";
import Classroom from "../components/homecomponents/Classroom";
import Footer from "../components/homecomponents/Footer";



function Home() {
  return (
    <div className="Homepage">
      <Navbar />
      <Header />
      <div>
      <StudentsCreation />
      </div>
      <MiddleOfHomePage />
      <KeyCompetencies />
      <Classroom />
      <Footer />

      
    </div>
  )

    
}

export default Home;

