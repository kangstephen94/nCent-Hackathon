import React from 'react';

class Nav extends React.Component {
  render() {
    return (
      <header className="nav">
        <section className="nav-inner">
          <ul className="nav-left">
            <li className="nav-logo">
              <Link className="nav-logo-link" to="/stream">
                eventCent
              </Link>
            </li>
            
          </ul>
          <div className="nav-middle">
          </div>
          <div className="nav-right">
            <ul className="nav-right-links">
              <li className="user-link">
                Tokens: 100
              </li>
              <li><button className="logout-button" onClick={this.props.logout}>Logout</button></li>
            </ul>
          </div>
        </section>
      </header>
    );
  }
}

export default Nav;