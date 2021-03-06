import React, { useEffect, useState } from 'react';

import Check from './Check';
import ProgressBar from './ProgressBar';
import ShowImg from './ShowImg';
import formatBarData from '../helper/formatBarData';

export default function Questions({
  setAntwoord,
  antwoorden,
  setView,
  quiz,
  dynamicAns,
  dynamicAnsMoney,
  dataState,
  totData,
}) {
  let completed = 100 / (quiz.length + 1);

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [currentAns, setCurrentAns] = useState(null);

  const [barWidth, setBarWidth] = useState(completed);

  function handleAnswer(check, answer, id) {
    if (document.querySelector(`button.clickNext`)) {
      document
        .querySelector(`button.clickNext`)
        .classList.replace('clickNext', 'nextBtn');
    }

    if (document.querySelector(`button.selected`)) {
      document.querySelector(`button.selected`).classList.toggle('selected');
    } else {
    }
    document
      .querySelector(`button[data-value=${id}]`)
      .classList.toggle('selected');

    if (document.querySelector(`span.viewRed`)) {
      document.querySelector(`span.viewRed`).classList.toggle('viewRed');
    }
    document
      .querySelector(`span[data-value=${id}]`)
      .classList.toggle('viewRed');

    setCurrentAns({
      vraag: quiz[currentQuestion].question,
      antwoord: answer,
      check: check,
      ans: quiz[currentQuestion].correct,
    });
  }

  function handleNext() {
    if (document.querySelector(`button.selected`)) {
      document.querySelector(`button.selected`).classList.toggle('selected');
      document.querySelector(`span.viewRed`).classList.toggle('viewRed');
    }

    if (currentAns) {
      document
        .querySelector(`button.nextBtn`)
        .classList.replace('nextBtn', 'clickNext');

      setBarWidth(barWidth + completed);
      antwoorden.push(currentAns);

      const nextQuestion = currentQuestion + 1;
      if (nextQuestion < quiz.length) {
        setCurrentQuestion(currentQuestion + 1);
        setCurrentAns(null);
      } else {
        localStorage.setItem('antwoorden', JSON.stringify(antwoorden));
        setView('gotocheck');
      }
    } else {
      document.querySelector(`.clickNext`).classList.add('selectAns');
      setTimeout(function () {
        document.querySelector(`.clickNext`).classList.toggle('selectAns');
      }, 500);
    }
  }
  //get the index of the type scenario from the quiz dataset
  const indexType = quiz[currentQuestion].indextype;

  return (
    <div>
      <ProgressBar barWidth={barWidth} />

      <div className='Questions'>
        <>
          <ShowImg quiz={quiz} currentQuestion={currentQuestion} />

          <div className='question-section'>
            <div className='question-text'>
              <h2>{quiz[currentQuestion].question}</h2>
            </div>
          </div>
          <div className='answer-section'>
            <div className='ans-options'>
              {quiz[currentQuestion].answers.map((answers, index) => (
                <>
                  <div className='button'>
                    {quiz[currentQuestion].type === 'scenario' && (
                      <>
                        <span
                          onClick={() =>
                            handleAnswer(
                              dynamicAns[indexType][index].check,
                              dynamicAns[indexType][index].partij,
                              dynamicAns[indexType][index].id
                            )
                          }
                        >
                          <svg
                            id='Artboard_2'
                            data-name='Artboard â€“ 2'
                            className='cls-1'
                          >
                            <rect className='cls-14' width='52' height='52' />
                            <g
                              id='Rectangle_116'
                              data-name='Rectangle 116'
                              className='cls-12'
                            >
                              <rect className='cls-15' width='52' height='52' />
                              <rect
                                className='cls-16'
                                x='1'
                                y='1'
                                width='50'
                                height='50'
                              />
                            </g>
                            <path
                              id='Path_44'
                              data-name='Path 44'
                              className='cls-13'
                              d='M0,0H36V36H0Z'
                              transform='translate(8 8)'
                            />
                            <circle
                              id='Ellipse_53'
                              data-name='Ellipse 53'
                              className='cls-14'
                              cx='14'
                              cy='14'
                              r='14'
                              transform='translate(12 12)'
                            />
                          </svg>
                        </span>
                        <span
                          data-value={dynamicAns[indexType][index].id}
                          onClick={() =>
                            handleAnswer(
                              dynamicAns[indexType][index].check,
                              dynamicAns[indexType][index].partij,
                              dynamicAns[indexType][index].id
                            )
                          }
                        >
                          <svg
                            id='Artboard_2'
                            data-name='Artboard â€“ 2'
                            className='cls-1'
                          >
                            <rect className='cls-3' width='52' height='52' />
                            <path
                              id='Path_43'
                              data-name='Path 43'
                              className='cls-2'
                              d='M-3011.7,12604.991s11.39-7.488,12.615-5.355-11.808,14.413-7.713,13.893,24.095-19.039,24.095-15.975-24.095,25-24.095,28.232,19.814-14.014,24.095-15.29-6.976,10.194-6.976,10.194'
                              transform='matrix(0.966, 0.259, -0.259, 0.966, 6184.751, -11378.36)'
                            />
                          </svg>
                        </span>
                      </>
                    )}
                    {quiz[currentQuestion].type === 'gokken' && (
                      <>
                        <span
                          onClick={() =>
                            handleAnswer(
                              dynamicAnsMoney[0][index].check,
                              dynamicAnsMoney[0][index].partij,
                              dynamicAnsMoney[0][index].id
                            )
                          }
                        >
                          <svg
                            id='Artboard_2'
                            data-name='Artboard â€“ 2'
                            className='cls-1'
                          >
                            <rect className='cls-14' width='52' height='52' />
                            <g
                              id='Rectangle_116'
                              data-name='Rectangle 116'
                              className='cls-12'
                            >
                              <rect className='cls-15' width='52' height='52' />
                              <rect
                                className='cls-16'
                                x='1'
                                y='1'
                                width='50'
                                height='50'
                              />
                            </g>
                            <path
                              id='Path_44'
                              data-name='Path 44'
                              className='cls-13'
                              d='M0,0H36V36H0Z'
                              transform='translate(8 8)'
                            />
                            <circle
                              id='Ellipse_53'
                              data-name='Ellipse 53'
                              className='cls-14'
                              cx='14'
                              cy='14'
                              r='14'
                              transform='translate(12 12)'
                            />
                          </svg>
                        </span>
                        <span
                          data-value={dynamicAnsMoney[0][index].partij}
                          onClick={() =>
                            handleAnswer(
                              dynamicAnsMoney[0][index].check,
                              dynamicAnsMoney[0][index].partij,
                              dynamicAnsMoney[0][index].id
                            )
                          }
                        >
                          <svg
                            id='Artboard_2'
                            data-name='Artboard â€“ 2'
                            className='cls-1'
                          >
                            <rect className='cls-3' width='52' height='52' />
                            <path
                              id='Path_43'
                              data-name='Path 43'
                              className='cls-2'
                              d='M-3011.7,12604.991s11.39-7.488,12.615-5.355-11.808,14.413-7.713,13.893,24.095-19.039,24.095-15.975-24.095,25-24.095,28.232,19.814-14.014,24.095-15.29-6.976,10.194-6.976,10.194'
                              transform='matrix(0.966, 0.259, -0.259, 0.966, 6184.751, -11378.36)'
                            />
                          </svg>
                        </span>
                      </>
                    )}
                    {quiz[currentQuestion].type === 'kennis' && (
                      <>
                        <span
                          onClick={() =>
                            handleAnswer(
                              answers.check,
                              answers.answer,
                              answers.id
                            )
                          }
                        >
                          <svg
                            id='Artboard_2'
                            data-name='Artboard â€“ 2'
                            className='cls-1'
                          >
                            <rect className='cls-14' width='52' height='52' />
                            <g
                              id='Rectangle_116'
                              data-name='Rectangle 116'
                              className='cls-12'
                            >
                              <rect className='cls-15' width='52' height='52' />
                              <rect
                                className='cls-16'
                                x='1'
                                y='1'
                                width='50'
                                height='50'
                              />
                            </g>
                            <path
                              id='Path_44'
                              data-name='Path 44'
                              className='cls-13'
                              d='M0,0H36V36H0Z'
                              transform='translate(8 8)'
                            />
                            <circle
                              id='Ellipse_53'
                              data-name='Ellipse 53'
                              className='cls-14'
                              cx='14'
                              cy='14'
                              r='14'
                              transform='translate(12 12)'
                            />
                          </svg>
                        </span>
                        <span
                          data-value={answers.id}
                          onClick={() =>
                            handleAnswer(
                              answers.check,
                              answers.answer,
                              answers.id
                            )
                          }
                        >
                          <svg
                            id='Artboard_2'
                            data-name='Artboard â€“ 2'
                            className='cls-1'
                          >
                            <rect className='cls-3' width='52' height='52' />
                            <path
                              id='Path_43'
                              data-name='Path 43'
                              className='cls-2'
                              d='M-3011.7,12604.991s11.39-7.488,12.615-5.355-11.808,14.413-7.713,13.893,24.095-19.039,24.095-15.975-24.095,25-24.095,28.232,19.814-14.014,24.095-15.29-6.976,10.194-6.976,10.194'
                              transform='matrix(0.966, 0.259, -0.259, 0.966, 6184.751, -11378.36)'
                            />
                          </svg>
                        </span>
                      </>
                    )}
                    {quiz[currentQuestion].type === 'scenario' && (
                      <button
                        data-value={dynamicAns[indexType][index].id}
                        onClick={() =>
                          handleAnswer(
                            dynamicAns[indexType][index].check,
                            dynamicAns[indexType][index].partij,
                            dynamicAns[indexType][index].id
                          )
                        }
                      >
                        {dynamicAns[indexType][index].partij}
                      </button>
                    )}
                    {quiz[currentQuestion].type === 'gokken' && (
                      <button
                        data-value={dynamicAnsMoney[0][index].id}
                        onClick={() =>
                          handleAnswer(
                            dynamicAnsMoney[0][index].check,
                            dynamicAnsMoney[0][index].partij,
                            dynamicAnsMoney[0][index].id
                          )
                        }
                      >
                        {dynamicAnsMoney[0][index].partij}
                      </button>
                    )}
                    {quiz[currentQuestion].type === 'kennis' && (
                      <button
                        data-value={answers.id}
                        onClick={() =>
                          handleAnswer(
                            answers.check,
                            answers.answer,
                            answers.id
                          )
                        }
                      >
                        {answers.answer}
                      </button>
                    )}
                  </div>
                </>
              ))}{' '}
            </div>

            <div className='btnSection'>
              <button className='clickNext' onClick={handleNext}>
                Volgende
              </button>
            </div>
          </div>
        </>
      </div>
    </div>
  );
}
