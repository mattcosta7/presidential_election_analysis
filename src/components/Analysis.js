import React from 'react';
import ElectionDetails from '../api/electionDetails';
import YearlyResult from './YearlyResult';
import YearlyHistorical from './YearlyHistorical';
import YearlyRevisionist from './YearlyRevisionist';
import YearlyAnalysis from './YearlyAnalysis';
import ElectionCommentary from '../api/electionCommentary';

export default class Analysis extends React.Component {
  getDeviationDeviation(data) {
    const actual = [];
    const proportionalWithThirdParty = [];
    const proportionalWithoutThirdParty = [];
    const withElectoralBonus = [];
    const withElectoralBonus3rd = [];
    data.forEach(function mapElectionToYears(election) {
      const results = election.results;
      const popular = results.popular;
      const electoral = results.electoral;
      actual.push(getDeviation(popular.actual, electoral.actual));
      proportionalWithThirdParty.push(getDeviation(popular.actual, electoral.proportionalWithThirdParty));
      proportionalWithoutThirdParty.push(getDeviation(popular.actual, electoral.proportionalWithoutThirdParty));
      withElectoralBonus.push(getDeviation(popular.actual, electoral.withElectoralBonus));
      withElectoralBonus3rd.push(getDeviation(popular.actual, electoral.withElectoralBonus3rd));
    });
    const actualAvg = getAvg(actual);
    const prop3rdAvg = getAvg(proportionalWithThirdParty);
    const propAvg = getAvg(proportionalWithoutThirdParty);
    const bonusAvg = getAvg(withElectoralBonus);
    const bonus3rdAvg = getAvg(withElectoralBonus3rd);

    return (
      <div>
        <h3>Historical Deviation Trends</h3>
        <ul className="list-group">
          <li className="list-group-item">{actualAvg}: Historical Average Electoral Deviation: </li>
          <li className="list-group-item">{prop3rdAvg}: 3rd Party Full Proportional</li>
          <li className="list-group-item">{propAvg}: 2 Party Full Proportional</li>
          <li className="list-group-item">{bonusAvg}: 2 Party Electoral Bonus</li>
          <li className="list-group-item">{bonus3rdAvg}: 3rd Party Electoral Bonus</li>
        </ul>
        <p>
          Historically, the deviation between the popular vote and the electoral vote allocations is approximately 25%, a pretty significant shift, and an unfair representation of the sentiments of American voters. Utilizing any of the allocations I've described instead, the deviation is minimized, up to almost 25%. This creates results in both votes, that follow eachother's trends, rather than painting vastly different canvases of the american sentiments, especially in areas with a closer distribution of votes between parties.
        </p>
      </div>
    );
    function getDeviation(popularVote, electoralVote){
      const winner = electoralVote.republican >= 270 ? 'republican' : 'democrat';
      const totalPopularVote = popularVote.democrat + popularVote.republican + popularVote.others;
      const totalElectoralVote = 538;
      const winningPopVoteTotal = popularVote[winner];
      const winningElecVoteTotal = electoralVote.democrat > electoralVote.republican ? electoralVote.democrat : electoralVote.republican;
      const winningElectoralPrct = (winningElecVoteTotal / totalElectoralVote) * 100;
      const winningPopVotePrct = (winningPopVoteTotal / totalPopularVote) * 100;
      const diff = winningElectoralPrct - winningPopVotePrct;
      const pctElectoralGreater = (diff / winningElectoralPrct) * 100;
      return pctElectoralGreater;
    }

    function getAvg(arr){
      return Math.abs(
        arr.reduce(function sum(a, b) {
          return a + b;
        }) / arr.length
      ).toFixed(2);
    }
  }
  getAnalysis(data){
    return data.map(function mapElectionToYears(election) {
      return (
        <YearlyResult key={election.year}
                      electionYear={election.year}
                      candidates={election.candidates}
        >
          <YearlyHistorical electoralVote={election.results.electoral.actual}
                            popularVote={election.results.popular.actual}
                            candidates={election.candidates}
          />

          <YearlyAnalysis year={election.year}
                          commentary={ElectionCommentary.getCommentary(election.year, "historical")}
          />
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
          <YearlyAnalysis year={election.year}
                          commentary={ElectionCommentary.getCommentary(election.year, "revisionist")}
          />
        </YearlyResult>
      );
    })
  }
  render() {
    const data = ElectionDetails.getDetails();
    return (
      <div>
        <h3> Analysis and Data </h3>
        {this.getAnalysis(data)}
        {this.getDeviationDeviation(data)}
      </div>
    );
  }
}

Analysis.propTypes = {};
