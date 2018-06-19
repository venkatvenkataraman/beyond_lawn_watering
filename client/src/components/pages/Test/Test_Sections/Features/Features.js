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
							<h3 class="heading-tertiary u-margin-bottom-small">Global experts</h3>
							<p class="feature-box__text">EcoScape employs the top minds from around the globe to deliver the best solutions to you, no matter where on the planet your lawn is.</p>
						</div>
					</div>

					<div class="col-1-of-4">
						<div class="feature-box">
							<i class="feature-box__icon fas fa-clock"></i>
							<h3 class="heading-tertiary u-margin-bottom-small">Data analysis</h3>
							<p class="feature-box__text">The key to total lawn domination is data. And lots of it. We've developed tools in order to collect nad use that data for your lawn.</p>
						</div>
					</div>

					<div class="col-1-of-4">
						<div class="feature-box">
							<i class="feature-box__icon fas fa-tint"></i>
							<h3 class="heading-tertiary u-margin-bottom-small">Water efficiency</h3>
							<p class="feature-box__text">More water =/= Healthier lawn. We keep the moisture levels in the soil that fuels your grass at optimal levels.</p>
						</div>
					</div>

					<div class="col-1-of-4">
						<div class="feature-box">
							<i class="feature-box__icon fas fa-heart"></i>
							<h3 class="heading-tertiary u-margin-bottom-small">Healthier lawns</h3>
							<p class="feature-box__text">Combining all our techniques with data analysis, not only will your lawn be healthier, it will also be happier. So will you.</p>
						</div>
					</div>
				</div>
			</div>
		)
	}
}

export default Features;