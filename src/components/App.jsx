import { Component } from 'react';
import '../components/styles.css';
import { FeedbackOptions } from './Feedback-options/Feedback-options';
import { Statistics } from './Statistics/Statistics';
import { FeedbackSection } from './Feedback-section/FeedbackSection';
export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  addFeedback = data => {
    const option = data.target.textContent.toLowerCase();
    console.log(this.state.good);

    this.setState(prevState => ({
      [option]: prevState[option] + 1,
    }));
  };

  countTotalFeedback = () => {
    return Object.values(this.state).reduce((acc, state) => {
      return acc + state;
    }, 0);
  };

  countPositiveFeedbackPercentage = () => {
    const total = this.countTotalFeedback();
    return Math.round((this.state.good * 100) / total) + '%';
  };

  render() {
    const totalFeedback = this.countTotalFeedback();
    const positiveFeedbacks = this.countPositiveFeedbackPercentage();

    return (
      <FeedbackSection title={`Please, give feedback!`}>
        <FeedbackOptions
          addFeedback={this.addFeedback}
          countTotal={this.countTotalFeedback()}
          countPercent={positiveFeedbacks}
        />
        <Statistics
          states={this.state}
          total={totalFeedback}
          positivePercents={positiveFeedbacks}
        />
      </FeedbackSection>
    );
  }
}
