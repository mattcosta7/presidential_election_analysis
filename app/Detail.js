import React from 'react';
import SubDetail from './SubDetail';

export default class Detail extends React.Component {
  render() {
    const year = this.props.election.year;
    const popRep = this.props.election.results.popular.actual.republican;
    const popDem = this.props.election.results.popular.actual.democrat;
    const actualResults = this.props.election.results.electoral.actual;
    const actualElectoralDem = this.props.election.results.electoral.actual.democrat;
    const actualElectoralRep = this.props.election.results.electoral.actual.republican;
    const propWithThird = this.props.election.results.electoral.proportionalWithThirdParty;
    const propWithoutThird = this.props.election.results.electoral.proportionalWithoutThirdParty;
    const repCandidate = this.props.election.candidates.republican;
    const demCandidate = this.props.election.candidates.democrat;
    const withElectoralBonus3rd = this.props.election.results.electoral.withElectoralBonus3rd;
    const withElectoralBonus = this.props.election.results.electoral.withElectoralBonus;
    return (
      <div className="row">
        <h2 className="text-xs-center"> { year } </h2>
        <h3>
          <span className={actualElectoralDem >= 270 ? 'underline' : ''}>{ demCandidate } (D)</span>
          vs
          <span className={actualElectoralRep >= 270 ? 'underline' : ''}>{ repCandidate } (R)</span>
        </h3>
        <div className="row">
          <SubDetail results={actualResults} header={'Actual'}/>
        </div>
        <div className="text-cs-center">
          <div className="list-group">
            <div className={'list-group-item ' + (popDem > popRep ? 'winner' : '')}>
              <h5 className="list-group-item-heading">{ demCandidate } (D)</h5>
              <p className="list-group-item-text">{popDem.toLocaleString()}</p>
            </div>
            <div className={'list-group-item ' + (popRep > popDem ? 'winner' : '')}>
              <h5 className="list-group-item-heading"> { repCandidate } (R) </h5>
              <p className="list-group-item-text">{popRep.toLocaleString()}</p>
            </div>
          </div>
        </div>

        <SubDetail results={propWithoutThird} header={'Proportional'}/>
        <SubDetail results={propWithThird} header={'Proportional (3rd)'}/>
        <SubDetail results={withElectoralBonus} header={'Electoral Bonus'}/>
        <SubDetail results={withElectoralBonus3rd} header={'Electoral Bonus (3rd)'}/>
      </div>
    );
  }
}
Detail.propTypes = {
  election: React.PropTypes.object
};
