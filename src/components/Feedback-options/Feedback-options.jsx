import './feedback-options.css';
import PropTypes from 'prop-types';

export const FeedbackOptions = ({ addFeedback, countTotal, countPercent }) => (
  <div className="buttons-container">
    {/* first */}
    <button type="button" id="foot" onClick={addFeedback}>
      <div className="button-os">
        <a href="#">Good</a>
      </div>
    </button>

    {/* second */}
    <button type="button" id="foot" onClick={addFeedback}>
      <div className="button-os">
        <a href="#">Neutral</a>
      </div>
    </button>

    {/* last */}
    <button type="button" id="foot" onClick={addFeedback}>
      <div className="button-os">
        <a href="#">Bad</a>
      </div>
    </button>
  </div>
);

FeedbackOptions.propTypes = {
  addFeedback: PropTypes.func,
  countTotal: PropTypes.number,
  countPercent: PropTypes.string,
};
