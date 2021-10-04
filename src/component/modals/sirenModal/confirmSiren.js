import React from "react";

export default function ConfirmSiren(props) {
  return (
    <div className="ConfirmBody">
      <a onClick={props.click} className="closeModalConfirmSiren">
        <i className="far fa-times-circle"></i>
      </a>
      <p className="mobTextAboveImgSiren" >
        Вы с легкостью справляетесь с рабочими и домашними делами, а еще у вас
        остается время на то, чтобы полежать в ванной, почитать книгу или даже
        начать писать ее.
      </p>
      <img
        src={"/assets/Programs/Confirmation/siren.png"}
        className="modalMainImage"
      ></img>
      <div className="confirmText confirmTextSiren">
        <div>
          <p className="confirmP1">
            Представьте, что вы успеваете сделать все запланированное и даже
            больше.{" "}
          </p>
          <p className="confirmP2 confirmP2dis">
            Вы с легкостью справляетесь с рабочими и домашними делами, а еще у
            вас остается время на то, чтобы полежать в ванной, почитать книгу
            или даже начать писать ее.
          </p>
          <div className="logoTextContainer">
            <div className="confirmLogo">
              <img
                src={"/assets/Programs/Confirmation/Telegram-Dark.png"}
                className="telegramModal"
              ></img>
              <img src={"/assets/Footer/VK.png"} className="vk1Modal"></img>
              <img
                src={"/assets/Footer/Instagram.png"}
                className="insta1Modal"
              ></img>
            </div>
            <p>Не забудьте подписаться на нас!</p>
          </div>
          <div className="modalBottomText modalBottomTextSiren ">
            <img src={"/assets/Footer/Freya-logo-Pro.png"}></img>
            <p>
              Фрейя — это уникальный сервис комплексной поддержки для женщин. Мы
              поможем вам добиться желаемого.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
