import React from 'react';

export default class YearlyHistorical extends React.Component {
  getWinningPartyClasses(party) {
    let retString = 'list-group-item';
    if (party === 'republican' && this.props.popularVote[party] > this.props.popularVote.democrat) {
      retString = retString + ' winner';
    } else if (party === 'democrat' && this.props.popularVote[party] > this.props.popularVote.republican) {
      retString = retString + ' winner';
    }
    return retString;
  }
  getListItemDescript(party) {
    const candidate = this.props.candidates[party];
    const partySym = party === 'republican' ? '(R)' : '(D)';
    const popularVote = this.props.popularVote[party].toLocaleString();
    return `${candidate} ${partySym} ${popularVote}`;
  }
  getListItem(party) {
    return (
      <div className={this.getWinningPartyClasses(party)}>
        {this.getListItemDescript(party)}
      </div>
    );
  }
  compareElectoralToPopular() {
    const winner = this.props.electoralVote.republican >= 270 ? 'republican' : 'democrat';
    const totalPopularVote = this.props.popularVote.democrat + this.props.popularVote.republican;
    const totalElectoralVote = 538;
    const winningPopVoteTotal = this.props.popularVote[winner];

    const winningElecVoteTotal = this.props.electoralVote.democrat > this.props.electoralVote.republican ? this.props.electoralVote.democrat : this.props.electoralVote.republican;
    const winningElectoralPrct = (winningElecVoteTotal / totalElectoralVote) * 100;
    const winningPopVotePrct = (winningPopVoteTotal / totalPopularVote) * 100;
    const diff = winningElectoralPrct - winningPopVotePrct;
    const pctElectoralGreater = (diff / winningElectoralPrct) * 100;
    return (
      <div>
        <div>
          Percent of electoral votes received by winner: {winningElectoralPrct.toFixed(2)}
        </div>
        <div>
          Percent of popular votes received by winner: {winningPopVotePrct.toFixed(2)}
        </div>
        <div>
          {pctElectoralGreater.toFixed(2)} percent more electoral votes awarded than popular votes
        </div>
      </div>
    );
  }
  render() {
    return (
      <div>
        <h4>Historical Vote</h4>
        <h5>Electoral Vote</h5>
        <div>
          <div className={this.props.electoralVote.democrat >= 270 ? 'electoral-vote winner' : 'electoral-vote'}>
            Democrat: {this.props.electoralVote.democrat}
          </div>
          <div className={this.props.electoralVote.republican >= 270 ? 'electoral-vote winner' : 'electoral-vote'}>
            Republican: {this.props.electoralVote.republican}
          </div>
          <div className={this.props.electoralVote.others >= 270 ? 'electoral-vote winner' : 'electoral-vote'}>
            Others: {this.props.electoralVote.others}
          </div>
        </div>
        <h5>Popular Vote</h5>
        <div className="list-group">
          {this.getListItem('republican')}
          {this.getListItem('democrat')}
        </div>
        <div>
          {this.compareElectoralToPopular()}
        </div>
        {this.props.children}
      </div>
    );
  }
}

YearlyHistorical.propTypes = {
  candidates: React.PropTypes.shape({
    democrat: React.PropTypes.string,
    republican: React.PropTypes.string
  }),
  popularVote: React.PropTypes.shape({
    democrat: React.PropTypes.number,
    republican: React.PropTypes.number,
    others: React.PropTypes.number
  }),
  electoralVote: React.PropTypes.shape({
    democrat: React.PropTypes.number,
    republican: React.PropTypes.number,
    others: React.PropTypes.number
  }),
  children: React.PropTypes.string
};
