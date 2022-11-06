import React from 'react'
import "./KeyCompetencies.css"

function KeyCompetencies() {
  return (
    <div className="keyCompetencies">
      <div className="keyComp">
        <h4>Enhance key competencies</h4>
        <p>The programme enhances capabalities of students in the 5 key Competencies identified in the New Zealand Curriculum</p>
        <div className="bulletPoints"></div>
        <img
                    src="src-assets/Home/star.png"
                    alt="animation"
                    />
        <h5 className="keyHeading">THINKING</h5>
        <p>In particular the programme focused on problem solving, design thinking and computational thinking.</p>
        <h5 className="keyHeading">DISCERNING CODES</h5>
        <p>Analysing language, symbols, and texts in order to understand and make sense of the codes in which knowledge is expressed.</p>
        <h5 className="keyHeading">SELF-MANAGEMENT</h5>
        <p>Projects and challenges are designed to motivate students to explore and experiment with self-motivation</p>
        <h5 className="keyHeading">RELATIONSHIP WITH PEERS</h5>
        <p>The programme is designed with unplugged sessions where students interact
          in a range of different situations, including things like being able to listen well
          to different points of view, and share ideas.
        </p>
        <h5 className="keyHeading">PARTICIPATIO AND COLLABORATION</h5>
        <p>The programme encourages students to be involved in communities, such as family, whanau, school, and contribute and make connections with other people.</p>
        <br></br><br></br><br></br>
        </div>
    </div>
  )
}

export default KeyCompetencies;
