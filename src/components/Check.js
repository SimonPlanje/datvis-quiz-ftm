import React, { useState } from 'react';
import Barchart from './checkPart/BarChart';
import CheckForm from './checkPart/CheckForm';
import ShowImg from './ShowImg';

export default function Check({ setView, quiz, dataState, totData }) {
  // console.log(dataState);
  const ans = JSON.parse(localStorage.getItem('antwoorden'));

  const [checkCounter, setCheckCounter] = useState(0);
  const [showBtn, setShowBtn] = useState(false);

  const [correctAns, setCorrectAns] = useState(null);

  const [showScenario, setShowScenario] = useState('gokken');
  
  function handleNext() {
    const nextCheck = checkCounter + 1;

    if (nextCheck < ans.length - 1) {
      setShowScenario(quiz[checkCounter + 1].type);
      setCheckCounter(checkCounter + 1);
    } else {
      setCheckCounter(checkCounter + 1);
      setShowBtn(true);
    }
  }

  function handlePrevious() {
    setShowBtn(false);

    const prevCheck = checkCounter - 1;
    if (prevCheck > 0) {
      setShowScenario(quiz[checkCounter - 1].type);

      setCheckCounter(checkCounter - 1);
    } else {
      setCheckCounter(0);
    }
  }

  function handleEnd() {
    setView('end');
  }

  return (
    <div className="CheckAns">
      <ShowImg quiz={quiz} currentQuestion={checkCounter} />
      <div className="question-section">
        <h2 className="question-text">{ans[checkCounter].vraag}</h2>
      </div>
      <div className="check-section">
        <div className="answer-section">
          {showScenario === 'kennis' && (
            <>
              <div className="ans-options">
                {quiz[checkCounter].answers.map((answers) => (
                  <>
                    <CheckForm answers={answers} />
                  </>
                ))}
              </div>
              <h3>
                Jouw antwoord was{' '}
                <span className={`color${ans[checkCounter].check}`}>
                  {ans[checkCounter].antwoord}
                </span>
              </h3>
              {ans[checkCounter].check ? (
                <h3>Dit is het goede antwoord!</h3>
              ) : (
                <h3>
                  Het goede antwoord was{' '}
                  <span className="colortrue">{ans[checkCounter].ans}</span>
                </h3>
              )}
            </>
          )}{' '}
          {showScenario === 'scenario' && (
            <>
              <div className="legenda">
                <div className="legenda-rect"></div>
                <p>Jouw keuze: {ans[checkCounter].antwoord}</p>
              </div>

              <Barchart
                plotData={dataState}
                ans={ans}
                quiz={quiz}
                checkCounter={checkCounter}
                setCorrectAns={setCorrectAns}
                correctAns={correctAns}
              />
            </>
          )}
          {showScenario === 'gokken' && (
            <>
              <div className="legenda">
                <div className="legenda-rect"></div>
                <p>Jouw keuze: {ans[checkCounter].antwoord}</p>
              </div>

              <Barchart
                plotData={totData}
                ans={ans}
                quiz={quiz}
                checkCounter={checkCounter}
                setCorrectAns={setCorrectAns}
                correctAns={correctAns}
              />
            </>
          )}
        </div>
      </div>
      <div className="btnSection">
        <div className="checkBtns">
          <button className="prevBtn" onClick={handlePrevious}>
            Vorige
          </button>
          {showBtn ? (
            <button
              className="C-nextBtn"
              onClick={handleEnd}
            >
              Afronden
            </button>
          ) : (
            <button className="C-nextBtn" onClick={handleNext}>
              Volgende
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
