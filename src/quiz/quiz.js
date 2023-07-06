import React, { useState } from 'react';
import {QuizContainer, Question, AnswerButton, ScoreSection, Result } from './quiz.styled'




const Quiz = () => {
  const questions = [
    {
      questionText: 'Koji je glavni grad Francuske?',
      answerOptions: [
        { answerText: 'Pariz', isCorrect: true },
        { answerText: 'London', isCorrect: false },
        { answerText: 'Berlin', isCorrect: false },
        { answerText: 'Rim', isCorrect: false },
      ],
    },
    {
      questionText: 'Koja je najduza reka na svijetu?',
      answerOptions: [
        { answerText: 'Nil', isCorrect: true },
        { answerText: 'Amazon', isCorrect: false },
        { answerText: 'Sena', isCorrect: false },
        { answerText: 'Dunav', isCorrect: false },
      ],
    },
  ];

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);

  const handleAnswerOptionClick = (isCorrect) => {
    if (isCorrect) {
      setScore(score + 1);
    }

    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowScore(true);
    }
  };


  return (
    <QuizContainer>
      {showScore ? (
        <ScoreSection>
          <Result>
            {score} od {questions.length} tacnih odgovora
          </Result>
        </ScoreSection>
      ) : (
        <>
          <Question>Pitanje {currentQuestion + 1}</Question>
          <p>{questions[currentQuestion].questionText}</p>
          {questions[currentQuestion].answerOptions.map((answerOption, index) => (
            <AnswerButton
              key={index}
              onClick={() => handleAnswerOptionClick(answerOption.isCorrect)}
            >
              {answerOption.answerText}
            </AnswerButton>
          ))}
        </>
      )}
    </QuizContainer>
  );
};

export default Quiz;
