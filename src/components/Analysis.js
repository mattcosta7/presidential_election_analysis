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
        <h3> Analysis and Data </h3>
        {data.map(function mapElectionToYears(election) {
          return (
            <YearlyResult key={election.year}
                          electionYear={election.year}
                          candidates={election.candidates}
            >
              <YearlyHistorical electoralVote={election.results.electoral.actual}
                                popularVote={election.results.popular.actual}
                                candidates={election.candidates}
              >
                Explanatory Text Based on the year JSON
              </YearlyHistorical>
              <YearlyRevisionist
                header="3rd Party Full Proportional"
                electoralVote={election.results.electoral.proportionalWithThirdParty}
                popularVote={election.results.popular.actual}
              />
              <YearlyRevisionist
                header="2 Party Full Proportional"
                electoralVote={election.results.electoral.proportionalWithoutThirdParty}
                popularVote={election.results.popular.actual}
              />
              <YearlyRevisionist
                header="3rd Party Electoral Bonus"
                electoralVote={election.results.electoral.withElectoralBonus3rd}
                popularVote={election.results.popular.actual}
              />
              <YearlyRevisionist
                header="2 Party Electoral Bonus"
                electoralVote={election.results.electoral.withElectoralBonus}
                popularVote={election.results.popular.actual}
              />
            </YearlyResult>
          );
        })}
      </div>
    );
  }
}

Analysis.propTypes = {};
