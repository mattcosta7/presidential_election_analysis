import React from 'react';

export default class Synopsis extends React.Component {
  render() {
    return (
      <div>
        <h2>Synopsis</h2>
        <p>
          The electoral college, winner take all system creates an unbalanced representation of desires and sentiments in the election process. States swing support too strongly and unequitably based on the outcome of the in-state popular votes. This unfairness creates <em>Swing States, Red States, and Blue States</em>, which act to stymie voter turnout, decrease the sense of participation in the process, and create electoral results that can vastly differ from the popular vote.
        </p>
        <p>
          By allocating votes in a more proportional manner, every popular vote carries more weight, voters are empowered, even in traditionally single party areas, and the results are more in line with the intentions of the people in each state.
        </p>
      </div>
    );
  }
}

Synopsis.propTypes = {};
