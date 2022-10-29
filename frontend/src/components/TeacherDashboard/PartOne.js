
//1st big Rectangle
import React from 'react'
import './PartOne.css'
import StudentReco from './StudentReco'
import ExportIcon from './ImagesProgressTracker/ExportIcon.jpg'


export default function PartOne(props) {
  const LetsExport="Export as spreadsheet"//dynamic components 1 //cannot use ob and boolean values
  return (
  <div className='progressTrackerAll'>
    <div className='progressTrackerLightBackground'>
     <div className='progressTrackerExport'>
        <div className='ExportIcon'> <img src={ExportIcon} alt='exporticon'/>
        </div>
        <div className='exportText'>{LetsExport}
        </div>
      </div>
        <span className="progressTrackerHeader">BEGINNER COURSE</span>   

        <div className='studentRecoContainer'>
        <StudentReco student='AIDEN ANDREWS'   levels={['1',`2`,`3`,`4`,`5`,`6`,`7`,`8`,`9`,`10`,`11`,`12`,`13`,`14`,`15`]}/>
        <StudentReco student='COUTNEY BRISTOL' levels={['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15']}/>
        <StudentReco student='NAGINI CORTES'   levels={['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15']}/>
        <StudentReco student='RAWIRI FLETCHER' levels={['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15']}/>
        </div>
    </div> 
  </div>
  )
} 
