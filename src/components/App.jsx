import { useState } from 'react';
import { Section } from './Section/Section';
import { Statistics } from "./Statistics/Statistics";
import { Notification } from "./Notification/Notification";
import { FeedbackOptions } from "./FeedbackOptions/FeedbackOptions";
import { SectonWrap } from './App.styled';
import 'normalize.css';

export const App = () => {

  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const[bad, setBad] = useState(0);
  
    const onLeaveFeedback = name => {
    if (name === 'good') {
      return setGood(prevState => prevState + 1);
    }
    if (name === 'neutral') {
      return setNeutral(prevState => prevState + 1);
    }
    if (name === 'bad') {
      return setBad(prevState => prevState + 1);
    }
  };

  const countTotalFeedback = () => {
    return good + neutral + bad;
  };

  const countPositiveFeedbackPercentage = () => {
    const totalFeedback = good + neutral + bad;
    return Math.round((good / totalFeedback) * 100) || 0;
  };

    return (
      <SectonWrap>
        <Section title="Please leave feed back">
          <FeedbackOptions onLeaveFeedback={onLeaveFeedback}
          />
        </Section>
        {countTotalFeedback() ? (
          <Section title="Statistics">
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={countTotalFeedback()}
              positivePercentage={countPositiveFeedbackPercentage()}
            />
          </Section>
        ) : (
          <Notification message="There is no feedback" />
        )}
      </SectonWrap>
    );

};