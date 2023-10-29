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
      {timer > 0 && !isTimeUp && <p className='text-2xl font-bold text-right'>Timer: {timer} second</p>}

      {questions.length > 0 && currentQuestionIndex < questions.length ? (
        
        <div>
          <br />
          <h1 className='text-xl font-bold'>Question {currentQuestionIndex + 1}</h1>
          <br />
          <div className="flex flex-col w-full border-opacity-50">
            <div className="grid h-20 card bg-base-300 rounded-box place-items-center">{questions[currentQuestionIndex].question}</div>
          
        </div>
        <br />
          <div className='space-y-2.5'>
            
          <ul className="space-x-2.5">
            {questions[currentQuestionIndex].options.map((option, index) => (
              <li  className='inline ' key={index}>
                <button className='btn btn-primary'
                  onClick={() => handleAnswerQuestion(index)}
                  disabled={isAnswered}
                >
                  {option}
                </button>
              </li>
            ))}
          </ul>
          </div>
          <br />
          {isAnswered && (
            <div>
              <div className="flex flex-col w-full border-opacity-50">
            <div className="grid h-20 card bg-base-300 rounded-box place-items-center">

            Correct Response is:{' '}
                {
                  questions[currentQuestionIndex].options[
                    questions[currentQuestionIndex].correct_answer
                  ]
                }
            </div>
          
        </div>
        <br />
              <button className='btn btn-neutral' onClick={goToNextQuestion}>Next Question</button>
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
