import React, {useState} from 'react'
import './quiz.styled'
import { ButtonWrapper, Main, Title, SingleButton } from './quiz.styled';

const Quiz = () => {

    const [result, setResult] = useState(0);
    const [answer, setAnswer] = useState('');
    const [currentQuestion, setCurrentQuestion] = useState(0);

    const questions = [
        {
          questionText: 'Koji je glavni grad Francuske?',
          answerOptions: [
            { answerText: 'London', isCorrect: false },
            { answerText: 'Berlin', isCorrect: false },
            { answerText: 'Pariz', isCorrect: true },
            { answerText: 'Madrid', isCorrect: false },
          ],
        },
        {
          questionText: 'Koji je najveći kontinent na svijetu?',
          answerOptions: [
            { answerText: 'Afrika', isCorrect: false },
            { answerText: 'Europa', isCorrect: false },
            { answerText: 'Azija', isCorrect: true },
            { answerText: 'Australija', isCorrect: false },
          ],
        },
    ];
  return (
    <>
    <Main>
    <Title>QUIZ</Title>
    <ButtonWrapper>
        <SingleButton>
            aa
        </SingleButton>
    </ButtonWrapper>
    </Main>
    </>
  )
}

export default Quiz
