import React from "react";

export default function ModalFooter(props) {
  return (
    <footer className="modalFooter">
      <div className="logoTextContainerFooter">
        <div className={props.type}>
          <img
            src={props.fb}
            className="fbModalFooter"
          ></img>
          <img
            src={props.vk}
            className="vk1ModalFooter"
          ></img>
          <img
            src={props.insta}
            className="insta1ModalFooter"
          ></img>
        </div>
        <p>Не забудьте подписаться на нас!</p>
      </div>
      <p className="modalFooterText">
        Важно! Мы — не скорая помощь. Если вы находитесь в опасности и что-то
        (кто-то) угрожает вашей жизни и здоровью, обратитесь к
        <span> этим организациям.</span>
      </p>
      <p className="modalFooterBottomText">Freya by Sobaki Pavlova</p>
    </footer>
  );
}
