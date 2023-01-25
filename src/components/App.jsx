import { Component } from 'react';
import '../components/styles.css';
import { FeedbackOptions } from './Feedback-options/Feedback-options';
import { Statistics } from './Statistics/Statistics';
import { FeedbackSection } from './Feedback-section/FeedbackSection';
export class App extends Component {
  static propTypes = {};

  state = {
    good: 0,
    neutral: 0,
    bad: 0,
    total: 0,
    positivePercents: 0 + '%',
  };

  addFeedback = data => {
    console.log(data.target.textContent);
    
    const option = data.target.textContent.toLowerCase();
    this.setState(prevState => ({
      [option]: prevState[option] + 1,
    }));
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
      <FeedbackSection title={`Please, give feedback!`}>
        <FeedbackOptions
          addFeedback={this.addFeedback}
          countTotal={this.countTotalFeedback}
          countPercent={this.countPositiveFeedbackPercentage}
        />
        <Statistics
          good={this.state.good}
          neutral={this.state.neutral}
          bad={this.state.bad}
          total={this.state.total}
          positivePercents={this.state.positivePercents}
        />
      </FeedbackSection>
    );
  }
}
