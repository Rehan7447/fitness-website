import React, { Component } from 'react';
import Footer from './footer'
import logo1 from '../img/Footer/freya-logo.png'
import icon1 from '../img/Footer/Facebook.png'
import icon2 from '../img/Footer/Instagram.png'
import icon3 from '../img/Footer/VK.png'
const Hsection10=()=>{
    return(

        <section className="hsection10">
        <div class="container-fluid hsection10-padd-lr">
            <h2 className="hs10-h2">ХОТИТЕ, МЫ САМИ<span> ВАМ НАПИШЕМ?</span></h2>
            <div className="hs10-btn1-container">
            <button class="hs10-btn1" >Имя</button>
            <button class="hs10-btn1" >Email</button>
            <button class="hs10-btn1" >Время</button>
            </div>
            <div className="hs10-btncontainer">
                <button class="hs10-btn" >Отправить</button>
                </div>
                
            </div>
            <Footer  color="#F6EEE0" logo={logo1} paracolor="#000000" icon1={icon1} icon2={icon2} icon3={icon3} iconwidth="70px" iconheight="70px" margintop="-1rem"/>
            </section>
    )
}
export default Hsection10