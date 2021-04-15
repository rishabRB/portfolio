import React,{useState} from 'react';
import './container.css';


const Container=({title,content,showButton,imageurl})=>{

    const [showImage,setshowImage]=useState(false);



    const showImageFunction=()=>{
        setshowImage(true);
      }

      const hideImageFunction=()=>{
          setshowImage(false);
      }
    
  if(!showImage){
    return(
        <div className="container">
         <h1 className="title">{title}</h1>
        {showButton ? <button className="btn" onClick={showImageFunction}><i class="fas fa-arrow-right"></i></button> : " "} 
        {content ? <p className="content">{content}</p> :" "}
       
         </div>
    )
  }
  else{
      return(
          <div className="container">
          <img src={imageurl} alt="ART"></img> 
          <button className="return-btn" onClick={hideImageFunction}><i class="fas fa-times"></i></button>
          </div>
      )
  }

}


export default Container;