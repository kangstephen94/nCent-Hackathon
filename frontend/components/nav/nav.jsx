import React from 'react';
import { Link } from "react-router-dom";
class Nav extends React.Component {
  render() {
    return (
      <div>
      <header className="nav">
        <div className="nav-left">
            <img className="ncent-logo" src="../app/assets/images/ncent_logo.png" />
            <Link className="nav-logo-link" to="/">
              eventCent
            </Link>
        </div>
        <div className="nav-right">
          <ul className="nav-right-links">
            <li className="tokens">
              Tokens: 100
            </li>
            <li className="logout">
              <button className="logout-button">
                Logout
              </button>
            </li>
          </ul>
        </div>

      </header>
      </div>
    );
  }
}

export default Nav;