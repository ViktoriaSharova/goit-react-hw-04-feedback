
import { FeedbackBtn, Buttons } from './FeedbackOptions.styled';

export const FeedbackOptions = ({ onLeaveFeedback }) => {
  const options = ['good', 'neutral', 'bad'];

  return (
    <Buttons>
      {options.map(name => (
        <FeedbackBtn key={name} onClick={() => onLeaveFeedback(name)}>
          {name}
        </FeedbackBtn>
      ))}
    </Buttons>
  );
};