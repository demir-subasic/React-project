import styled from 'styled-components';

export const QuizContainer = styled.div`
  max-width: 500px;
  margin: 0 auto;
  padding: 20px;
  background-color: #f5f5f5;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
`

export const Question = styled.h3`
  font-size: 18px;
  margin-bottom: 10px;
`

export const AnswerButton = styled.button`
  display: block;
  width: 100%;
  padding: 10px;
  margin-bottom: 10px;
  border: none;
  border-radius: 4px;
  background-color: #fff;
  color: #333;
  font-size: 14px;
  cursor: pointer;
  transition: background-color 0.3s ease;

`

export const ScoreSection = styled.div`
  text-align: center;
`

export const Result = styled.p`
  font-size: 16px;
  margin-bottom: 20px;
`

export const RestartButton = styled.button`
  padding: 10px 20px;
  border: none;
  border-radius: 4px;
  background-color: #4caf50;
  color: #fff;
  font-size: 16px;
  cursor: pointer;
`