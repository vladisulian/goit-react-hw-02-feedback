export const FeedbackSection = ({ title, children }) => {
  return (
    <section className="feedback-section">
      <h1 className="feedback__title">{title}</h1>
      {children}
    </section>
  );
};
