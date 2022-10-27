import React from "react"
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import "./Home.css";
import Navbar from '../homecomponents/Navbar';
import Header from "../homecomponents/Header";
import StudentsCreation from "../homecomponents/StudentsCreation";
import MiddleOfHomePage from "../homecomponents/MiddleOfHomePage";
import KeyCompetencies from "../homecomponents/KeyCompetencies";
import Classroom from "../homecomponents/Classroom";
import Footer from "../homecomponents/Footer";






function Home() {
  return (
    <div className="Homepage">
      <Navbar />
      <Header />
      <br />
      <StudentsCreation> students </StudentsCreation>
      <br /><br /><br /><br /><br />
      <br /><br /><br /><br /><br />
      <br /><br /><br /><br /><br />
      <br /><br /><br /><br /><br />
      <br />

      <MiddleOfHomePage>hello</MiddleOfHomePage>
      <br></br>
      <br></br>
      <KeyCompetencies>hello</KeyCompetencies>
      <br></br><br></br>
      <Classroom>picture</Classroom>
      <br></br><br></br><br></br>
      <Footer></Footer>

      
    </div>
  )

    
}

export default Home;