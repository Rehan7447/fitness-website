import React, { Component } from 'react';
import pic1 from '../img/sliderVector.svg';
import pic2 from '../img/Testimonial images/Testimonials-28.png';
import t2 from '../img/Testimonial images/Testimonial-3.png'
import RoundImg from './roundImage';

import pic3 from '../img/Vector 6.svg';
import pic4 from '../img/Vector 5.svg';
import Slider from "react-slick";
import { Carousel } from 'react-responsive-carousel';
import pic5 from '../img/open.svg'
import pic6 from '../img/close.svg'
const Hsection7=()=>{
  
  function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block",position:'absolute',right:'10%',top:"100%" }}
        onClick={onClick}
      > <img src={pic4}/>  </div>
    );
  }
  
  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block",position:'absolute',top:"100%",left:'80%',color:"black" }}
        onClick={onClick}
      ><img src={pic3}/></div>
    );
  }
  const settings = {
    dots: false,
    arrows: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />

  };

    return(
      <>
        <section className="hsection7">
      <div class="container-fluid hsection7-center">
          <h2 className="hsec7-h2">“ФРЕЙЯ — МОЙ <span>СПАСАТЕЛЬНЫЙ</span> КРУГ”</h2>
          <p className="hsec7-p1">Почитайте отзывы сильных женщин о нас и решитесь на свою первую сессию.</p>
          <div className="hs7-slider-container">
          <Slider {...settings} 
          >
          <div className="hs7-img-container" >
              {/* <img src={pic1}/> */}
              <div className="hs7-subimg">
              <div className="hs7-simg">
                <RoundImg img={pic2} width="230px" height="230px"/>
                <p className="hsec7-p3">Дарья Газизова </p>
                <p className="hsec7-p3">35 лет - Мама</p>
              </div>
             <div className="hs7-paracontainer">
               <img src={pic5}/>
             <p className="hsec7-p2">Фрейя стала для меня спасательным кругом для утопающего. Я поняла, что у меня нет никого любимей и ближе, чем я сама. Я переосмыслила свое отношение к детям и научилась обходиться без криков. Спасибо, Настя!!</p>
             <div className="hsec7-p2">
<p id="hs7p2">
«Вишенкой» на торте оказалось то, что я неожиданно для самой себя похудела на 5 кг благодаря незаметным изменениям в меню, которые придумала для меня диетолог!
  </p> <img src={pic6}/>  </div>

             
             </div>
             </div>
             <div></div>
          </div>

          <div className="hs7-img-container" >
              {/* <img src={pic1}/> */}
              <div className="hs7-subimg">
              <div className="hs7-simg">
                <RoundImg img={t2} width="230px" height="230px"/>
                <p className="hsec7-p3">Тиона Салимуллина </p>
                <p className="hsec7-p3">18 лет - Студентка</p>
              </div>
             <div className="hs7-paracontainer">
               <img src={pic5}/>
             <p className="hsec7-p2">Это мой первый опыт работы с психотерапевтом, и все прошло просто супер! Терапевт на первой же сессии выявила корень проблемы из «букета» моих переживаний. Мы выбрали наиболее удобный для меня формат занятий — онлайн. Не могу также не отметить виртуозную работу лайф коуча, который помог мне избавиться от излишней стеснительности — это очень помогает во время учебы…
</p>
             <div className="hsec7-p2">
<p id="hs7p2">
Первая же сессия с психологом открыла мне глаза — я просто плакала. Психотерапевт впервые заставила меня задуматься, чего я — именно я, а не кто-то другой — хочу от жизни для себя.

  </p> <img src={pic6}/>  </div>

             
             </div>
             </div>
             <div></div>
          </div>
         


       </Slider>
          </div>
          </div>
         
          </section>
          
          </>
    )
}
export default Hsection7;