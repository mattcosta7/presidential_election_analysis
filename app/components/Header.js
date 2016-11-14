import React from 'react';

export default class Header extends React.Component  {
  render() {
    return (
      <div className="jumbotron-fluid">
        <h1 className="display-3">Electoral College Split?</h1>
        <p className="lead">Is the US Electoral college system being efficient, and correct in its distrubution of votes?</p>
        <hr className="my-2" />
        <p>
        </p>
      </div>
    );
  }
}

Header.propTypes = {};
