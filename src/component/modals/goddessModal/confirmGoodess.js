import React from "react";

export default function ConfirmGoodess(props) {
  return (
    <div className="ConfirmBody">
      <a onClick={props.click} className="closeModalConfirm">
        <i className="far fa-times-circle"></i>
      </a>
      <div className="confirmBodyGoodess">
      <p className="mobTextAboveImg">
        Представьте, что вы успеваете сделать все запланированное и даже больше.{" "}
      </p>
        <img src={"/assets/Programs/Confirmation/goodess.png"} className="modalMain modalMainGoodess"></img>
        <div className="confirmText confirmTextGoodess">
          <div>
            <p className="confirmP1 confirmP1dis">
              Представьте, что вы успеваете сделать все запланированное и даже
              больше.{" "}
            </p>
            <p className="confirmP2">
              Вы с легкостью справляетесь с рабочими и домашними делами, а еще у
              вас остается время на то, чтобы полежать в ванной, почитать книгу
              или даже начать писать ее.
            </p>
            <div className="logoTextContainer">
              <div className="confirmLogo confirmLogoGoodess">
                <img
                  src={"/assets/Programs/Confirmation/telegram.png"}
                  className="telegramModal"
                ></img>
                <img
                  src={"/assets/Footer/icons_Freya_VK1.png"}
                  className="vk1Modal"
                ></img>
                <img
                  src={"/assets/Footer/instagram1.png"}
                  className="insta1Modal"
                ></img>
              </div>
              <p className="logotextGoodess">Не забудьте подписаться на нас!</p>
            </div>
            <div className="modalBottomText">
              <img src={"/assets/Footer/Freya-Logo-Claor11.png"}></img>
              <p>
                Фрейя — это уникальный сервис комплексной поддержки для женщин.
                Мы поможем вам добиться желаемого.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
