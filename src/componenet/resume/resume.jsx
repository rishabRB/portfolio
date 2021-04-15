import React from 'react';
import './resume.css';
import Pdf from '../../assest/resume/souravResume-converted.pdf';

const Resume=()=>{
 


    return(
        <div className="resume">
            <a className="resume-icon" href={Pdf}>RESUME <i  className="fas fa-file-download"></i></a>
        </div>
    )
}

export default Resume;