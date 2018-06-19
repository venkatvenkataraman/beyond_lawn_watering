// dependencies
import React, { Component } from "react";

// importing components
import "./Contact.css";

class Contact extends Component {
	render() {
		return (
			<div className="book">
				<div className="book__form">
					<form action="#" className="form">

						<div className="u-margin-bottom-medium">
								<h2 className="heading-secondary">
									Get in touch with us!
								</h2>
							</div>

						<div className="form__group u-margin-bottom-medium">
							<input type="text" className="form__input" placeholder="Full Name" id="name" required />
							<label for="name" className="form__label">Full Name</label>
						</div>

						<div className="form__group">
							<input type="email" className="form__input" placeholder="email" id="email" required />
							<label for="Email" className="form__label">Email</label>
						</div>

						<div className="form__group">
							<div className="form__radio-group">
								<input type="radio" className="form__radio-input" id="small" name="size" />
								<label for="small" className="form__radio-label">
									<span className="form__radio-button"></span>
									Home
								</label>
							</div>

							<div className="form__radio-group">
								<input type="radio" className="form__radio-input" id="large" name="size" />
								<label for="large" className="form__radio-label">
									<span className="form__radio-button"></span>
									Business / Park
								</label>
							</div>
						</div>

						<div className="form__group">
							<button className="btn btn--green">Next step &rarr;</button>
						</div>

					</form>
				</div>
			</div>
		)
	}
}

export default Contact;