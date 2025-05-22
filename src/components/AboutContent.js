import { Link } from "react-router-dom";
import "./AboutContentStyles.css"
import React1 from "../assets/aboutimg2.png";
import React2 from "../assets/aboutimg1.jpg";
import React from 'react'

const AboutContent = () => {
  return <div className="about">
        <div className="left">
            <h1>Who Am I?</h1>
            <p>I am a react front-end developer. I cerate responsive secure websites for my clients.</p>
            <Link to="/contact">
                <button className="btn">Contact</button>
            </Link>
        </div>

        <div className="right">
            <div className="img-container">
                <div className="img-stack top">
                    <img src={React1} className="img" alt="true"/>
                </div>
                <div className="img-stack bottom">
                    <img src={React2} className="img" alt="true"/>
                </div>
            </div>
        </div>
    </div>;
};

export default AboutContent
