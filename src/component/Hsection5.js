import React, { Component } from "react";

import pic2 from "../img/h51 (1).png";
import pic1 from "../img/h51 (2).png";
import pic3 from "../img/pointing.png";
export default function Hsection5() {
  return (
    <section className="hsection5">
      <div className="container-fluid ">
        <h1 className="hs5-heading1">
          БОЛЬШЕ ОБ <span>УСЛУГАХ</span>{" "}
        </h1>
        <div className="row">
          <div className="col-md-6 hs5-hcontainer">
            <h3 className="hs5-h3">Уникальная программа</h3>
            <p className="hs5-para">
              Программы включают в себя не только услуги психологов, но и других
              wellness-специалистов для наиболее полной трансформации
            </p>
            <img src={pic3} className="hs5-imgpointing" />
            <p className="hs5-para2">Zoom-сессии</p>
          </div>
          <div className="col-md-6 hs5-img-container">
            <img src={pic1} style={{ width: "180%" }} />
          </div>
        </div>
        <div className="row">
          <div className="col-md-6 hs5-img-container2">
            <img src={pic2} style={{ width: "180%" }} />
          </div>
          <div className="col-md-6 hs5-hcontainer2">
            <h3 className="hs5-h3">Уникальная программа</h3>
            <p className="hs5-para">
              Программы включают в себя не только услуги психологов, но и других
              wellness-специалистов для наиболее полной трансформации
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
