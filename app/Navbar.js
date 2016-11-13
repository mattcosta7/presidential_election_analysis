import React from 'react';

export default class Navbar {
  render() {
    return (
      <nav className="navbar navbar-light bg-faded">
        <ul className="nav navbar-nav">
          <a className="navbar-brand" href="#">
            <img src="http://www.mattc.io/images/face.png" width="30" height="30" className="d-inline-block align-top" alt="" />
              Mattc.io
          </a>
        </ul>
      </nav>
    );
  }
}
