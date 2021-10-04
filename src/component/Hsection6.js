import React, { Component } from 'react';


import pic1 from '../img/mb.png'
export default function Hsection6(){
    return(
        <section className="hsection6">
            <div className="container-fluid hsection6-padd-lr">
            <div className="row">
                <div className="col-md-4">
                    <div className="hs6-hcontainer1">
                    <h3 className="hs6-h3">Общайтесь с нами удобно</h3>
                    <p className="hs6-para">Мы есть сразу на нескольких платформах: WhatsApp, Telegram, Intagram. Свяжитесь с нами!</p>
                    </div>
                    <div className="hs6-hcontainer2">
                    <h3 className="hs6-h3">2 600 ₽ за сессию</h3>
                    <p className="hs6-para">Мы гордимся тем, что можем быть доступными. Наша цена за индивидуальную сессию — ниже средней на рынке</p>
                    </div>
                   
                </div>
                <div className="col-md-4 hs6-imgcontainer">
                    <img src={pic1}/>
                </div>
                <div className="col-md-4">
                <div className="hs6-hcontainer3">
                <h3 className="hs6-h3">Прямой контакт</h3>
                <p className="hs6-para">Вы можете проконсультироваться, к какому специалисту лучше обратиться, написав нам в любой мессенджер</p>
                </div>
                    <div className="hs6-hcontainer4">
                    <h3 className="hs6-h3">Уникальная программа</h3>
                    <p className="hs6-para">Программы включают в себя не только услуги психологов, но и других wellness-специалистов для наиболее полной трансформации</p>
                    </div>
               
                </div>
            </div>
                </div>
                <div className="hs6-btncontainer">
                <button class="hs6-btn" >Узнать больше</button>
                </div>
                </section>
    )
}