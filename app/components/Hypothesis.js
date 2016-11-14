import React from 'react';

export default class Hypothesis extends React.Component {
  render() {
    return (
      <div>
        <h3>
          Hypothesis
        </h3>
        <p>
          By more proportionally splitting electoral votes between candidates, election results become more representative of the people's desires, tightens races, and creates an environment where voters feel more empowered
        </p>
        <h3>
          Method
        </h3>
        <p>
          In order to evaluate the hypothesis, I collected data on the electoral and presiential vote split between 1964 and today. This compares only US presidential elections, on a state by state (rather than district by district) manner.
        </p>
        <div>
          I've looked at, so far, 2 vote distribution scenarios, with 2 allocation methods for each.
          <ul className="list-group">
            <li className="list-group-item">
              <h5 className="list-group-heading">
                Scenario 1: Full Proportional Split Along Popular Vote
              </h5>
              <p  className="list-group-text">
                One version of this scenario allocates votes without considering 3 parties, while the other allocates also to 3rd party candidates
              </p>
            </li>
            <li className="list-group-item">
              <h5 className="list-group-heading">
                Scenario 2: A Proportional Split Of All But 2 Votes Per State.
              </h5>
              <p  className="list-group-text">
                One version of this scenario allocates votes without considering 3 parties, while the other allocates also to 3rd party candidates
              </p>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

Hypothesis.propTypes = {};
