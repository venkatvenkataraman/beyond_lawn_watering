// dependencies
import React, { Component } from "react";

// importing components
import "./Footer.css";

class Footer extends Component {
	render() {
		return (
			<footer className="footer">
				<div className="row">
					<div className="col-1-of-2">
						<div className="footer__navigation">
							<ul className="footer__list">
								<li className="footer__item"><a href="#" className="footer__link">Company</a></li>
								<li className="footer__item"><a href="#" className="footer__link">Contact us</a></li>
								<li className="footer__item"><a href="#" className="footer__link">Careers</a></li>
								<li className="footer__item"><a href="#" className="footer__link">Privacy policy</a></li>
								<li className="footer__item"><a href="#" className="footer__link">Terms</a></li>
							</ul>
						</div>
					</div>
					<div className="col-1-of-2">
						<p className="footer__copyright">
							&copy; 2018 by ECOSCAPE. Design guidance by Jonas Schmedtmann.
						</p>
					</div>
				</div>
			</footer>
		)
	}
}

export default Footer;