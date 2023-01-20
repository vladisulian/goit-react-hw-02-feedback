import { Component } from 'react';
import '../components/styles.css';

export class Counter extends Component {
  static propTypes = {};

  state = {
    good: 0,
    neutral: 0,
    bad: 0,
    total: 0,
    positivePercents: 0 + '%',
  };

  addGoodFeedback = () => {
    this.setState(prevState => {
      return {
        good: prevState.good + 1,
      };
    });
  };

  addNeutralFeedback = () => {
    this.setState(prevState => {
      return {
        neutral: prevState.neutral + 1,
      };
    });
  };

  addBadFeedback = () => {
    this.setState(prevState => {
      return {
        bad: prevState.bad + 1,
      };
    });
  };

  countTotalFeedback() {
    this.setState(prevState => {
      return {
        total: prevState.total + 1,
      };
    });
  }

  render() {
    return (
      <div className="container">
        <h1 className="title">Please, give feedback!</h1>

        <div className="buttons">
          <button
            type="button"
            onClick={() => {
              this.addGoodFeedback();
              this.countTotalFeedback();
            }}
          >
            Good
          </button>
          <button
            type="button"
            onClick={() => {
              this.addNeutralFeedback();
              this.countTotalFeedback();
            }}
          >
            Neutral
          </button>
          <button
            type="button"
            onClick={() => {
              this.addBadFeedback();
              this.countTotalFeedback();
            }}
          >
            Bad
          </button>
        </div>

        <h1>Statistics</h1>

        <div className="statistics">
          {/* good, neutra, bad feedback's */}
          <p>Good: {this.state.good}</p>
          <p>Neutral {this.state.neutral}</p>
          <p>Bad {this.state.bad}</p>
          {/* total, positive percents */}
          <p>Total: {this.state.total}</p>
          <p>Positive feedback: {this.state.positivePercents}</p>
        </div>
      </div>
    );
  }
}
