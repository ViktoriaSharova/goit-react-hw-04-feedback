import styled from 'styled-components';

export const Buttons = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 15px;
`;

export const FeedbackBtn = styled.button`
  display: inline-block;
  width: 80px;
  height: 30px;
  border-radius: 5px;
  cursor: pointer;

  &:not(:last-child) {
    margin-right: 10px;
  }
  &::first-letter {
    text-transform: capitalize;
  }
`;