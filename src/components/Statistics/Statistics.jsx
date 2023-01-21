import { Notification } from 'components/Notification/Notification';
import React from 'react';
import './statistics.css';
export const Statistics = ({ good, neutral, bad, total, positivePercents }) => {
  return (
    <div className="statistics">
      <h1 className="statistics__title">Statistics</h1>

      {total > 0 ? (
        <div className="statistics__data">
          {/* good, neutra, bad feedback's */}
          <p>Good: {good}</p>
          <p>Neutral {neutral}</p>
          <p>Bad {bad}</p>
          {/* total, positive percents */}
          <p>Total: {total}</p>
          <p>Positive feedback: {positivePercents}</p>
        </div>
      ) : (
        <Notification />
      )}
    </div>
  );
};
