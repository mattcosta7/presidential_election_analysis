import React from 'react';
import ElectionDetails from '../api/electionDetails';
import YearlyResult from './YearlyResult';
import YearlyHistorical from './YearlyHistorical';
import YearlyRevisionist from './YearlyRevisionist';
export default class Analysis extends React.Component {
  render() {
    const data = ElectionDetails.getDetails();
    return (
      <div>
        {data.map(function mapElectionToYears(election) {
          return (
            <YearlyResult key={election.year}
                          electionYear={election.year}
            >
              <YearlyHistorical />
              <YearlyRevisionist />
            </YearlyResult>
          );
        })}
      </div>
    );
  }
}

Analysis.propTypes = {};
