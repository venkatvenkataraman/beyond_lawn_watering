// dependencies
import React, { Component } from "react";

import "./About.css";

class About extends Component {
	render() {
		return (
			<section className="section-about">
				<div className="u-center-text u-margin-bottom-big">
						<h2 className="heading-secondary">
							An innovative solution for an innovative age
						</h2>
				</div>

				<div className="row">
					<div className="col-1-of-2">
						<h3 className="heading-tertiary u-margin-bottom-small">
							The power of science in the palm of your hand
						</h3>
						<p className="paragraph">
							Using advanced algorithms and state of the art technology, EcoScape gives you the data you need without you having to spend the time and energy collecting it.
						</p>
					</div>
					<div className="col-1-of-2">
						<h3 className="heading-tertiary u-margin-bottom-small">
							No landscape is too big or too small
						</h3>
						<p className="paragraph">
							From the homeowner wanting to have the best lawn on the block to the landscaper responsible for hundreds of acres, everything comes down to the single blade of grass.
						</p>
					</div>
				</div>

				<div className="u-center-text u-margin-bottom-big">
					<a href="#" className="btn-text">Learn More &rarr;</a>
				</div>

			</section>
		)
	}
}

export default About;