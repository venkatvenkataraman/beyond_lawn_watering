// dependencies
import React, { Component } from "react";

// importing components
import About from "./Test_Sections/About/About";
import Contact from "./Test_Sections/Contact/Contact";
import Features from "./Test_Sections/Features/Features";
import Footer from "./Test_Sections/Footer/Footer";
import Header from "./Test_Sections/Header/Header";
import Packages from "./Test_Sections/Packages/Packages";
// import Stories from "./Test_Sections/Stories/Stories";

import "./Test.css";

class Test extends Component {
	render() {
		return (
			<div>
				<Header />
				<About />
				<Features />
				<Packages />
				<Contact />
				<Footer />
			</div>
		)
	}
}

export default Test;