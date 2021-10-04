import React, { Component } from "react";
import "../css/about.css";
import Header from "../component/header";
import Footer from "../component/footer";
import AboutSection1 from "../component/aboutsection1";
import AboutSection2 from "../component/aboutsection2";
import AboutSection3 from "../component/aboutsection3";
import AboutSection4 from "../component/aboutsection4";
import pic1 from "../img/Footer/freya-logo.png";
import logo1 from "../img/Footer/freya-logo.png";
import icon1 from "../img/Footer/Facebook.png";
import icon2 from "../img/Footer/Instagram.png";
import icon3 from "../img/Footer/VK.png";
export default function About() {
  return (
    <>
      <title>About us</title>
      <meta
        name="description"
        content="Мы знаем приятный путь к стройному телу - с учетом пожеланий и Вашего образа жизни делаем желанное привычным."
      ></meta>
      <Header
        page="about"
        color="#F6EEE0"
        logo={pic1}
        paracolor="#000000"
        background="#0E4952"
        tcolor="#F6EEEE"
      />
      <AboutSection1 />
      <AboutSection2 />
      <AboutSection3 />
      <AboutSection4 />
      {/* 
        
         */}
      <div className="aboutclassfooter">
        <Footer
          color="#F6EEE0"
          logo={logo1}
          paracolor="#000000"
          icon1={icon1}
          icon2={icon2}
          icon3={icon3}
          iconwidth="70px"
          iconheight="70px"
          margintop="-1rem"
        />
      </div>
    </>
  );
}
