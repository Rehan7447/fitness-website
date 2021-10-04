import React, { Component } from 'react';
import pic1 from '../img/Last CTA.png'
export default function Hsection8(){
return(
    <section className="Hsection8">
         <div className="container-fluid hsection8-padd-lr">
        <div className="row">
            <div className="col-md-12 col-lg-6">
                <h2 className="hs8-h2">ОЩУТИТЕ РАЗНИЦУ</h2>
                <h1 className="hs8-h1">С ЭКСПЕРТОМ</h1>
                <p className="hs8-p1">Быть женщиной непросто — мы знаем. Все наши психологи — женщины. У всех есть профильное образование и необходимый опыт частной практики. <span> Мы сочетаем этику, профессиональный нейтралитет и анонимность, чтобы помочь вам.</span>


</p>
                <span className="hs8-span">2 600 ₽/сессию ~ 55 мин</span>
                <p className="hs8-p2">Каждая сессия длится почти час.</p>
            </div>
            <div className="col-md-12 col-lg-6 hs8-img-container">
                <img src={pic1}/>
                <p className="hs8-p1" id="hs8-psw">Мы сочетаем этику, профессиональный нейтралитет и анонимность, чтобы помочь вам</p>
                <span className="hs8-span1">2 600 ₽/сессию ~ 55 мин</span>
                <p className="hs8-p21">Каждая сессия длится почти час.</p>
            </div>
        </div>
        </div>
    </section>
)
}