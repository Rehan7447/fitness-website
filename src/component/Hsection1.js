import React, { Component } from 'react';
import pic1 from '../img/lcd.svg'
const Hsection1=()=>{
    return(
        <section className="hsection1">
             <div class="container-fluid hsection1-padd-lr">
            <div className="row" style={{marginLeft:"0px"}}>
                <div className="col-md-12 col-lg-6 col-12 hs-heading-container">
                    <h1>Онлайн психотерапия </h1>
                    <h1 className="hs-h-2">для <span>женщин</span></h1>
                    <p>Мы создаем программы психического и физического здоровья, 
чтобы вы наслаждались жизнью</p>
<button class="hsection1-btn" >Забронировать сессию</button>
<p className="hs-sm-txt">2600 ₽ за сеанс ~ 55 мин.</p>
                </div>
                <div className="col-md-12 col-lg-6 col-12 hero-img">
                   <img src={pic1}/>
                </div>
            </div>
            </div>
        </section>
    )
}
export default Hsection1;