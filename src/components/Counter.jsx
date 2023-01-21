import { Component } from 'react';
import '../components/styles.css';
import { FeedbackOptions } from './Feedback-options/Feedback-options';
import { Statistics } from './Statistics/Statistics';
import PropTypes from 'prop-types';

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

  countTotalFeedback = () => {
    this.setState(prevState => ({ total: prevState.total + 1 }));
  };

  countPositiveFeedbackPercentage = () => {
    this.setState(prevState => {
      return {
        positivePercents:
          Math.round((prevState.good * 100) / prevState.total) + '%',
      };
    });
  };

  render() {
    return (
      <div className="container">
        <h1 className="title">Please, give feedback!</h1>
        <FeedbackOptions
          addGood={this.addGoodFeedback}
          addNeutral={this.addNeutralFeedback}
          addBad={this.addBadFeedback}
          countTotal={this.countTotalFeedback}
          countPercent={this.countPositiveFeedbackPercentage}
        />
        {/* <div className="buttons">
          <button
            type="button"
            onClick={() => {
              this.addGoodFeedback();
              this.countTotalFeedback();
              this.countPositiveFeedbackPercentage();
            }}
          >
            Good
          </button>
          <button
            type="button"
            onClick={() => {
              this.addNeutralFeedback();
              this.countTotalFeedback();
              this.countPositiveFeedbackPercentage();
            }}
          >
            Neutral
          </button>
          <button
            type="button"
            onClick={() => {
              this.addBadFeedback();
              this.countTotalFeedback();
              this.countPositiveFeedbackPercentage();
            }}
          >
            Bad
          </button>
        </div> */}

        <Statistics
          good={this.state.good}
          neutral={this.state.neutral}
          bad={this.state.bad}
          total={this.state.total}
          positivePercents={this.state.positivePercents}
        />
      </div>
    );
  }
}
