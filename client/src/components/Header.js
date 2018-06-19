import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import "./header.css";
// import Payments from './Payments';

class Header extends Component {
	renderContent() {
		console.log("In Header.js.  this.props.auth= ", this.props.auth);
		switch (this.props.auth) {
			case null:
				return;
			case false:
				return (
					<li><a href="/auth/google">One click Sign-up / Sign-In with Google!</a></li>
				);
			default: 
				return (
					<div>
						{/* <li><Payments /></li> */}
						{/* <li style={{margin: '0 10px'}}>Credits: {this.props.auth.credits}</li> */}
						<li><a href="/api/logout">Logout</a></li>
					</div>
				);
		}
	}

	render() {
		return (
			<nav>
				<div className="nav-wrapper">
						<Link
						to={this.props.auth ? '/WF' : '/'} 
						className="left brand-logo"
						>
						EcoScape <i class="fas fa-tint"></i>
						</Link>
					<ul className="right">
						{this.renderContent()}
					</ul>
				</div>
			</nav>
		);
	}
}

function mapStateToProps({ auth }) {
	return { auth };
}

export default connect(mapStateToProps)(Header);