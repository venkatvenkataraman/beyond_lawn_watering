// dependencies
import React, { Component } from "react";

// importing components
import "./Packages.css";

class Packages extends Component {
	render() {
		return (
			<section className="section-tours">
				<div className="u-center-text u-margin-bottom-big">
					<h2 className="heading-secondary">
						Popular Packages
					</h2>
				</div>

				<div className="row">
					<div className="col-1-of-3">
						<div className="card">
							<div className="card__side card__side--front">
								<div className="card__picture card__picture--1">&nbsp;</div>
								<div className="card__heading">
									<h4>
										<span className="card__heading--span card__heading--span--1">Homeowners</span>
									</h4>
								</div>
								<div className="card__details">
									<ul>
										<li>Feature 1</li>
										<li>Feature 2</li>
										<li>Feature 3</li>
										<li>Feature 4</li>
										<li>Feature 5</li>
									</ul>
								</div>
							</div>
							<div className="card__side card__side--back card__side--back-1">
								<div className="card__cta">
									<div className="card__price-box">
										<p className="card__price-only">Starting at</p>
										<p className="card__price-value">$899</p>
									</div>
									<a href="#" className="btn btn--white">Book now</a>
								</div>
							</div>
						</div>
					</div>

					<div className="col-1-of-3">
						<div className="card">
								<div className="card__side card__side--front">
									<div className="card__picture card__picture--2">&nbsp;</div>
									<div className="card__heading">
										<h4>
											<span className="card__heading--span card__heading--span--2">Businesses</span>
										</h4>
									</div>
									<div className="card__details">
										<ul>
										<li>Feature 1</li>
										<li>Feature 2</li>
										<li>Feature 3</li>
										<li>Feature 4</li>
										<li>Feature 5</li>
										</ul>
									</div>
								</div>
								<div className="card__side card__side--back card__side--back-2">
									<div className="card__cta">
										<div className="card__price-box">
											<p className="card__price-only">Starting at</p>
											<p className="card__price-value">$1499</p>
										</div>
										<a href="#" className="btn btn--white">Book now</a>
									</div>
								</div>
							</div>
					</div>

					<div className="col-1-of-3">
						<div className="card">
								<div className="card__side card__side--front">
									<div className="card__picture card__picture--3">&nbsp;</div>
									<div className="card__heading">
										<h4>
											<span className="card__heading--span card__heading--span--3">Parks</span>
										</h4>
									</div>
									<div className="card__details">
										<ul>
										<li>Feature 1</li>
										<li>Feature 2</li>
										<li>Feature 3</li>
										<li>Feature 4</li>
										<li>Feature 5</li>
										</ul>
									</div>
								</div>
								<div className="card__side card__side--back card__side--back-3">
									<div className="card__cta">
										<div className="card__price-box">
											<p className="card__price-value">Contact for Quote</p>
										</div>
										<a href="#" className="btn btn--white">Book now</a>
									</div>
								</div>
							</div>
					</div>

				</div>
				<div className="u-center-text u-margin-top-huge">
					<a href="#" className="btn btn--green">Discover all packages</a>
				</div>

			</section>
		)
	}
}

export default Packages;