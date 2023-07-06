import styled from 'styled-components';

export const QuizContainer = styled.div`
text-align: center;
  max-width: 500px;
  margin: 150px auto;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);

  p{
    color: whitesmoke;
    font-size: 20px;
  }
  animation: mymove 3.5s infinite;
  @keyframes mymove {
  from {background-color: red;}
  to {background-color: blue;}
}
`

export const Question = styled.h3`
  font-size: 22px;
  margin-bottom: 10px;
  color: white;
`

export const AnswerButton = styled.button`
  display: block;
  width: 100%;
  padding: 10px;
  margin-bottom: 10px;
  border: none;
  letter-spacing: 5px;
  font-weight: 600;
  background-color: #B1D3C2;
  animation: textchange 3.5s infinite;
  font-size: 25px;
  cursor: pointer;
  transition: background-color 0.3s ease;


  @keyframes textchange {
    from {color: red;}
    to {color: blue}
  }

  &:hover {
    background-color: white;
  }

`

export const ScoreSection = styled.div`
  text-align: center;
`

export const Result = styled.p`
  font-size: 16px;
  margin-bottom: 20px;
`
