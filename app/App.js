import React from 'react';
import ElectionData from './api/electionDetails';
import Detail from './Detail';
import Navbar from './Navbar';
import Jumbotron from './Jumbotron';
import LeadText from './Leadtext';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {test: 'foo'};
  }
  render() {
    return (
      <div>
        <Navbar />
        <div className="container">
          <Jumbotron />
          <LeadText />
          <h1 className="text-xs-center"> Election Data </h1>
          <p className="text-xs-center">
            Comparing actual outcomes, to the potential outcomes had the electoral votes in each state been spread proportionally between the two winning candidates (discounting 3rd party votes), or proportionally between all parties
          </p>
          <ul>
          { ElectionData.getDetails().map(function getYears(election) {
            return <Detail key={election.year} election={election} />;
          })}
          </ul>
        </div>
      </div>
    );
  }
}
