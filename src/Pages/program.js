import React, { Component } from "react";
import Header from "../component/header";
import ProgramSection1 from "../component/programSection1";
import pic1 from "../img/Footer/Freya-Logo-Claor.png";
import bg from "../img/Freyas-Program-background-2.png";
import MuseModal from "../component/modals/museModal/museModal";
import SirenModal from "../component/modals/sirenModal/sirenModal";
import GoodessModal from "../component/modals/goddessModal/goodessModal";
import "../css/program.css";
import Footer from "../component/footer";
import logo1 from "../img/Freya-Logo.svg";
import icon1 from "../img/Footer/f-l1.png";
import icon2 from "../img/Footer/i-l1.png";
import icon3 from "../img/Footer/insta-1.png";
import bg2 from "../img/FreyaPrograms-Mv.png";
export default function Program() {
  return (
    <>
    <title>Programs</title>
      <Header page="program" color=" #0E4952" logo={pic1} paracolor="#F6EEE0" />
      <div className="program-all-container">
        {/* <div className="programs-bg"></div> */}
        <img src={bg} className="programs-bg" id="pimg1" />
        <img src={bg2} className="programs-bg" id="pimg2" />
        <div className="program-container">
          <h2 className="program-h2">ПОПРОБУЙТЕ СПА ДЛЯ</h2>
          <h1 className="program-h1">ДУШИ И УМА</h1>
          <p className="program-p1">
            присоединяйтесь к программе цельной психологической поддержки для
            женщин
          </p>
          <h2 className="program-h21" id="ph22">
            Мы возвращаем женщинам вкус к жизни,
          </h2>
          <div className="program-container1">
            <h2 className="program-h21" id="ph21">
              Мы возвращаем женщинам вкус к жизни,
            </h2>
            <h2 className="program-h3">
              заботясь об их психологическом и физическом здоровье.
            </h2>
          </div>
          <p className="program-p2">
            Цельный подход Фрейя за 10 недель позволяет преобразить не только
            ум, но и тело. При этом не нужно платить за всю программу сразу —
            подписка действует понедельно.
          </p>
          <section className="program-section3">
            <p className="prm-s3-pu">
              Наши программы созданы, чтобы вас побаловать. Мы думаем, что вы
              этого заслуживаете!
            </p>
            <div class="card">
              <div class="card-body">
                <h5 class="card-title">МУЗА</h5>

                <p className="card-text">Сфокусируйтесь на главном</p>
                <ul>
                  <li className="card-text">10 сессий терапии </li>
                  <li className="card-text">10 занятий йогой </li>
                </ul>
                <p>В подарок:</p>
                <ul>
                  <li className="card-text">
                    3 сессии с американским лайф-коучем{" "}
                  </li>
                </ul>
                <p className="program-b-text">3 950 ₽/неделя</p>
                <div className="program-music-btn">
                  <MuseModal />
                </div>
              </div>
            </div>
            <p className="prm-s3-pu1">
              Наши программы созданы, чтобы вас побаловать. Мы думаем, что вы
              этого заслуживаете!
            </p>
          </section>
          <section className="program-section4">
            <p className="prm-s4-pu">
              Наши программы созданы, чтобы вас побаловать. Мы думаем, что вы
              этого заслуживаете!
            </p>
            <div class="card">
              <div class="card-body">
                <h5 class="card-title">МУЗА</h5>

                <p className="card-text1">Сфокусируйтесь на главном</p>
                <ul>
                  <li className="card-text1">10 сессий терапии </li>
                  <li className="card-text1">10 занятий йогой </li>
                </ul>
                <p className="card-text1">В подарок:</p>
                <ul>
                  <li className="card-text1">
                    3 сессии с американским лайф-коучем{" "}
                  </li>
                </ul>
                <p className="program-b-text1">3 950 ₽/неделя</p>
                <div className="program-music-btn">
                  <SirenModal />
                </div>
              </div>
            </div>
          </section>
          <section className="program-section3" id="ps5">
            <p className="prm-s3-pu">
              Наши программы созданы, чтобы вас побаловать. Мы думаем, что вы
              этого заслуживаете!
            </p>
            <div class="card">
              <div class="card-body">
                <h5 class="card-title">МУЗА</h5>

                <p className="card-text">Сфокусируйтесь на главном</p>
                <ul>
                  <li className="card-text">10 сессий терапии </li>
                  <li className="card-text">10 занятий йогой </li>
                </ul>
                <p>В подарок:</p>
                <ul>
                  <li className="card-text">
                    3 сессии с американским лайф-коучем{" "}
                  </li>
                </ul>
                <p className="program-b-text">3 950 ₽/неделя</p>
                <div className="program-music-btn">
                  <GoodessModal />
                </div>
              </div>
            </div>
            <p className="prm-s5-pu1">
              Наши программы созданы, чтобы вас побаловать. Мы думаем, что вы
              этого заслуживаете!
            </p>
          </section>
          <section className="program-sec6">
            <div className="program-sec6-content">
              <h3 className="program-sec6-h3">Ждать нельзя измениться? </h3>
              <p className="program-sec6-p1">
                Вы выбираете, где ставить запятую. <br /> Узнайте больше о
                подписке и наших программах, связавшись с нами.
              </p>
              <div className="program-sec6-btncontainer">
                <button class="program-sec6-btn1">Имя</button>
                <button class="program-sec6-btn1">Телефон</button>
              </div>
              <div className="program-sec6-btncontainer">
                <button class="program-sec6-btn1">Email</button>
                <button class="program-sec6-btn1">Время</button>
              </div>
              <div className="hs10-btncontainer">
                <button class="ps6-bottombtn">Отправить</button>
              </div>
            </div>
          </section>
          <h1 className="ps6-bottom-heading">
            Вы — сильная, уверенная, красивая. Мы — преданные, заботливые,
            доступные.
          </h1>
          <div className="pg-footer">
            <Footer
              color=""
              logo={logo1}
              paracolor="white"
              icon1={icon1}
              icon2={icon2}
              icon3={icon3}
              iconwidth="40px"
              iconheight="40px"
              margintop="0rem"
              page="program"
            />
          </div>
        </div>
      </div>
    </>
  );
}
