import React from 'react';

export default class SubDetail extends React.Component{

  isWinner(votes){
    return votes >= 270 ? "winner" : "";
  }
  render(){
    return(
      <div className='col-sm-4'>
        <ul>
          <h3>{this.props.header}</h3>
          <li className={
            this.isWinner(this.props.results.democrat)
          }
          > Democrats: {this.props.results.democrat} </li>
          <li className={
            this.isWinner(this.props.results.republican)
          }
          > Republican: {this.props.results.republican}</li>
          <li className={
            this.isWinner(this.props.results.others)
          }> Others: {this.props.results.others}</li>
        </ul>
      </div>
    )
  }
}
