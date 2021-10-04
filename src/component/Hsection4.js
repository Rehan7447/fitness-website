import React, { Component } from 'react';


import pic1 from '../img/Vectorimg.svg'
export default function Hsection4(){
    return(
        <section className="hsection4">
            <div className="container-fluid hsection4-padd-lr">
                <div className="row" id="hs4-all-content">
                    <div className="col-md-3 hs4-cpara">
                        <p className="hs4-p1 hs4-c">Разобраться в отношениях с собой и окружающими</p>
                        <p className="hs4-p2 hs4-c">Осознать и принять свои эмоции и чувства</p>
                    </div>
                    <div className="col-md-6">
                        <div className="hs4-para-container1">
                        <p className="hs4-p3 hs4-c">Решить текущие проблемы</p>
                        <p className="hs4-p4 hs4-c">Обрести уверенность в себе</p>
                        </div>
                        <div className="hs4-para-container2">
<img src={pic1}/>
<p className="hs4-pbig">ПОЧЕМУ КОГНИТИВНО-ПОВЕДЕНЧЕСКАЯ ТЕРАПИЯ?</p>
                        </div>
                        <div className="hs4-para-container1">
                        <p className="hs4-p5 hs4-c">Принять и полюбить свои несовершенства</p>
                        <p className="hs4-p6 hs4-c">Гармонизировать отношения в семье</p>
                        </div>
                    </div>
                    <div className="col-md-3 hs4-cpara">
                    <p className="hs4-p7">Справиться с тревожностью и паническими атаками</p>
                        <p className="hs4-p8">Перестать откладывать на завтра</p>
                    </div>
                </div>
                 
                
                </div>
                <div className="hs4-all-content2 row">
                <p className="hs4-pbig">ПОЧЕМУ КОГНИТИВНО-ПОВЕДЕНЧЕСКАЯ ТЕРАПИЯ?</p>
                <div className="hs4-imgc2">
<img src={pic1}/>


                        </div>
                        <div className="row hs4-rk">
                            <div className="col-6 hs4-pk1">
                            <p className="hs4-p1 hs4-c">Разобраться в отношениях с собой и окружающими</p>
                            <p className="hs4-p1 hs4-c">Осознать и принять свои эмоции и чувства</p>
                            <p className="hs4-p1 hs4-c">Обрести уверенность в себе</p>
                            <p className="hs4-p1 hs4-c">Решить текущие проблемы</p>
                            </div>
                            <div className="col-6 hs4-pk2">
                            <p className="hs4-p7">Справиться с тревожностью и паническими атаками</p>
                            <p className="hs4-p7">Принять и полюбить свои несовершенства</p>
                            <p className="hs4-p7">Гармонизировать отношения в семье</p>
                            <p className="hs4-p7">Перестать откладывать на завтра</p>
                            </div>
                        </div>
                </div>
              
                <div className="hs4-btncontainer">
                <button class="hs4-btn" >Узнать больше</button>
                </div></section>
    )
}