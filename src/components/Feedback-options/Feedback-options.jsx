import './feedback-options.css';
import PropTypes from 'prop-types';

export const FeedbackOptions = ({
  addGood,
  addNeutral,
  addBad,
  countTotal,
  countPercent,
}) => (
  <div className="buttons-container">
    {/* first */}
    <button
      type="button"
      id="foot"
      onClick={() => {
        addGood();
        countTotal();
        countPercent();
      }}
    >
      <div className="button-os">
        <a href="#">Good</a>
      </div>
    </button>

    {/* second */}
    <button
      type="button"
      id="foot"
      onClick={() => {
        addNeutral();
        countTotal();
        countPercent();
      }}
    >
      <div className="button-os">
        <a href="#">Neutral</a>
      </div>
    </button>

    {/* last */}
    <button
      type="button"
      id="foot"
      onClick={() => {
        addBad();
        countTotal();
        countPercent();
      }}
    >
      <div className="button-os">
        <a href="#">Bad</a>
      </div>
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
