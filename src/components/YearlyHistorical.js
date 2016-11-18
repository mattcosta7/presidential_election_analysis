import React from 'react';

export default class YearlyHistorical extends React.Component {
  getWinningPartyClasses(party) {
    return (party === 'republican' && this.props.popularVote[party] > this.props.popularVote.democrat) || (party === 'democrat' && this.props.popularVote[party] > this.props.popularVote.republican) ? 'list-group-item list-group-item-success' : 'list-group-item'
  }
  getListItemDescript(party) {
    const candidate = this.props.candidates[party] || "Others";
    const partySym = party === 'republican' ? '(R)' : party === 'democrat' ? '(D)' : "";
    const popularVote = this.props.popularVote[party].toLocaleString();
    return (
      <div>
        <span className="tag tag-default tag-pill float-xs-right">{popularVote}</span>
        {candidate} {partySym}
      </div>
    );
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
    const totalPopularVote = this.props.popularVote.democrat + this.props.popularVote.republican + this.props.popularVote.others;
    const totalElectoralVote = 538;
    const winningPopVoteTotal = this.props.popularVote[winner];

    const winningElecVoteTotal = this.props.electoralVote.democrat > this.props.electoralVote.republican ? this.props.electoralVote.democrat : this.props.electoralVote.republican;
    const winningElectoralPrct = (winningElecVoteTotal / totalElectoralVote) * 100;
    const winningPopVotePrct = (winningPopVoteTotal / totalPopularVote) * 100;
    const diff = winningElectoralPrct - winningPopVotePrct;
    const pctElectoralGreater = (diff / winningElectoralPrct) * 100;
    return (
      <div className='list-group'>
        <h4>Vote Comparison</h4>
        <div className='list-group-item'>
          {winningElectoralPrct.toFixed(2)}% Electoral Winner
        </div>
        <div className='list-group-item'>
          {winningPopVotePrct.toFixed(2)}% Popular Winner
        </div>
        <div className='list-group-item'>
          {pctElectoralGreater.toFixed(2)}% More Electoral
        </div>
      </div>
    );
  }
  render() {
    return (
      <div className="row">
        <div>
          <h4 className='col-xs-12'>Historical Vote</h4>
          <div className="col-xs-12 col-sm-6 col-md-4">
            <h5>Electoral Vote</h5>
            <div className="list-group">
              <div className={this.props.electoralVote.democrat >= 270 ? 'list-group-item list-group-item-success' : 'list-group-item'}>
                <span className="tag tag-default tag-pill float-xs-right">{this.props.electoralVote.democrat}</span>
                Democrat
              </div>
              <div className={this.props.electoralVote.republican >= 270 ? 'list-group-item list-group-item-success' : 'list-group-item'}>
                <span className="tag tag-default tag-pill float-xs-right">{this.props.electoralVote.republican}</span>
                Republican
              </div>
              <div className={this.props.electoralVote.others >= 270 ? 'list-group-item list-group-item-success' : 'list-group-item'}>
                <span className="tag tag-default tag-pill float-xs-right">{this.props.electoralVote.others}</span>
                Others
              </div>
            </div>
          </div>
          <div className="col-xs-12 col-sm-6 col-md-4">
            <h5>Popular Vote</h5>
            <div className="list-group">
              {this.getListItem('democrat')}
              {this.getListItem('republican')}
              {this.getListItem('others')}
            </div>
          </div>
          <div className="col-xs-12 col-sm-12 col-md-4">
            {this.compareElectoralToPopular()}
          </div>
        </div>

        <div className='row'>
          {this.props.children}
        </div>
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
  children: React.PropTypes.object
};
