import React from 'react';
import Problem from './Problem';
import Hypothesis from './Hypothesis';
import Histry from './Histry';
import Analysis from './Analysis';
import Conclusion from './Conclusion';
import Synopsis from './Synopsis';
import Assumptions from './Assumptions'
import ReactDisqus from 'react-disqus';

export default class Main extends React.Component {
  render() {
    return (
      <main className="container">
        <Synopsis />
        <Problem />
        <Assumptions />
        <Hypothesis />
        <Histry />
        <Analysis />
        <Conclusion />
        <ReactDisqus pageurl="https://mattcosta7.github.io/presidential_election_analysis/" shortname="election-analysis" identifier="123" />
      </main>
    );
  }
}
