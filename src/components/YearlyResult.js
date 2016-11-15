import React from 'react';

export default class YearlyResult extends React.Component {
  render() {
    return (
      <div>
        {this.props.electionYear}
        {this.props.children}
      </div>
    );
  }
}

YearlyResult.propTypes = {
  electionYear: React.PropTypes.string,
  children: React.PropTypes.array
};
