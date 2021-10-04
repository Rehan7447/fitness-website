import React, { Component } from "react";
import Footer from "../component/footer";
import Header from "../component/header";
import img1 from "../img/Special Clients/Free Therapy/background-Img-1.png";
import img2 from "../img/Special Clients/Free Therapy/image.png";
import "../css/free-therapy.css";
import pic1 from "../img/Footer/freya-logo.png";
import logo1 from "../img/f-logo.svg";
import icon1 from "../img/Footer/Facebook.png";
import icon2 from "../img/Footer/VK.png";
import icon3 from "../img/Footer/Instagram.png";

export default function Freetherapy() {
	return (
		<div>
			<title>Free therapy</title>
			{/* <Header style={{ paddingBottom: "0px" }} /> */}
			<Header
				page="for-hearing-impaired"
				color="#F6EEE0"
				logo={pic1}
				paracolor="#000000"
				background="#0E4952"
				tcolor="#F6EEEE"
			/>
			<div>
				<img className="back-image" src={img1} />
			</div>
			<div className="body-area">
				<div className="row">
					<div className="col-md-6">
						<h1 style={{ fontWeight: "bold" }}>Контакты кризисных центров</h1>

						<div className="para-div">
							<p className="bold-text space">
								Неотложная психологическая помощь в Москве:
							</p>
							<p className="text">051 – с городского телефона</p>
							<p className="text space">8 (495) 051 – с мобильного телефона</p>
							<p className="bold-text">
								«Московская служба психологической помощи населению»
								Департамента социальной защиты населению г. Москвы:
							</p>
							<p className="text space">+7 (499) 173-09-09</p>
							<p className="bold-text">
								Экстренная медико-психологическая помощь в кризисных ситуациях:
							</p>
							<p className="text space">+7 (499) 791-20-50</p>
							<p className="bold-text">
								«Телефон доверия» экстренной психологической помощи:
							</p>
							<p className="text space">+7 (495) 575-87-70</p>
							<p className="bold-text">
								Независимый благотворительный центр помощи пережившим
								сексуальное насилие:
							</p>
							<p className="text space">+7 (499) 901-02-01</p>
							<p className="bold-text">
								«Телефон доверия» по вопросам наркомании, ВИЧ/СПИДа:
							</p>
							<p className="text space">+7 (495) 421-55-55</p>
							<p className="bold-text">
								Кризисный центр помощи женщинам и детям:
							</p>
							<p className="text">+7 (499) 977-20-10 (круглосуточно)</p>
						</div>
						<div className="para-div-lower">
							<p className="bold-text space">
								Кризисный центр помощи женщинам и детям:
							</p>
							<a href={"https://krizis-centr.ru/"} className="link">
								https://krizis-centr.ru/
							</a>
							<p className="bold-text hide" style={{ paddingTop: "30px" }}>
								Вы — важны. У вас все получится. Это ваш знак.
							</p>
						</div>
					</div>
					<div className="col-md-6 flex brown-area">
						<div className="right-area">
							<div className="upper-area">
								<h2 className="bold-text-2 space">
									<span style={{ color: "#51a095" }}>Фрейя</span>— онлайн-сервис
									женской психологической поддержки
								</h2>
								<ul>
									<li className="text-2">Профессиональная терапия по Zoom</li>
									<li className="text-2">
										Программы для цельного преображения ума и тела
									</li>
									<li className="text-2">Онлайн-запись по доступной цене</li>
								</ul>
							</div>

							<div className="image-area">
								<img className="image2" src={img2} />
							</div>

							<div className="flex-mid">
								<button className="button" size="sm">
									Начать
								</button>
							</div>
						</div>
					</div>
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
