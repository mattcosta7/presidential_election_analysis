import React from 'react';

export default class Assumptions extends React.Component {
  render() {
    return (
      <div>
        <h3>Assumptions</h3>
        <div>
          <p>
            The foundations of this article are built upon a couple assumptions. These are not necessarily items I agree with, or disagree with, but instead chose to deal with as immutable to narrow the scope of the issue. Additionally, I do not intend to disucss the correctness of any candidate or party, this attempts instead to analyze the separation of votes by their types in these elections. The starting point, 1964 is the first election that allocated 538 total electoral votes.
          </p>
          <ul>
            <h6>I assume that:</h6>
            <li>The current method of having a popular and electoral vote is maintained</li>
            <li>The allocation of votes as is currently is maintained</li>
            <li>That an election is more fair when the difference between the percent of both types of votes is minimized</li>
            <li>That voter sentiments would be similar, and that the same number of votes would have been cast to the same candidate</li>
          </ul>
        </div>
      </div>
    );
  }
}

Assumptions.propTypes = {};
