import React, { Component } from 'react';
import pic1 from '../img/Vector7.svg'
import pic2 from '../img/aboutbg.svg'
export default function AboutSection1(){
    return(
        <section className="about-section1">
            <div className="about-section1-imgcontainer1">
            <img src={pic2}/>
            </div>
            <div className="about-section1-imgcontainer2">
            <img src={pic1}/>
            <div className="aboutsection1-content">
            <h1>О <span>НАС</span> </h1>
            <p>Узнайте о нашей миссии и целях</p>
            </div>
          
            </div>
           
        </section>
    )
}