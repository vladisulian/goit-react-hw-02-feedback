import './feedback-options.css';
import PropTypes from 'prop-types';

export const FeedbackOptions = ({
  addGood,
  addNeutral,
  addBad,
  countTotal,
  countPercent,
}) => (
  <div className="buttons">
    <button
      type="button"
      onClick={() => {
        addGood();
        countTotal();
        countPercent();
      }}
    >
      Good
    </button>
    <button
      type="button"
      onClick={() => {
        addNeutral();
        countTotal();
        countPercent();
      }}
    >
      Neutral
    </button>
    <button
      type="button"
      onClick={() => {
        addBad();
        countTotal();
        countPercent();
      }}
    >
      Bad
    </button>
  </div>
);

FeedbackOptions.propTypes = {
  addGood: PropTypes.func,
  addNeutral: PropTypes.func,
  addBad: PropTypes.func,
  countTotal: PropTypes.func,
  countPercent: PropTypes.func,
};
