import './feedback-options.css';
import PropTypes from 'prop-types';

export const FeedbackOptions = ({ addFeedback, state }) => (
  <div className="buttons-container">
    {state.map(property => {
      return (
        <button
  className="button-os"
          type="button"
          id="foot"
          onClick={() => {
            addFeedback(property);
          }}
          key={property}
        >
          
          {property}
         
        </button>
      );
    })}
  </div>
);

FeedbackOptions.propTypes = {
  addFeedback: PropTypes.func,
  countTotal: PropTypes.number,
  countPercent: PropTypes.string,
};
