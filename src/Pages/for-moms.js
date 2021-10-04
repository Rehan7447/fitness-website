import React, { Component } from "react";
import Footer from "../component/footer";
import Header from "../component/header";
import img1 from "../img/Special Clients/Mom_s Space/20210827_freya_illustrations_coral_nobg-06.png";
import img2 from "../img/Special Clients/Mom_s Space/20210826_freya_closeup_brown_nobg.png";
import img2_2 from "../img/Special Clients/Mom_s Space/20210826_freya_closeup_teal_bg.png";
import img3 from "../img/Special Clients/Mom_s Space/Freya_s-articles.png";
import upper_img from "../img/Special Clients/Mom_s Space/upper Rectangle.png";
import lower_img from "../img/Special Clients/Mom_s Space/lower Rectangle.png";
import "../css/for-moms.css";
import logo1 from "../img/f-logo.svg";
import icon1 from "../img/Footer/Facebook.png";
import icon2 from "../img/Footer/VK.png";
import icon3 from "../img/Footer/Instagram.png";
import logo from "../img/f-logo.svg"

export default function Freetherapy() {
  return (
    <div>
		<title>For moms</title>
      <meta
        name="description"
        content="Мама? Предлагаем адаптированные программы для восстановления фигуры
        после рождения детей"
      ></meta>
      <Header style={{ paddingBottom: "0px" }} logo={logo} />
      <div className="fm-main-body">
        <div className="row fm-sec1">
          <div className="col-12">
            <h1>
              <h1 className="fm-sec1-head1">ПРОСТРАНСТВО</h1>
              <h1 className="fm-sec1-head2">ДЛЯ МАМЫ</h1>
              <span className="fm-sec1-text">
                БУДЬ ГОТОВА ... Сейчас мы работаем над этим
              </span>
            </h1>
          </div>
        </div>
        <div className="row fm-sec2">
          <div className="col-12 fm-sec2-center">
            <img className="sec2-upper-img" src={upper_img} alt="loading..." />
            <span className="fm-sec1-text">
              а пока посмотрите, что у нас для вас есть :
            </span>
          </div>
        </div>
        <div className="row fm-sec3 bring-top">
          <div className="col-md-4">
            <div className="fm-sec3-revcol">
              <div className="fm-sec3-img1-area">
                <img className="fm-sec3-img1" src={img1} alt="loading..." />
              </div>
              <h2 className="fm-sec3-text">ОНЛАЙН ТЕРАПИЯ</h2>
            </div>
            <div className="fm-sec3-btn-area">
              <button className="fm-sec3-btn" size="sm">
                Подробнее
              </button>
            </div>
          </div>
          <div className="col-md-4">
            <div className="fm-sec3-revcol">
              <div className="fm-sec3-img2-area">
                <img
                  className="fm-sec3-img1 show-bg"
                  src={img2}
                  alt="loading..."
                />
                <img
                  className="fm-sec3-img1 hide-bg"
                  src={img2_2}
                  alt="loading..."
                />
              </div>
              <h2 className="fm-sec3-text2">ПРОГРАММЫ ТРАНСФОРМАЦИИ</h2>
            </div>
            <div className="fm-sec3-btn-area2">
              <button className="fm-sec3-btn" size="sm">
                Подробнее
              </button>
            </div>
          </div>
          <div className="col-md-4">
            <div className="fm-sec3-revcol">
              <div className="fm-sec3-img3-area">
                <img
                  className="sec2-upper-img"
                  src={lower_img}
                  alt="loading..."
                />
                <img className="fm-sec3-img3" src={img3} alt="loading..." />
              </div>
              <h2 className="fm-sec3-text">СТАТЬИ</h2>
            </div>
            <div className="fm-sec3-btn-area">
              <button className="fm-sec3-btn" size="sm">
                Подробнее
              </button>
            </div>
          </div>
        </div>
      </div>
      <Footer
        color="#fff"
        logo={logo1}
        paracolor="#000000"
        icon1={icon1}
        icon2={icon2}
        icon3={icon3}
        iconwidth="70px"
        iconheight="70px"
        margintop="-1rem"
      />
    </div>
  );
}
