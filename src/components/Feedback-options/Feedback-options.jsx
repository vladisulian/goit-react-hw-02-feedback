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
      <button type="button">
        <button class="button-os">
          <a href="#">Good</a>
        </button>
      </button>
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
      <button class="button-os">
        <a href="#">Neutral</a>
      </button>
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
      <button class="button-os">
        <a href="#">Bad</a>
      </button>
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
