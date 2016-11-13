import React from 'react';

export default class LeadText extends React.Component {
  render() {
    return (
      <div className="container">
        <h3>
          History
        </h3>
        <p>
          In the US the presidential election has two vote components, a Popular vote, in which eligible, registered voters from each state trek to the polls to cast their ballots for president. From this, states determine which way their electors <em>should</em> vote, in a mostly winner take all method (Maine and Nebraska currently allocate votes 1 per district won, and 2 for the popular vote).
        </p>
        <p>
          Despite the reasons for the electoral college's existance (which I won't get involved with here), today, on the surface, it serves as a method of ensuring that individual (and, especially less populace) states have a relatively equal say in the selection process, and to ensure that the issues facing Americans in less populated areas are not neglected.
        </p>
        <p>
          Most states originally allowed for an either open allocation (where electors voted as they wished) or for some type of proportional split of votes, rather than the currently dominant, "Winner take all" allocation. They began a shift toward winner take all voting when states began to notice that it would be easier to elect a Preisent from that state, if they didn't split their votes.
        </p>
        <h3>
          Problems
        </h3>
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
        <h3>
          Analysis
        </h3>
        <p>
        </p>
        <h3>
          Conclusion
        </h3>
        <p>
        </p>
      </div>
    );
  }
}
