// dependencies
import React, { Component } from "react";

// importing components
import "./Features.css";

class Features extends Component {
	render() {
		return (
			<div className="features">
				<div class="row">
					<div class="col-1-of-4">
						<div class="feature-box">
							<i class="feature-box__icon fas fa-globe"></i>
							<h3 class="heading-tertiary u-margin-bottom-small">Global Experts</h3>
							<p class="feature-box__text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam amet cumque voluptatum animi quis assumendat.</p>
						</div>
					</div>

					<div class="col-1-of-4">
						<div class="feature-box">
							<i class="feature-box__icon fas fa-clock"></i>
							<h3 class="heading-tertiary u-margin-bottom-small">24 hour monitoring</h3>
							<p class="feature-box__text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam amet cumque voluptatum animi quis assumendat.</p>
						</div>
					</div>

					<div class="col-1-of-4">
						<div class="feature-box">
							<i class="feature-box__icon fas fa-tint"></i>
							<h3 class="heading-tertiary u-margin-bottom-small">Water efficiency</h3>
							<p class="feature-box__text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam amet cumque voluptatum animi quis assumendat.</p>
						</div>
					</div>

					<div class="col-1-of-4">
						<div class="feature-box">
							<i class="feature-box__icon fas fa-heart"></i>
							<h3 class="heading-tertiary u-margin-bottom-small">Healthier lawns</h3>
							<p class="feature-box__text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam amet cumque voluptatum animi quis assumendat.</p>
						</div>
					</div>
				</div>
			</div>
		)
	}
}

export default Features;