import React from 'react';
import './statistics.css';
export const Statistics = ({ good, neutral, bad, total, positivePercents }) => {
  return (
    <div className="statistics">
      <h1>Statistics</h1>

      <div className="statistics__data">
        {/* good, neutra, bad feedback's */}
        <p>Good: {good}</p>
        <p>Neutral {neutral}</p>
        <p>Bad {bad}</p>
        {/* total, positive percents */}
        <p>Total: {total}</p>
        <p>Positive feedback: {positivePercents}</p>
      </div>
    </div>
  );
};
