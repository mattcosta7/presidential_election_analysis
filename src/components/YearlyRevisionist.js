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
      <div className="list-group">
        <div className="list-group-item">
          {winningElectoralPrct.toFixed(2)}% Winning Electoral
        </div>
        <div className="list-group-item">
          {winningPopVotePrct.toFixed(2)}% Winning Popular
        </div>
        <div className="list-group-item">
          {Math.abs(pctElectoralGreater).toFixed(2)} % More Electoral
        </div>
      </div>
    );
  }
  render() {
    return (
      <div className="col-sm-12 col-md-6">
        <div className="card">
          <h4 className="card-header">{this.props.header}</h4>
          <div className="card-block">
            <div className="card-text">
              <div className={this.props.electoralVote.democrat >= 270 ? 'list-group-item winner' : 'list-group-item'}>
                Democrat: <span className="tag tag-default tag-pill float-xs-right">{this.props.electoralVote.democrat.toFixed(2)}</span>
              </div>
              <div className={this.props.electoralVote.republican >= 270 ? 'list-group-item winner' : 'list-group-item'}>
                Republican: <span className="tag tag-default tag-pill float-xs-right">{this.props.electoralVote.republican.toFixed(2)}</span>
              </div>
              <div className={this.props.electoralVote.others >= 270 ? 'list-group-item winner' : 'list-group-item'}>
                Others: <span className="tag tag-default tag-pill float-xs-right">{this.props.electoralVote.others.toFixed(2)}</span>
              </div>
              <div>
                {this.compareElectoralToPopular()}
              </div>
              {this.props.children}
            </div>
          </div>
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
