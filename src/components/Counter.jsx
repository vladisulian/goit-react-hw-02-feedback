import { Component } from 'react';
import '../components/styles.css';

export class Counter extends Component {
  // static defaultProps = {
  //   initialValue: 0,
  // };

  static propTypes = {};

  state = {
    good: 0,
    neutral: 0,
    bad: 0,
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

  render() {
    return (
      <div className="container">
        <h1 className="title">Please, give feedback!</h1>

        <div className="buttons">
          <button type="button" onClick={this.addGoodFeedback}>
            Good
          </button>
          <button type="button" onClick={this.addNeutralFeedback}>
            Neutral
          </button>
          <button type="button" onClick={this.addBadFeedback}>
            Bad
          </button>
        </div>

        <h1>Statistics</h1>

        <div className="statistics">
          <p>
            Good:
            <span> {this.state.good}</span>
          </p>
          <p>
            Neutral
            <span> {this.state.neutral}</span>
          </p>
          <p>
            Bad
            <span> {this.state.bad}</span>
          </p>
        </div>
      </div>
    );
  }
}
