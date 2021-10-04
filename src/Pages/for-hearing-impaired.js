import React, { Component, useState } from "react";
import Footer from "../component/footer";
import Header from "../component/header";
import "../css/for-hearing-impaired.css";
import pic1 from "../img/Footer/freya-logo.png";
import img1 from "../img/Special Clients/Deaf Clients/Hnet.com-image.gif";
import img2 from "../img/Special Clients/Deaf Clients/Freya_s-Sign-language 1.png";
import img3 from "../img/Special Clients/Deaf Clients/20210827_freya_illustrations 1.png";
import img4 from "../img/Special Clients/Deaf Clients/background-Img-1.png";
import img5 from "../img/Special Clients/Deaf Clients/background-Img-2.png";
import img6 from "../img/Special Clients/Deaf Clients/Clock-3.png";
import img7 from "../img/Special Clients/Deaf Clients/Frame 27.png";
import img8 from "../img/Special Clients/Deaf Clients/Vector 2.png";
import img9 from "../img/Special Clients/Deaf Clients/Group 488.png";

import logo1 from "../img/f-logo.svg";
import icon1 from "../img/Footer/Facebook.png";
import icon2 from "../img/Footer/VK.png";
import icon3 from "../img/Footer/Instagram.png";
export default function HearingImpaired() {
	return (
		<div style={{ backgroundColor: "#F7F1E3", overflow: "hidden" }}>
			<title>For hearing impaired</title>
			<meta name="description" content="Комфортные условия для усвоения материала, доступен сурдоперевод"></meta>
			<Header
				page="for-hearing-impaired"
				color="#F6EEE0"
				logo={pic1}
				paracolor="#000000"
				background="#0E4952"
				tcolor="#F6EEEE"
			/>
			<div className="row hi-section1">
				<div className="col-md-8">
					<div>
						<h1 className="sec1-heading">
							<span style={{ color: "#0E4952" }}>ФРЕЙЯ</span> БЕЗ ГРАНИЦ
						</h1>
					</div>
					<div className="sec1-text text-size">
						<span>Мы заботимся о женщинах, которые приходят к нам. </span>
					</div>
					<div className="sec1-green-text-area">
						<span className="sec1-green-text">Подумать о...</span>
						<img className="girl-gif-sm" src={img1} alt="loading..." />
					</div>
					<div>
						<span className="hi-sec1-text1">
							Поэтому мы предоставляем анонимную поддержку, сурдоперевод сессий
							для слабослышащих и помогаем даже в самых щекотливых ситуациях.
						</span>
						<span className="hi-sec1-text2">
							Мы не делаем различий между женщинами разных национальностей и
							сексуальной ориентации. Мы в равной мере чайлд-френдли и
							чайлдфри-френдли.
						</span>
					</div>
					<div className="sec1-text hi-sec1-text3">
						<span>
							Не позволяйте чувству стыда или стереотипам помешать вам получить
							профессиональную помощь.
						</span>
					</div>
				</div>
				<div className="col-md-4">
					<img className="girl-gif" src={img1} alt="loading..." />
				</div>
			</div>

			<div className="row hi-section2">
				<div className="hi-sec2-sm-head">
					БОЛЬШЕ ОБ <span style={{ color: "#51a095" }}>УСЛУГАХ</span>
				</div>
				<div className="col-md-4">
					<div className="pc-left-text">
						<div>
							<h2 className="hi-sec2-text1" style={{ fontWeight: "bold" }}>
								Сурдоперевод сессий со специалистами
							</h2>
						</div>
						<span className="hi-sec2-text2">
							По вашему желанию мы можем включить в программу услуги переводчика
							жестового языка.
						</span>
					</div>
				</div>
				<div className="col-md-4 pc-image-area">
					<img className="pc-image" src={img2} alt="loading..." />
				</div>
				<div className="col-md-4 pc-rightText-area">
					<div className="pc-right-text">
						<div>
							<h2 className="hi-sec2-text1" style={{ fontWeight: "bold" }}>
								Конфиденциальность
							</h2>
						</div>
						<span className="hi-sec2-text2">
							Мы понимаем, что даже с сурдопереводчиком информация о вас и вашей
							ситуации должна оставаться в тайне. Мы гарантируем 100%
							анонимность.
						</span>
					</div>
				</div>
			</div>
			<div className="row hi-section3">
				<div className="col-md-4 sec3-all-text-center">
					<img className="sec3-small-image1" src={img6} alt="loading..." />
					<h3 className="text-size sec3-head">75 минут / сессия</h3>
					<span className="text-size sec3-text">
						Увеличенное время сессии позволит раскрыть проблему.
					</span>
				</div>
				<div className="col-md-4 sec3-all-text-center">
					<img className="sec3-small-image2" src={img7} alt="loading..." />
					<h3 className="text-size sec3-head">Программы для ума</h3>
					<span className="text-size sec3-text">
						Для особенных клиентов стоимость программ увеличивается всего лишь
						на 1000 рублей в неделю.
					</span>
					<div className="hi-sec3-flex">
						<button className="sec3-btn" size="sm">
							Узнать
						</button>
					</div>
				</div>
				<div className="col-md-4 sec3-all-text-center">
					<img className="sec3-small-image3" src={img8} alt="loading..." />
					<h3 className="text-size sec3-head">Мы готовы ко всему</h3>
					<span className="text-size sec3-text">
						Каждый терапевт подготовлен и знает как помочь в разных ситуациях
					</span>
				</div>
			</div>
			<div className="hi-sec4-lg-backimg-area">
				<img className="hi-sec4-lg-backimg" src={img9} alt="loading..." />
			</div>
			<div className="hi-last-sec">
				<img className="hi-sec4-sm-backimg" src={img4} alt="loading..." />
				<div className="row sec4-body">
					<div className="col-md-6 sec4-content">
						<span className="sec-text-1">ДЛЯ ВАС ОТ</span>
						<span className="sec-text-2">ДУШИ</span>
						<span className="sec-text-3">
							Для вас мы предлагаем особенные расширенные программы.
						</span>
						<div>
							<img className="hi-sec4-sm-img" src={img3} alt="loading..." />
						</div>
						<span className="sec-text-4">3 600 ₽/сессия ~ 75 мин</span>
						<span className="sec-text-5">
							Каждая минута на сессии с терапевтом может быть решающей
						</span>
					</div>
					<div className="sec4-btn-area">
						<button className="sec4-btn" size="sm">
							Начать!
						</button>
					</div>
				</div>
				<img className="hi-sec4-sm-backimg" src={img5} alt="loading..." />
			</div>
			<div className="hi-footer">
				<Footer
					color="#F6EEE0"
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
		</div>
	);
}
