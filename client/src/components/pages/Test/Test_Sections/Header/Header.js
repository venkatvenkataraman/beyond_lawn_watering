// dependencies
import React, { Component } from "react";

// importing components
import "./Header.css";

class Header extends Component {
	render() {
		return (
			<div className="header">
				<div className="bg-video">
					<video className="bg-video__content" autoPlay muted loop>
						<source src="./assets/images/home_header.mp4" type="video/mp4" />
						<source src="./assets/images/home_header.webm" type="video/webm" />
						Your browser is not supported
					</video>
				</div>

				<div className="header__text-box">
					<h1 className="heading-primary">
						<span className="heading-primary--main">EcoScape</span>
						<span className="heading-primary--sub">Your grass will always be greener</span>
					</h1>

					<a href="#" className="btn btn--white btn--animated">Learn More</a>
				</div>
			</div>
		)
	}
}

export default Header;