import React, { Component } from 'react';
import pic1 from '../img/women1.png';
import pic2 from '../img/women2.png';
import pic3 from '../img/women3.png';
import icon1 from '../img/tick.svg';
import icon2 from '../img/Heart-blue.png';
import icon3 from '../img/Оicon.svg';
import icon4 from '../img/Woman-symbol.png'
import RoundImg from '../component/roundImage'
const Hsection3=()=>{
return(
    <section className="hsection3">
  <div class="container-fluid hsection3-padd-lr">
            
                <h2 className="hsection3-heading">ТЕРАПЕВТЫ </h2>
                <p className="hsection3-para" >Команда сильных женщин и профессинальных психологов</p>
            <div className="row" id="hs3-row1">
                <div className="col-4">
                <div className="w-img-container">
                    
                  <RoundImg width="200px" height="200px" img={pic3}/>
                  <div className="w-txt">
                  <p className="w-txt-1">  Margo </p>
                  <p className="w-txt-2"> КПТ;</p>
                  <p className="w-txt-5">Схемная терапия;</p>
                  <p className="w-txt-5">Терапия принятия и</p>
                  <p className="w-txt-5">ответственности</p>
                  </div>
                </div>
                </div>
                <div className="col-4">
                <div className="w-img-container">
                <RoundImg width="200px" height="200px" img={pic1}/>
                <div className="w-txt">
                  <p className="w-txt-1">  Анастасия </p>
                  <p className="w-txt-2"> КПТ;</p>
                  <p className="w-txt-5">Счастливый тот, кто</p>
                  <p className="w-txt-5">умеет</p>
                  <p className="w-txt-5">адаптироваться</p>
                  </div>
                    
                </div>
                </div>
                <div className="col-4">
                <div className="w-img-container">
                <RoundImg width="200px" height="200px" img={pic2}/>
                <div className="w-txt">
                  <p className="w-txt-1">  Galina </p>
                  <p className="w-txt-2"> КПТ;</p>
                  <p className="w-txt-5">Экстренная помощь</p>
                  <p className="w-txt-5">“Женщина красива,</p>
                  <p className="w-txt-5"> когда она счастлива”</p>
                  </div>
                </div>
                </div>
            </div>
        
          <div className="hs3-icon-container">
          
              <div className="hs3-sm-icon">
                <img src={icon1}/>
              </div>
            
            
              <span></span>
              <div className="hs3-sm-icon">
              <img src={icon2}/>
              </div>
              <span></span>
              <div className="hs3-sm-icon">
              <img src={icon3}/>
              </div>
              <span></span>
              <div className="hs3-sm-icon">
              <img src={icon4}/>
              </div>
            
          </div>
          <div className="hs3-paracontent-container">
          <div className="row">
          
          <div className="col-md-3">
          <p>Для нас важны Ответственность и Образование</p>
          </div>
          <div className="col-md-3">
          <p>Мы проверяем дипломы и практику наших психотерапевтов</p>
          </div>
          <div className="col-md-3">
          <p className="hs3-para3">Наши специалисты знают как и чем помочь в разных ситуациях</p>
          </div>
          <div className="col-md-3">
          <p className="hs3-para4">Мы предлагаем психологическую поддержку только женщинам</p>
          </div>
              </div>
            
          </div>
          <p className="hs3-showpara" id="hs3-namepara">Анастасия</p>
          <div className="hs3-images-container">
            <div className="row">
              <div className="col-4">
             
              <RoundImg width="200px" height="200px" img={pic3}/>
              <p className="hs3-showpara" id="margo">Margo</p>
              </div>
              <div className="col-4">
              <RoundImg width="200px" height="200px" img={pic1}/>
             
              </div>
              <div className="col-4">
            
              <RoundImg width="200px" height="200px" img={pic2}/>
              <p className="hs3-showpara" id="galina">Galina</p>
              </div>
            </div>
          </div>
         <div className="hs3-iconpara-container">
           <div className="row">
             <div className="col-2 col-md-2">   <div className="hs3-sm-icon">
                <img src={icon1}/>
              </div></div>
             <div className="col-10 col-md-10">  <p className="hs3-showpara">Для нас важны Ответственность и Образование</p> </div>
           </div>
           <div className="row">
             <div className="col-2 col-md-2">   <div className="hs3-sm-icon">
                <img src={icon2}/>
              </div></div>
             <div className="col-10 col-md-10">  <p className="hs3-showpara">Мы проверяем дипломы и практику наших психотерапевтов</p> </div>
           </div>
           <div className="row">
             <div className="col-2 col-md-2">   <div className="hs3-sm-icon">
                <img src={icon3}/>
              </div></div>
             <div className="col-10 col-md-10">  <p className="hs3-showpara">Наши специалисты знают как и чем помочь в разных ситуациях</p> </div>
           </div>
           <div className="row">
             <div className="col-2 col-md-2">   <div className="hs3-sm-icon">
                <img src={icon4}/>
              </div></div>
             <div className="col-10 col-md-10">  <p className="hs3-showpara">Мы предлагаем психологическую поддержку только женщинам</p> </div>
           </div>
         </div>
            <button class="hsection3-btn" >Узнать больше</button>
            </div>
    </section>
)
}
export default Hsection3;