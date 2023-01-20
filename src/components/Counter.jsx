import { Component } from 'react';
import '../components/styles.css';

export class Counter extends Component {
  static defaultProps = {
    initialValue: 0,
  };

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
  handleDecrement = () => {};

  render() {
    return (
      <div className="container">
        <h1 className="title">Please, give feedback!</h1>

        <div className="buttons">
          <button type="button" onClick={this.addGoodFeedback}>
            Good
          </button>
          <button type="button">Neutral</button>
          <button type="button">Bad</button>
        </div>

        <h1>Statistics</h1>

        <div className="statistics">
          <p>
            Good:
            <span> {this.state.good}</span>
          </p>
          <p>
            Neutral
            <span> 0</span>
          </p>
          <p>
            Bad
            <span> 0</span>
          </p>
        </div>
      </div>
    );
  }
}
