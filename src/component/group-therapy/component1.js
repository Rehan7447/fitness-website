import React, { Component } from "react";

export default function Component1(props) {
	const submitHandler = props.submit;
	function onSubmit(e) {
		e.preventDefault();
		submitHandler(true);
	}
	return (
		<div className="col-md-4 brown-area-c1">
			<div className="right-area-2-c1 text-center">
				<h2 className="right-heading ">
					Подпишитесь на Групповую Терапию от Фрейя
				</h2>

				<span className="small-text space-bottom ">
					Групповая терапия совершенно бесплатно
				</span>
				<span className="small-text space-bottom ">
					Пожалуйста, оставьте контактную информацию ниже:
				</span>
				<div className="textFeild-area">
					<input
						type="text"
						name="name"
						placeholder="Имя"
						className="text-feild"
					/>
					<input
						type="text"
						name="email"
						placeholder="Email"
						className="text-feild"
					/>
					<input
						type="text"
						name="telephone"
						placeholder="Телефон"
						className="text-feild"
					/>
				</div>
				<span className="small-text space-custom">
					Доступ к 5 групповым сессиям для каждого клиента. Зарегистрироваться
					на Групповую Терапию от Фрейя
				</span>
				<span className="small-text space-bottom ">
					Размер группы – 10 человек
				</span>
				<div className="flex-mid">
					<button className="button" size="sm" onClick={onSubmit}>
						Регистрация
					</button>
				</div>
			</div>
		</div>
	);
}
