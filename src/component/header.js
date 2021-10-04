import React, { useState } from "react";
import logo from "../img/f-logo.svg";

export default function Header(props) {
  const [showMenu, setMenu] = useState("hide");
  const [item1, setitem1] = useState("dropdown-item");
  const [item2, setitem2] = useState("dropdown-item drop-item-active");
  const [item3, setitem3] = useState("dropdown-item");
  const [nav, setnav] = useState("navbar navbar-expand-lg ");
  let btnstyle = "";

  function DropMenu() {
    showMenu == "hide" ? setMenu("show") : setMenu("hide");
  }
  function ChangeClass(id) {
    if (id == 1) {
      setitem1("dropdown-item drop-item-active");
      setitem2("dropdown-item");
      setitem3("dropdown-item");
    } else if (id == 2) {
      setitem1("dropdown-item");
      setitem2("dropdown-item drop-item-active");
      setitem3("dropdown-item");
    } else {
      setitem1("dropdown-item");
      setitem2("dropdown-item");
      setitem3("dropdown-item drop-item-active");
    }
  }

  return (
    <nav class="navbar navbar-expand-lg" style={{ background: props.color }}>
      <div class="container-fluid header-padd-lr">
        <a href="/">
          <img className="navbar-brand" src={props.logo} />
        </a>
        <div
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon">
            <i class="fa fa-bars fa-lg" aria-hidden="true"></i>
          </span>
        </div>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav   justify-content-between ">
            <li class="nav-item">
              {props.page == "about" ? (
                <a
                  class="nav-link active"
                  style={{ color: props.paracolor }}
                  aria-current="page"
                  href="/about"
                >
                  О нас
                </a>
              ) : (
                <a
                  class="nav-link "
                  aria-current="page"
                  href="/about"
                  style={{ color: props.paracolor }}
                >
                  О нас
                </a>
              )}
            </li>
            <li class="nav-item">
              {props.page == "program" ? (
                <a class="nav-link active" aria-current="page" href="/program">
                  Программы
                </a>
              ) : (
                <a
                  class="nav-link "
                  aria-current="page"
                  href="/program"
                  style={{ color: props.paracolor }}
                >
                  Программы
                </a>
              )}
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#" style={{ color: props.paracolor }}>
                Статьи
              </a>
            </li>

            <li class="nav-item dropdown">
              {props.page == "home" ? (
                <a
                  class="nav-link active"
                  aria-current="page"
                  href="#"
                  onClick={DropMenu}
                >
                  Инклюзивные программы
                </a>
              ) : (
                <a
                  class="nav-link "
                  onClick={DropMenu}
                  aria-current="page"
                  href="#"
                  style={{ color: props.paracolor }}
                >
                  Инклюзивные программы
                </a>
              )}

              {showMenu == "hide" ? (
                ""
              ) : (
                <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                  <a
                    class={item1}
                    onClick={() => ChangeClass(1)}
                    href="/for-hearing-impaired"
                  >
                    Для слабослышащих
                  </a>
                  <a
                    class={item2}
                    onClick={() => ChangeClass(2)}
                    href="/for-moms"
                  >
                    Для мам
                  </a>

                  <a
                    class={item3}
                    onClick={() => ChangeClass(3)}
                    href="/group-therapy"
                  >
                    Бесплатная терапия
                  </a>
                </div>
              )}
            </li>
          </ul>

          <button
            class="header-btn"
            style={{ backgroundColor: props.background, color: props.tcolor }}
          >
            Записаться
          </button>
        </div>
      </div>
    </nav>
  );
}
