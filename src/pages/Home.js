import React from "react"
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import "./App.css";
import Navbar from './components/homecomponents/Navbar'
import Header from "./components/homecomponents/Header";
import StudentsCreation from "./components/homecomponents/StudentsCreation";
import MiddleOfHomePage from "./components/homecomponents/MiddleOfHomePage";
import KeyCompetencies from "./components/homecomponents/KeyCompetencies";
import Classroom from "./components/homecomponents/Classroom";
import Footer from "./components/homecomponents/Footer";



function Home() {
  return (
    <div className="Homepage">
      <Navbar />
      <br/> 
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
