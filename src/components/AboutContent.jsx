import "./AboutContentStyles.css";

import React from 'react'
import { Link } from "react-router-dom";


const AboutContent = () => {
  return (
    <div className="about">
        <div className="left">
        <h1>Who I Am?</h1>
        <p>Hi, I a Vaishnavi Karadge.I am a Front developer.</p>
        <Link to="/contactus">
            <button className="btn">Contact</button>
        </Link>
        </div>
        <div className="right">
            <div className="img-container">
                <div className="top">
                   
                    <img src="https://www.bigscal.com/wp-content/uploads/2022/12/Top-5-React-Github-repositories-to-Become-a-Pro-React-js-Developer-1.png" className="img" alt="image" />
                </div>
                <div className="bottom">
                    <img src="https://ziontutorial.com/wp-content/uploads/2023/02/ziontutorial.com_.png" className="img" alt="image" />
                    
                </div>    



            </div>

        </div>
    </div>
  )
}

export default AboutContent;