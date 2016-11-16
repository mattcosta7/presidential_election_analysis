import React from 'react';

export default class YearlyRevisionist extends React.Component {
  compareElectoralToPopular() {
    const winner = this.props.electoralVote.republican >= 270 ? 'republican' : 'democrat';
    const totalPopularVote = this.props.popularVote.democrat + this.props.popularVote.republican + this.props.popularVote.others;
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
          Winning % Electoral: {winningElectoralPrct.toFixed(2)}
        </div>
        <div>
          Winning % Popular: {winningPopVotePrct.toFixed(2)}
        </div>
        <div>
          Winning Deviation from ideal: {Math.abs(pctElectoralGreater).toFixed(2)}
        </div>
      </div>
    );
  }
  render() {
    return (
      <div className="col-sm-6 col-lg-3">
        <h4>{this.props.header}</h4>
        <h5>Electoral Vote</h5>
        <div>
          <div className={this.props.electoralVote.democrat >= 270 ? 'electoral-vote winner' : 'electoral-vote'}>
            Democrat: {this.props.electoralVote.democrat.toFixed(2)}
          </div>
          <div className={this.props.electoralVote.republican >= 270 ? 'electoral-vote winner' : 'electoral-vote'}>
            Republican: {this.props.electoralVote.republican.toFixed(2)}
          </div>
          <div className={this.props.electoralVote.others >= 270 ? 'electoral-vote winner' : 'electoral-vote'}>
            Others: {this.props.electoralVote.others.toFixed(2)}
          </div>
          <div>
            {this.compareElectoralToPopular()}
          </div>
          {this.props.children}
        </div>
      </div>
    );
  }
}

YearlyRevisionist.propTypes = {
  header: React.PropTypes.string,
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
    others: React.PropTypes.number,
  }),
  children: React.PropTypes.string
};
