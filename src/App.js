import React, { useState, useEffect } from 'react';

import Questions from './components/Questions';
import Start from './components/Start';
import fetchData from './helper/data';
import formatBarData from './helper/formatBarData';
import Loading from './components/Loading';

import icon1 from './images/icon1.jpg';
import icon2 from './images/icon2.jpg';
import icon3 from './images/icon3.jpg';
import icon4 from './images/icon4.jpg';
import icon5 from './images/icon5.jpg';
import icon6 from './images/icon6.jpg';
import icon7 from './images/icon7.jpg';
import icon8 from './images/icon8.jpg';
import icon9 from './images/icon9.jpg';
// import icon10 from './images/icon10.jpg';

export default function App() {
  const quiz = [
    {
      question:
        'Welke partij gaf het meeste uit aan advertenties op Facebook en Google?',
      answers: [
        { answer: 'dynamic', check: false, id: 'dynamic' },
        { answer: 'dynamic', check: false, id: 'dynamic' },
        { answer: 'dynamic', check: false, id: 'dynamic' },
      ],
      type: 'gokken',
      indextype: 0,
      image: icon1,
    },
    {
      question: 'Wie is de runner-up?',
      answers: [
        { answer: 'dynamic', check: false, id: 'dynamic' },
        { answer: 'dynamic', check: false, id: 'dynamic' },
        { answer: 'dynamic', check: false, id: 'dynamic' },
      ],
      type: 'gokken',
      indextype: 1,
      image: icon2,
    },
    {
      question: 'Welke partij adverteert niet online?',
      answers: [
        { answer: 'DENK', check: false, id: 'DENK' },
        { answer: 'ChristenUnie', check: false, id: 'ChristenUnie' },
        { answer: 'PvdD', check: false, id: 'PvdD' },
        { answer: 'SP', check: false, id: 'SP' },
        { answer: 'SGP', check: false, id: 'SGP' },
        { answer: 'PVV', check: true, id: 'PVV' },
      ],
      correct: 'PVV',
      type: 'kennis',
      image: icon3,
    },
    {
      question:
        'Op welke platforms konden politieke partijen geen advertenties kopen?',
      answers: [
        { answer: 'LinkedIn & Instagram', check: false, id: 'LI' },
        { answer: 'Twitter & YouTube', check: false, id: 'TY' },
        { answer: 'YouTube & Instagram', check: false, id: 'YI' },
        { answer: 'LinkedIn & Twitter', check: true, id: 'LT' },
      ],
      correct: 'LinkedIn & Twitter',
      type: 'kennis',
      image: icon4,
    },
    {
      question: 'Welke partij adverteerde online met de campagne #10jaarRutte?',
      answers: [
        { answer: 'VVD', check: false, id: 'VVD' },
        { answer: 'FvD', check: true, id: 'FvD' },
        { answer: 'SP', check: false, id: 'SP' },
        { answer: 'GroenLinks', check: false, id: 'GroenLinks' },
      ],
      correct: 'FvD',
      type: 'kennis',
      image: icon5,
    },
    {
      question:
        'Maak de zin af. Wie vorig voorjaar op Google zocht naar "FvD lid worden", kreeg de volgende tekst voorgeschoteld: "FvD lid worden? Psst, word lid van ..."',
      answers: [
        { answer: 'PvdA', check: false, id: 'PvdA' },
        { answer: 'VVD', check: true, id: 'VVD' },
        { answer: 'SGP', check: false, id: 'SGP' },
        { answer: 'D66', check: false, id: 'D66' },
      ],
      correct: 'VVD',
      type: 'kennis',
      image: icon6,
    },
    {
      question:
        'Welke partij gaf meer advertentiegeld uit aan het promoten van de persoonlijke pagina van de lijsttrekker, dan aan de pagina van de partij?',
      answers: [
        { answer: 'VVD', check: false, id: 'VVD' },
        { answer: 'CDA', check: true, id: 'CDA' },
        { answer: 'PvdD', check: false, id: 'PvdD' },
        { answer: 'ChristenUnie', check: false, id: 'ChristenUnie' },
      ],
      correct: 'CDA',
      type: 'kennis',
      image: icon7,
    },
    {
      question:
        'De 27-jarige Sanne uit Groningen houdt ervan om na een lange dag werken lekker op de bank door haar Facebook-feed te scrollen. Van welke partij komt zij de meeste advertenties tegen tijdens het scrollen?',
      answers: [
        { answer: 'dynamic', check: false, id: 'dynamic' },
        { answer: 'dynamic', check: false, id: 'dynamic' },
        { answer: 'dynamic', check: false, id: 'dynamic' },
      ],
      type: 'scenario',
      indextype: 0,
      image: icon8,
      category: {
        gender: 'vrouw',
        age: '25-34',
        geo: 'Groningen',
      },
    },
    {
      question:
        "De 19-jarige Dennis kijkt op zondag altijd alle voetbal in z'n studentenkamer in Amsterdam. Ondertussen kijkt hij ook Instagram. Van welke partij ziet hij de meeste advertenties voorbij komen tijdens het scrollen?",
      answers: [
        { answer: 'dynamic', check: false, id: 'dynamic' },
        { answer: 'dynamic', check: false, id: 'dynamic' },
        { answer: 'dynamic', check: false, id: 'dynamic' },
      ],
      type: 'scenario',
      indextype: 1,
      image: icon9,
      category: {
        gender: 'man',
        age: '18-24',
        geo: 'Noord-Holland',
      },
    },
  ];

  const [loading, setLoading] = useState(false);

  const [startQuiz, setStartQuiz] = useState(true);
  const [antwoorden, setAntwoord] = useState([]);

  const [dynamicAns, setDynamicAns] = useState([]);
  const [dynamicAnsMoney, setDynamicAnsMoney] = useState([]);

  //Barchartload state
  const [dataState, setDataState] = useState([]);
  //Get the total spend per partij dataset
  const [totData, setTotData] = useState(null);

  useEffect(() => {
    async function getData() {
      const fbData =
        'https://docs.google.com/spreadsheets/d/119KqNUnKmnSKvQazSW4hv84UF0GgB5hp8ti_n_G4YGU/export?format=csv';
      const totaalData =
        'https://docs.google.com/spreadsheets/d/1JQv_AlrbjDIEI1FjwQs8GBT5_HncMtMGbAFrWKhm-1Q/export?format=csv';

      const data1 = await fetchData(fbData);
      const data2 = await fetchData(totaalData);
      await formatBarData(
        quiz,
        dynamicAns,
        data1,
        dataState,
        data2,
        dynamicAnsMoney,
        setTotData
      );
      setLoading(true);
    }
    getData();
  }, []);

  return (
    <div className="App">
      {loading === false ? (
        <Loading />
      ) : (
        <>
          {startQuiz ? (
            <Start setStartQuiz={setStartQuiz} quiz={quiz} />
          ) : (
            <Questions
              dynamicAns={dynamicAns}
              dynamicAnsMoney={dynamicAnsMoney}
              setAntwoord={setAntwoord}
              antwoorden={antwoorden}
              quiz={quiz}
              dataState={dataState}
              totData={totData}
              checkIcon={icon5}
            />
          )}
        </>
      )}
    </div>
  );
}
