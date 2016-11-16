import React from 'react';
export default class YearlyAnalysis extends React.Component {

  render() {
    return (
      <div>
        {this.props.commentary.body}
      </div>
    );
  }
}

YearlyAnalysis.propTypes = {
  year: React.PropTypes.string,
  analysisType: React.PropTypes.string
};
