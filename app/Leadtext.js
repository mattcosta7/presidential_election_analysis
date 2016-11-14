import React from 'react';
import Detail from './Detail';
import ElectionData from './api/electionDetails';

export default class LeadText extends React.Component {
  render() {
    return (
      <div className="container">
        <h3>
          Analysis
        </h3>
        <p>
          Electoral college inefficiencies have created a scenario where, counter to its initial goal, equalized representation has not been maintained, but instead limited. Generally, during the period from 1964 through today (the period where the number of electoral votes has been 538), most election have given an unbalanced portion of electoral votes to the winner, limiting the voies of the losers supporters tremendously.
        </p>
        <ul>
          <li>
            <Detail key={ElectionData.getByYear('1964').year} election={ElectionData.getByYear('1964')} />
            <ul>
            </ul>
            <p>
              Lyndon Johnson ran against Barry Goldwater, in a race that was not very close at all. Johnson managed to muster 486 electoral votes, more than 90%, yet only managed to win, just over 60% of the popular vote that year.
            </p>
            <p>
              In each scenario, this election has the same outcome, LBJ easily defeats Goldwater, but in much closer races, that more accurately respresent the sentiments of the country at the time.
            </p>
          </li>
          <li>
            <Detail key={ElectionData.getByYear('1968').year} election={ElectionData.getByYear('1968')} />
            <ul>
            </ul>
            <p>
            </p>
            <p>
            </p>
          </li>
          <li>
            <Detail key={ElectionData.getByYear('1972').year} election={ElectionData.getByYear('1972')} />
            <ul>
            </ul>
            <p>
            </p>
            <p>
            </p>
          </li>
          <li>
            <Detail key={ElectionData.getByYear('1976').year} election={ElectionData.getByYear('1976')} />
            <ul>
            </ul>
            <p>
            </p>
            <p>
            </p>
          </li>
          <li>
            <Detail key={ElectionData.getByYear('1980').year} election={ElectionData.getByYear('1980')} />
            <ul>
            </ul>
            <p>
            </p>
            <p>
            </p>
          </li>
          <li>
            <Detail key={ElectionData.getByYear('1984').year} election={ElectionData.getByYear('1984')} />
            <ul>
            </ul>
            <p>
            </p>
            <p>
            </p>
          </li>
          <li>
            <Detail key={ElectionData.getByYear('1988').year} election={ElectionData.getByYear('1988')} />
            <ul>
            </ul>
            <p>
            </p>
            <p>
            </p>
          </li>
          <li>
            <Detail key={ElectionData.getByYear('1992').year} election={ElectionData.getByYear('1992')} />
            <ul>
            </ul>
            <p>
            </p>
            <p>
            </p>
          </li>
          <li>
            <Detail key={ElectionData.getByYear('1996').year} election={ElectionData.getByYear('1996')} />
            <ul>
            </ul>
            <p>
            </p>
            <p>
            </p>
          </li>
          <li>
            <Detail key={ElectionData.getByYear('2000').year} election={ElectionData.getByYear('2000')} />
            <ul>
            </ul>
            <p>
            </p>
            <p>
            </p>
          </li>
          <li>
            <Detail key={ElectionData.getByYear('2004').year} election={ElectionData.getByYear('2004')} />
            <ul>
            </ul>
            <p>
            </p>
            <p>
            </p>
          </li>
          <li>
            <Detail key={ElectionData.getByYear('2008').year} election={ElectionData.getByYear('2008')} />
            <ul>
            </ul>
            <p>
            </p>
            <p>
            </p>
          </li>
          <li>
            <Detail key={ElectionData.getByYear('2012').year} election={ElectionData.getByYear('2012')} />
            <ul>
            </ul>
            <p>
            </p>
            <p>
            </p>
          </li>
          <li>
            <Detail key={ElectionData.getByYear('2016').year} election={ElectionData.getByYear('2016')} />
            <ul>
            </ul>
            <p>
            </p>
            <p>
            </p>
          </li>
        </ul>

        <h3>
          Conclusion
        </h3>
        <p>
        </p>
      </div>
    );
  }
}
