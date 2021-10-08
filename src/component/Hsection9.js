import React, { Component } from 'react';
import pic1 from '../img/img-v1.svg'
import pic2 from '../img/ptd.png'
import pic3 from '../img/Vector 15.png'
const Hsection9=()=>{
    return(
        <section className="hsection9">
      <div class="container-fluid hsection9-padd-lr">
          <h2 className="hsection9-h2">ХОТИТЕ <span>БОЛЬШЕГО?</span> </h2>
          <p className="hsection9-p">Узнайте о программах спа для ума и тела и полностью измените себя за 10 недель</p>
          <div className="row">
              <div className="col-md-6" id="hs9-firstcontent">
                  <p className="hs9-p2">За внутренними изменениями следуют <span>внешние</span> </p>
                  <p className="hs9-p3">Мы создали специальные программы трансформации, которые помогут преобразить не только ваши мысли, но и тело. А еще — достигнуть личных или профессиональных целей</p>
                  <div className="row" id="hs9cards">
                <img className="hs9-vector1" src={pic3}/>
                <img className="hs9-vector2" src={pic3}/>
              <div className="col-6 col-md-5 col-lg-4">
              <div class="card hs9-cards" >
  <div class="card-body">
    <h5 class="card-title">МУЗА</h5>
    <ul>
      <li className="hs9-li1">Терапевт</li>
      <li className="hs9-li1">Йога-инструктор</li>
      <li>Лайф-коуч</li>
      
  </ul>
  </div>
</div>
              </div>
              <div className="col-6 col-md-5 col-lg-4">
              <div class="card hs9-cards " >
  <div class="card-body">
    <h5 class="card-title">СИРЕНА</h5>
    <ul>
      <li>Терапевт</li>
      <li>Диетолог</li>
      <li className="hs9-li2">Стилист</li>
      <li>Куратор</li>
  </ul>
   
  </div>
</div>
              </div>
              <div className="col-6 col-md-5 col-lg-4" id="hs9card3">
                  
              <div class="card hs9-cards" >
  <div class="card-body">
    <h5 class="card-title">БОГИНЯ</h5>
   
  <ul>
      <li>Терапевт</li>
      <li>Йога-инструктор</li>
      <li>Диетолог</li>
      <li>Стилист</li>
      <li>Куратор</li>
      <li>Лайф-коуч</li>
  </ul>
  </div>
</div>
              </div>
          </div>
         
         
          
              </div>
              <div className="col-5 col-md-5 hs9-img-container" id="hs9-doubleimg">
                  <img src={pic1} className="hs9-img1"/>
                  <img src={pic2} className="hs9-img2"/>
              </div>
          </div>
       </div>
       <div className="hs9-btncontainer">
                <button class="hs9-btn" >Узнать больше</button>
                </div>
          </section>
    )}

    export default Hsection9;