import React, { Component } from 'react';
import pic1 from '../img/women1.png'
import pic2 from '../img/women2.png'
import pic3 from '../img/women3.png'
import RoundImg from './roundImage';
export default function AboutSection3(){
    return(
        <section className="about-section3">
            <div className="aboutsection3-content-container">
                <h1 className="aboutsection3-heading1">НАША <span>МИССИЯ </span> </h1>
                <div className="row">
                    <div className="col-lg-4 col-12 col-md-6">
                        <div className="ab-sec3-txtc">
                            <div className="ab-sec3-txt1">
                                <h3>Мы ломаем «грабли», на которых вы танцуете  </h3>
                                <p>С помощью КПТ можно посмотреть вглубь проблемы и разобраться, как прекратить повторяющееся негативное поведение или мысли.</p>
                  <p id="abs3-psub1">Депрессия, тревога, пищевые (и другие) зависимости, негативные</p>
                  <p id="abs3-psub"> мысли, неспособность чувствовать радость — это все симптомы того,</p>
                            </div>
                            <div className="ab-sec3-txt2" id="abs3-t2">
                            <h3>Мы поддерживаем после достижения результата </h3>
                                <p>В комплексе с поддерживающей психотерапией происходит преображение — уставшая женщина превращается в уверенную, энергичную, гибкую. В заботливых руках наших специалистов женщины заново раскрывают свою внутреннюю силу, обретают спокойствие и гармонию. 
</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-4 col-md-6 col-lg-4" id="three-imgs">
                        <div className="ab-sc-wm-1">
                        <RoundImg width="180px" height="180px" img={pic1}/>
                        </div>
                        <div className="ab-sc-wm-2">
                        <RoundImg width="180px" height="180px" img={pic3}/>
                        </div>
                        <div className="ab-sc-wm-3">
                        <RoundImg width="130px" height="130px" img={pic2}/>
                        </div>
              
                       
                      
                      
                    </div>
                    <div className="col-12 col-md-12 col-lg-4">
                    <div className="ab-sec3-txtc">
                    <div className="ab-sec3-txt3">
                    <h3>Мы работаем <br id="ab3-br"/> на долгосрочные изменения</h3>
                                <p>Психотерапия — это долгий и сложный путь. Мы готовы начать его с вами. Не важно, насколько сильно вы смогли запутаться: мы вместе распутаем клубок ваших проблем. </p>
                                <p>Отдохнувшая, уверенная в себе женщина умеет радоваться, прощать и сохранять спокойствие в любой</p>
             
                    </div>
                    <div className="ab-sec3-txt2" id="abs3-t1">
                            <h3>Мы поддерживаем после достижения результата </h3>
                                <p>В комплексе с поддерживающей психотерапией происходит преображение — уставшая женщина превращается в уверенную, энергичную, гибкую. В заботливых руках наших специалистов женщины заново раскрывают свою внутреннюю силу, обретают спокойствие и гармонию. 
</p>
                            </div>
                    </div>
                    </div>
                </div>
                </div></section>
    )
}