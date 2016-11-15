import React from 'react';
import Problem from './Problem';
import Hypothesis from './Hypothesis';
import Histry from './Histry';
import Analysis from './Analysis';
import Conclusion from './Conclusion';

export default class Main extends React.Component {
  render() {
    return (
      <main>
        <Problem />
        <Hypothesis />
        <Histry />
        <Analysis />
        <Conclusion />
      </main>
    );
  }
}
