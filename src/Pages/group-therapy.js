import React, { Component, useState } from "react";
import Footer from "../component/footer";
import Component1 from "../component/group-therapy/component1";
import Component2 from "../component/group-therapy/component2";
import Header from "../component/header";
import pic1 from "../img/Footer/freya-logo.png";
import "../css/group-therapy.css";
import img1 from "../img/Special Clients/Free Therapy/background-Img-1.png";
import img2 from "../img/Special Clients/Group Therapy/20210917_F_groupt_Mesa de trabajo 1.png";
import img3 from "../img/Special Clients/Group Therapy/tick.svg";

import logo1 from "../img/f-logo.svg";
import icon1 from "../img/Footer/Facebook.png";
import icon2 from "../img/Footer/VK.png";
import icon3 from "../img/Footer/Instagram.png";

export default function Grouptherapy() {
  const [submit, setSubmit] = useState(false);
  return (
    <div>
      <title>Group Therapy</title>
      <meta
        name="description"
        content="Толстой предлагает групповую терапию по доступным ценам онлайн. Психотерапевт онлайн."
      ></meta>
      <Header
        page="group-therapy"
        color="#F6EEE0"
        logo={pic1}
        paracolor="#000000"
        background="#0E4952"
        tcolor="#F6EEEE"
      />
      <div>
        <img className="back-image" src={img1} />
      </div>
      <div className="overflow body-image">
        <div className="row head-area">
          <div className="col-12 text-center">
            <h1 style={{ fontWeight: "bold" }}>ГРУППОВАЯ ТЕРАПИЯ</h1>
            <p className="para1">
              Групповая терапия Фрейя даст вам поддержку и напомнит, что не вы
              одни сталкиваетесь с трудностями. Она поможет вам развить навыки
              коммуникации и социальной адаптации, научит говорить о своих
              проблемах и принимать критику со стороны. Слушая других людей со
              схожими проблемами, вы будете лучше понимать самих себя. Групповая
              терапия Фрейя может стать началом вашего пути исцеления. Вот её
              основные преимущества:
            </p>
          </div>
        </div>

        <div className="row right-padding">
          <div className="col-md-8 column-flex">
            <div className="group-image-area">
              <img className="group-image" src={img2} />
            </div>
            <div className="row text-area">
              <div className="col-md-4 right-space">
                <span className="big-text">
                  Групповая терапия дает поддержку.
                </span>
                <span className="small-text">
                  Поддержка и советы, которые вы получите в группе, помогут вам
                  справиться с любыми трудностями.
                </span>
              </div>
              <div className="col-md-4 left-space">
                <span className="big-text">
                  Групповая терапия доступна бесплатно.
                </span>
                <span className="small-text">
                  Ваше психическое здоровье важно для нас. Мы предоставляем
                  групповую терапию совершенно бесплатно.
                </span>
              </div>
              <div className="col-md-4 right-space">
                <span className="big-text">
                  Группы учат вас лучше понимать себя.
                </span>
                <span className="small-text">
                  Вы увидите свое отражение в других людях, что поможет вам
                  оценить самих себя.
                </span>
              </div>
            </div>
          </div>
          {!submit ? (
            <Component1 submit={setSubmit} />
          ) : (
            <Component2 icon={img3} />
          )}
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
