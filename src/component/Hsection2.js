import React, { Component } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import pic1 from "../img/Benefit 1.png";
import pic2 from "../img/Benefit 2.png";
import pic3 from "../img/Benefit 3.png";
import pic4 from "../img/Benefit 4.png";
import pic5 from "../img/Benefit 5.png";

import Slider from "react-slick";
import { Carousel } from 'react-responsive-carousel';
const Hsection2 = () => {
  return (
      <>
    <section className="hsection2">
      <div className="container-fluid hsection2-padd-lr">
        <div className="hsection2-container">
          <h2 className="hsection2-heading">
            ПСИХОТЕРАПИЯ <span>— ЭТО ПРО ПРИНЯТИЕ И ПОДДЕРЖКУ </span>{" "}
          </h2>
          <p>
            Психотерапевт — не родитель, подруга или соседка. Он никогда не
            осудит.
          </p>
        </div>
        <div className="row d-flex hs2-allimg-container" id="hs2imgc">
          <div className="hs2-img-container col-4">
            <img src={pic1} />
            <p>Перестаньте откладывать на завтра и исполните мечты </p>
          </div>
          <div className="hs2-img-container col-4">
            <img src={pic2} />
            <p>Перестаньте откладывать на завтра и исполните мечты </p>
          </div>
          <div className="hs2-img-container col-4">
            <img src={pic3} />
            <p>Перестаньте откладывать на завтра и исполните мечты </p>
          </div>
          <div className="hs2-img-container col-4" id="hs-img4">
            <img src={pic4} />
            <p>Перестаньте откладывать на завтра и исполните мечты </p>
          </div>
          <div className="hs2-img-container col-4">
            <img src={pic5} />
            <p>Перестаньте откладывать на завтра и исполните мечты </p>
          </div>
        </div>
        <div className="hs2-slider-container"></div>
        <button className="hsection2-btn">Поговорим?</button>
      </div>
     
    </section>
    <Carousel showThumbs="false">
                <div>
                    <img src={pic1} />
                   <p className="hs2-imgdata">Перестаньте откладывать на завтра и исполните мечты </p>
                </div>
                <div>
                    <img src={pic2} />
                   <p className="hs2-imgdata">Обретите уверенность в 
своем будущем без тревоги</p>
                </div>
                <div>
                    <img src={pic3} />
                    <p className="hs2-imgdata">Создайте здоровые 
долгосрочные отношения</p>
                </div>
                <div>
                    <img src={pic4} />
                    <p className="hs2-imgdata">Примите свои недостатки и влюбитесь в себя сейчас</p>
                </div>
                <div>
                    <img src={pic5} />
                    <p className="hs2-imgdata">Научитесь отстаивать личные границы и говорить «нет»</p>
                </div>
            </Carousel>
    </>
  );
};
export default Hsection2;
