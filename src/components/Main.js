import React from 'react';
import Problem from './Problem';
import Hypothesis from './Hypothesis';
import Histry from './Histry';
import Analysis from './Analysis';
import Conclusion from './Conclusion';
import Synopsis from './Synopsis';
import Assumptions from './Assumptions'
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
      </main>
    );
  }
}
