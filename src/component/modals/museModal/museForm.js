import React from "react";
import ConfirmMuse from "./confirmMuse";

export default function MuseForm(props) {
  const submitHandler = props.submit;

  function onSubmit(e) {
    e.preventDefault();
    submitHandler(true);
  }
  return (
    <div className="museContent">
      <a onClick={props.click} className="closeModal">
        <i className="far fa-times-circle"></i>
      </a>
      <img
        src={"/assets/Footer/Freya-Logo-Claor11.png"}
        className="mobileModalLogo"
      />
      <div className="museHdiv">
        <p className="museHeading">
          Ждать нельзя <span>измениться</span>?
        </p>
        <p className="museHeadText">
          Узнайте больше о подписке и наших программах, связавшись с нами.
        </p>
      </div>
      <form className="modalForm">
        <div className="form-group">
          <input
            size="30"
            type="text"
            className="formInput"
            placeholder="Имя"
            required
          />
        </div>
        <div className="form-group">
          <input
            size="30"
            type="email"
            className="formInput"
            placeholder="Email"
            required
          />
        </div>
        <div className="form-group">
          <input
            size="30"
            type="text"
            className="formInput"
            placeholder="Телефон"
            required
          />
        </div>
        <button
          type="submit"
          className="museButton museSubmit"
          onClick={onSubmit}
        >
          Регистрация
        </button>
      </form>

      <div className="paraLine">
        <hr /> <span>или</span> <hr />
      </div>
      <div className="bottomButtons">
        <button
          className="museButton museGoogle"
          onClick={(event) =>
            window.open("https://accounts.google.com/signin/v2/identifier?flowName=GlifWebSignIn&flowEntry=ServiceLogin", 'popUpWindow','height=400,width=600,left=10,top=10,,scrollbars=yes,menubar=no')
          }
        >
          Войти через Google
        </button>
        <button
          className="museButton museFb"
          onClick={(event) =>
            window.open("https://www.facebook.com",'popUpWindow','height=400,width=600,left=10,top=10,,scrollbars=yes,menubar=no')
          }
        >
          Войти через Facebook
        </button>
      </div>
    </div>
  );
}
