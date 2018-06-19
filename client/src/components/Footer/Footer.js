import React from "react";

const Footer = () => (
  <footer>
    <hr />
    <p>
        
        <span className="pull-left"> 
          <img className="wulogo" src="./assets/images/wundergroundLogo_4c_horz.png" alt="WU logo" style={{marginRight: 20 + 'em'}} width="20%"/>
        </span>
        <span className="pull-right">
          <img className="favicon" src="./assets/images/favicon.ico" alt="React logo" width="4%" /> Made with React
        </span>
        <span>
          <i className="fab fa-github fa-4x"  aria-hidden="true" style={{marginLeft: 1 + 'em'}} ></i>
        </span>
        {/* <span className="pull-right">
          <i className="fa fa-github" aria-hidden="true" /> Proudly built using
          React.js
        </span> */}
    </p>
  </footer>
);

export default Footer;
