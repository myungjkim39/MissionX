
import './StudentProfiles.css';
import React, {useEffect, useState} from 'react'

/*const studentDetails = [
    {
        name:'AIDEN ANDREWS',
        profilePicture:"/students/AidenAndrews.png"
    },
    {
        name:'COUTNEY BRISTOL',
        profilePicture:"/students/CourtneyBristol.png"
    },
    {
        name:'NAGINI CORTES',
        profilePicture:"/students/NaganiCortes.png"
    },
    {
        name:'RAWIRI FLETCHER',
        profilePicture:"/students/RawiriFletcher.png"
    },
    {
        name:'JAVIER FUEGO' ,  
        profilePicture:"/students/JavierFuego.png"
    },
    {
        name:'TOKIO HAN',
        profilePicture:"/students/TokioHan.png"
    },
    {
        name:'LISA HORAN' , 
        profilePicture:"/students/LisaHoran.png"
    },
    {
        name:'ALICE KINDELAN',
        profilePicture:"/students/AidenAndrews.png"
    },
    {
        name:'SIMON LAINE' ,
        profilePicture:"/students/SimonLaine.png"
    },
    {
        name:'NEVEAH MACHENRY',
        profilePicture:"/students/NeveahMachenry.png"
    },
    {
        name:'HARRY MCGRATH',
        profilePicture:"/students/HarryMcGrath.png"
    },
    {
        name:'LUCIA MENDEZ',
        profilePicture:"/students/LuciaMendez.png"
    },
    {
        name:'HANU NEPE',
        profilePicture:"/students/HanuNepe.png"
    },
    {
        name:"SHENE O'MONAHAN",
        profilePicture:"/students/ShaneOMonahan.png"
    },
    {
        name:"MARK O'LEARY",
        profilePicture:"/students/MarkOLeary.png"
    },

]
*/
export default function StudentProfiles() {
    const [studentDetails, setStudent] = useState([{ profile_pic:'profile_pic', name:'name'}])
    useEffect(() => {
      fetch('http://localhost:4000/pages/TeacherDashboardStudentProfiles').then(res => res.json()).then(json => setStudent(json)).catch(err => console.log(err))}, [])
  return (
    <div className='studentProfiles'>
    {studentDetails.map((studentDetails)=>(

        <div className="profilesInBox">

          <img src={studentDetails.profile_pic} alt='studentImage'/>
          {studentDetails.name}

       </div>


))}
  
</div>
);
}


