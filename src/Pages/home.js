import React from "react";
import Header from "../component/header";
import "../css/Home.css";
import Footer from "../component/footer";
import Strip from "../component/strip";
import Hsection1 from "../component/Hsection1";
import Hsection2 from "../component/Hsection2";
import Hsection3 from "../component/Hsection3";
import Hsection4 from "../component/Hsection4";
import Hsection5 from "../component/Hsection5";
import Hsection6 from "../component/Hsection6";
import Hsection7 from "../component/Hsection7";
import Hsection8 from "../component/Hsection8";
import Hsection9 from "../component/Hsection9";
import Hsection10 from "../component/Hsection10";
import Hmobilesection from "../component/Hmobile";
import pic1 from "../img/Footer/freya-logo.png";
export default function Home() {
  return (
    <div>
      <title>Home</title>
      <meta name="description" content="Избавляться от лишнего веса здорово с Толстым! Здесь сбрасывают от 4 до 71 кг" />
      <Header
        page="home"
        color="#F6EEE0"
        logo={pic1}
        paracolor="#000000"
        background="#0E4952"
        tcolor="#F6EEEE"
      />
      <Strip />
      <Hsection1 />
      <Hsection2 />
      <Hsection3 />
      <Hsection4 />
      <Hmobilesection />
      <Hsection5 />
      <Hsection6 />
      <Hsection7 />
      <Hsection8 />
      <Hsection9 />
      <Hsection10 />
    </div>
  );
}
