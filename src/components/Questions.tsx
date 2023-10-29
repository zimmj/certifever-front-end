import React, { useState, useEffect } from 'react';

interface QuestionsProps {
  apiUrl: string; // get data from backend
}

interface Question {
  question: string;
  options: string[];
  correct_answer: number;
  explanation: string;
}

const Questions: React.FC<QuestionsProps> = ({ apiUrl }) => {
  const [questions, setQuestions] = useState<Question[]>([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState<number>(0);
  const [userAnswers, setUserAnswers] = useState<number[]>([]);
  const [isTimeUp, setIsTimeUp] = useState<boolean>(false);
  const [isAnswered, setIsAnswered] = useState<boolean>(false);
  const [timer, setTimer] = useState<number>(0);

  useEffect(() => {
    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => {
        setQuestions(data);
        // Time, depending on questions type
        const questionType =
          data[0].options.length > 2 ? 'multiple' : 'trueFalse';
        setTimer(questionType === 'multiple' ? 90 : 60);
      })
      .catch((error) => {
        console.error('can not communicate with the api:', error);
      });
  }, [apiUrl]);

  useEffect(() => {
    let interval: NodeJS.Timeout;

    if (timer > 0 && currentQuestionIndex < questions.length && !isTimeUp) {
      interval = setInterval(() => {
        if (timer > 0) {
          setTimer(timer - 1);
        } else {
          clearInterval(interval);
          setIsTimeUp(true);
          // when time is up, next q
          goToNextQuestion();
        }
      }, 1000);
    }
    return () => {
      clearInterval(interval);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [timer, currentQuestionIndex, questions, isTimeUp]);
  const handleAnswerQuestion = (selectedOption: number) => {
    const correctAnswer = questions[currentQuestionIndex].correct_answer;
    setUserAnswers([...userAnswers, selectedOption === correctAnswer ? 1 : 0]);
    setIsAnswered(true);
  };

  const goToNextQuestion = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setIsAnswered(false);
    } else {
      // Show result
    }
  };

  return (
    <div>
      {timer > 0 && !isTimeUp && <p>Timer: {timer} second</p>}

      {questions.length > 0 && currentQuestionIndex < questions.length ? (
        <div>
          <h1>Question {currentQuestionIndex + 1}</h1>
          <p>{questions[currentQuestionIndex].question}</p>
          <ul>
            {questions[currentQuestionIndex].options.map((option, index) => (
              <li key={index}>
                <button
                  onClick={() => handleAnswerQuestion(index)}
                  disabled={isAnswered}
                >
                  {option}
                </button>
              </li>
            ))}
          </ul>
          {isAnswered && (
            <div>
              <p>
                Correct Response is:{' '}
                {
                  questions[currentQuestionIndex].options[
                    questions[currentQuestionIndex].correct_answer
                  ]
                }
              </p>
              <button onClick={goToNextQuestion}>Next Question</button>
            </div>
          )}
        </div>
      ) : (
        <div>
          <h1>You have have answred all question</h1>
          <p>
            Correct answers:{' '}
            {userAnswers.filter((answer) => answer === 1).length}
          </p>
          <p>
            Wrong answers: {userAnswers.filter((answer) => answer === 0).length}
          </p>
        </div>
      )}
    </div>
  );
};

export default Questions;
