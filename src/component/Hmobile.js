import React, { Component } from 'react';
import pic3 from '../img/pointing.png';
import pic2 from '../img/h51 (1).png'
import pic1 from '../img/h51 (2).png'
import pic4 from '../img/mb.png'
import t1 from '../img/Testimonial images/Testimonials-28.png';
import t2 from '../img/Testimonial images/Testimonial-3.png';
import RoundImg from './roundImage';
const Hmobilesection=()=>{
    return(
        <section className="Hmobilesection">
              <h1 className="hs5-heading1">БОЛЬШЕ ОБ <span>УСЛУГАХ</span> </h1>
              <h3 className="hs5-h3">Нам важна ваша безопасность</h3>
              <p className="hs5-para">Сессии проходят в закрытых онлайн-конференциях, ссылка на которые есть только у вас и психолога</p>
              <img src={pic3} className="hs5-imgpointing"/>
                   <p className="hs5-para2">Zoom-сессии</p>
                   <div className="col-md-6 hs5-img-container">
                        <img src={pic1} style={{width:"180%"}} className="hmb-img2"/>
                    </div>
                    <h3 className="hs5-h3" id="hmb-h3-2">Онлайн-запись</h3>
                    <p className="hs5-para">Сессии проходят в закрытых онлайн-конференциях, ссылка на которые есть только у вас и психолога</p>
                    <div className="col-md-6 hs5-img-container2" >
                        <img src={pic2} style={{width:"150%",marginTop:'3rem'}}/>
                    </div>
                    <h3 className="hs5-h3" id="hmb-h3-2" >ООбщайтесь с нами удобно</h3>
                    <p className="hs5-para" id="hmb-para3">Мы есть сразу на нескольких платформах: WhatsApp, Telegram, Intagram. Свяжитесь с нами!</p>
                    <div className=" hs6-imgcontainer">
                    <img src={pic4} style={{width:"100%"}}/>
                </div>
                <h3 className="hs5-h3" id="hmb-h3-21">Прямой контакт</h3>
                    <p className="hs5-para">Вы можете проконсультироваться, к какому специалисту лучше обратиться, написав нам в любой мессенджер</p>
                    <h3 className="hs5-h3" id="hmb-h3-22">2 600 ₽ за сессию</h3>
                    <p className="hs5-para" id="hmb-para4">Мы гордимся тем, что можем быть доступными. Наша цена за индивидуальную сессию — ниже средней на рынке</p>
                    <h3 className="hs5-h3" id="hmb-h3-23">Уникальная программа</h3>
                    <p className="hs5-para">Программы включают в себя не только услуги психологов, но и других wellness-специалистов для наиболее полной трансформации</p>
                    <div className="hs6-btncontainer">
                <button class="hs6-btn" >Узнать больше</button>
                </div>
                <h2 className="hsec7-h2">“ФРЕЙЯ — МОЙ <br/><span>СПАСАТЕЛЬНЫЙ</span> КРУГ”</h2>
                <div className="hs-mb-testimonials">
                    <div className="hs-mb-t-container">
                    <div className="hs7-simg">
                <RoundImg img={t1} width="64px" height="64px"/>
               
              </div>
              <div className="hs7-simg" id="hmb-timage2">
                <RoundImg img={t2} width="64px" height="64px"/>
                
              </div>
              <div className="hs7-simg" id="hmb-timage3" >
                <RoundImg img={t1} width="64px" height="64px"/>
                
              </div>
                    </div>
                    <p className="hsec7-p3">Дарья Газизова </p>
                <p className="hsec7-p3">35 лет - Мама</p>
                </div>
                <div class="card" style={{width:'90%',marginLeft:'1rem',marginTop:'1rem'}}>
  <div class="card-body">

    <p class="card-text">Фрейя стала для меня спасательным кругом для утопающего. Я поняла, что у меня нет никого любимей и ближе, чем я сама. Я переосмыслила свое отношение к детям и научилась обходиться без криков. Спасибо, Настя!!</p>
    <p class="card-text">«Вишенкой» на торте оказалось то, что я неожиданно для самой себя похудела на 5 кг благодаря незаметным изменениям в меню, которые придумала для меня диетолог!</p>
  </div>
</div>
        </section>
    )
}
export default Hmobilesection;

