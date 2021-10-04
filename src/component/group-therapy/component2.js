import React, { Component } from "react";

export default function Component2(props) {
	return (
		<div className="col-md-4 brown-area-c2">
			<div className="right-area-2-c2 text-center">
				<h2 className="right-heading ">
					Подпишитесь на Групповую Терапию от Фрейя
				</h2>

				<span className="small-text space-bottom ">
					Групповая терапия совершенно бесплатно
				</span>

				<div className="tick-box">
					<div className="tick-circle">
						<img src={props.icon} style={{ width: "25px" }} />
					</div>
				</div>

				<span className="small-text space-custom">
					Вы зарегистрированы! Мы отправим вам письмо с дальнейшими инструкциями
					и действиями на почту
				</span>
			</div>
		</div>
	);
}
