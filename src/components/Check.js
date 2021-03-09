import React, { useState } from 'react';
import Barchart from './checkPart/BarChart';
import CheckForm from './checkPart/CheckForm';
import ShowImg from './ShowImg';

export default function Check({ setView, quiz, dataState, totData }) {
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
      setShowScenario('kennis');
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

  //https://blog.abelotech.com/posts/number-currency-formatting-javascript/
  function formatNumber(num) {
    return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');
  }

  function makeCap(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }
  return (
    <div className='CheckAns'>
      <ShowImg quiz={quiz} currentQuestion={checkCounter} />
      <div className='question-section'>
        <h2 className='question-text'>{ans[checkCounter].vraag}</h2>
        {quiz[checkCounter].type === 'kennis' && (
          <p>{quiz[checkCounter].addition}</p>
        )}
        {quiz[checkCounter].type === 'gokken' && (
          <p>
            {totData[quiz[checkCounter].indextype].partij} gaf sinds 22 augustus
            2020 €{formatNumber(totData[quiz[checkCounter].indextype].midden)}{' '}
            uit.
          </p>
        )}
        {quiz[checkCounter].type === 'scenario' && (
          <p>
            {makeCap(dataState[quiz[checkCounter].indextype][0].gender)}
            {dataState[quiz[checkCounter].indextype][0].gender === 'man'
              ? 'nen'
              : 'en'}{' '}
            in de leeftijdsgroep{' '}
            {dataState[quiz[checkCounter].indextype][0].age} jaar uit{' '}
            {dataState[quiz[checkCounter].indextype][0].geo} worden het meest
            benaderd door {dataState[quiz[checkCounter].indextype][0].partij}.
          </p>
        )}
      </div>
      <div className='check-section'>
        <div className='answer-section'>
          {showScenario === 'kennis' && (
            <>
              <div className='ans-options'>
                {quiz[checkCounter].answers.map((answers) => (
                  <>
                    <CheckForm answers={answers} />
                  </>
                ))}
              </div>
              <h3>
                Jouw antwoord is{' '}
                <span className={`color${ans[checkCounter].check}`}>
                  {ans[checkCounter].antwoord}
                </span>
              </h3>
              {ans[checkCounter].check ? (
                <h3>Dit is het goede antwoord!</h3>
              ) : (
                <h3>
                  Het goede antwoord is{' '}
                  <span className='colortrue'>{ans[checkCounter].ans}</span>
                </h3>
              )}
            </>
          )}{' '}
          {showScenario === 'scenario' && (
            <>
              <div className='legenda'>
                <div className='legenda-rect'></div>
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
              <div className='legenda'>
                <div className='legenda-rect'></div>
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
      <div className='btnSection'>
        <div className='checkBtns'>
          <button className='prevBtn' onClick={handlePrevious}>
            Vorige
          </button>
          {showBtn ? (
            <button className='C-nextBtn' onClick={handleEnd}>
              Afronden
            </button>
          ) : (
            <button className='C-nextBtn' onClick={handleNext}>
              Volgende
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
