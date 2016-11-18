import React from 'react';

export default class Problem extends React.Component {
  render() {
    return (
      <div>
        <h2>
          Problem
        </h2>
        <div>
          <p>
            A few issues seem to arise, when alocating votes in this winner take all manner
          </p>
          <div className="list-group">
            <div className="list-group-item">
              <h5 className="list-group-heading">
                States show a disproportional amount of support for a candidate
              </h5>
              <p className="list-group-text">
                A state, with a popular vote split of 50.01% - 49.99% gives 100% of its votes to a candidate who has barely achieved a majority.
              </p>
            </div>
            <div className="list-group-item">
              <h5 className="list-group-heading">
                The appearance of disenfranchisment stimies voter turnout
              </h5>
              <p className="list-group-text">
                States with strong majorities create a self-fulfilling prophecy, where minority party voters often believe their votes carry no weight
              </p>
            </div>
            <div className="list-group-item">
              <h5 className="list-group-heading">
                In-state-minority voter voices are ignored
              </h5>
              <p className="list-group-text">
                This neglect creates an imperfect environment, in the exact same way the system was designed to avoid one.
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

Problem.propTypes = {};
