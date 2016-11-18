import React from 'react';

export default class YearlyResult extends React.Component {
  render() {
    return (
      <div className='container-fluid'>
        <h3 className='text-sm-center'>
          {this.props.electionYear}
        </h3>
        <h4 className='text-sm-center'>
          {this.props.candidates.democrat} (D) vs {this.props.candidates.republican} (R)
        </h4>
        {this.props.children}
      </div>
    );
  }
}

YearlyResult.propTypes = {
  electionYear: React.PropTypes.string,
  children: React.PropTypes.array,
  candidates: React.PropTypes.object
};
