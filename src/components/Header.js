import React from 'react';

export default class Header extends React.Component  {
  render() {
    return (
      <div className="jumbotron">
        <h1 className="display-3">Does the Electoral system even the field, or slant it?</h1>
        <p className="lead">How the US Electoral system unfairly weighs allocates votes - giving unfair representation, enhancing the differences between votes, creating <em>Swing States</em>, and disenfranchising many in traditional party states</p>
        {/* <hr className="my-2" />
        <p>
        </p> */}
      </div>
    );
  }
}

Header.propTypes = {};
