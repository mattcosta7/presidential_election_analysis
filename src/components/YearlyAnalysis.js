import React from 'react';
export default class YearlyAnalysis extends React.Component {

  render() {
    return (
      <div>
        <p>{this.props.commentary.body}</p>
      </div>
    );
  }
}

YearlyAnalysis.propTypes = {
  year: React.PropTypes.string,
  analysisType: React.PropTypes.string
};
