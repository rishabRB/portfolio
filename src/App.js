import React from 'react'
import Video from "./assest/video/background.mp4"
import './App.css';
import Front from "./componenet/front/front";
import Container from "./componenet/conatainer/container";
import About from "./componenet/about/about";
import GetInTouch from "./componenet/getInTouch/getInTouch";
import Resume from "./componenet/resume/resume";
import Developer from "./componenet/Developer/developer";
import Thanos from "./assest/video/thanos.png";



const App=()=>{

   


  


  return(
    <div className="home">
      <video autoPlay loop muted className="background-video">
       <source src={Video} type="video/mp4" />
      </video>
      <Front />
      <h1 className="header">Project's</h1>
      <div className="container-1">
      
      <Container  title={"What to show some magic ?"} imageurl={Thanos} showButton={true}/>
      <Container  title={"Still working ..."} />
      <Container  title={"Still working ..."}/>
      <Container  title={"Still working ..."} />
      </div>
      <About />
      <GetInTouch />
      <Resume />
      <Developer />
     
      
     </div>
  )
}
export default App;
