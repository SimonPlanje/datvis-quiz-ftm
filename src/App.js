import React, { useState, useEffect } from 'react';

import Check from './components/Check';
import End from './components/End';
import Loading from './components/Loading';
import Questions from './components/Questions';
import Start from './components/Start';
import fetchData from './helper/data';
import formatBarData from './helper/formatBarData';
import GoToCheck from './components/GoToCheck';

import mainimg from './images/main.jpg';
import icon1 from './images/icon1.jpg';
import icon2 from './images/icon2.jpg';
import icon3 from './images/icon3.jpg';
import icon4 from './images/icon4.jpg';
import icon5 from './images/icon5.jpg';
import icon6 from './images/icon6.jpg';
import icon7 from './images/icon7.jpg';
import icon8 from './images/icon8.jpg';
import icon9 from './images/icon9.jpg';
import icon10 from './images/icon10.jpeg';

export default function App() {
  const quiz = [
    {
      question:
        'Welke partij gaf in totaal het meeste uit aan advertenties op Facebook en Google?',
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
      question: 'Welke partij gaf daarna het meeste geld uit?',
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
      question:
        'Welke partij plaatste sinds augustus 2020 geen online advertenties?',
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
      addition:
        'Tot 2 december 2020 waren er twee partijen die niet online adverteerden. Eén daarvan was 50PLUS.',
    },
    {
      question:
        'Op welke platforms kunnen politieke partijen geen advertenties kopen?',
      answers: [
        { answer: 'LinkedIn & Instagram', check: false, id: 'LI' },
        { answer: 'Twitter & YouTube', check: false, id: 'TY' },
        { answer: 'LinkedIn & Twitter', check: true, id: 'LT' },
      ],
      correct: 'LinkedIn & Twitter',
      type: 'kennis',
      image: icon4,
      addition:
        'Twitter zegt dit besluit te baseren op de overtuiging ‘dat een politieke boodschap zijn bereik moeten verdienen, niet kopen.’ LinkedIn stelt in zijn advertentierichtlijnen duidelijk dat het platform geen politieke advertenties toestaat, maar gaat niet in op de reden voor het verbod.',
    },
    {
      question: 'Welke partij adverteerde online met de campagne #10jaarRutte?',
      answers: [
        { answer: 'VVD', check: false, id: 'VVD' },
        { answer: 'FvD', check: true, id: 'FvD' },
        { answer: 'SP', check: false, id: 'SP' },
        { answer: 'GroenLinks', check: false, id: 'GroenLinks' },
        { answer: 'PvdA', check: false, id: 'PvdA' },
        { answer: 'PvdD', check: false, id: 'PvdD' },
      ],
      correct: 'FvD',
      type: 'kennis',
      image: icon5,
      addition:
        'Sommige advertenties uit deze campagne bevatten statistieken waaruit het falen van het beleid van Rutte zou blijken. De grafieken waren echter misleidend, omdat de partij had geknoeid met de assen van de grafieken.',
    },
    {
      question:
        'Maak de zin af: ‘Wie vorig voorjaar op Google zocht naar “FvD lid worden”, kreeg de volgende boodschap te zien: “Psst, word lid van …”’',
      answers: [
        { answer: 'PvdA', check: false, id: 'PvdA' },
        { answer: 'VVD', check: true, id: 'VVD' },
        { answer: 'SGP', check: false, id: 'SGP' },
        { answer: 'D66', check: false, id: 'D66' },
        { answer: 'SP', check: false, id: 'SP' },
        { answer: 'CDA', check: false, id: 'CDA' },
      ],
      correct: 'VVD',
      type: 'kennis',
      image: icon6,
      addition:
        "In de tekst van de advertentie staat verder: 'Je wilt toch geen lid worden van FvD? Kom bij de grootste politieke partij en strijd mee. Wij krijgen dingen voor elkaar.'",
    },
    {
      question:
        'Welke partij gaf meer geld uit aan het promoten van de Facebookpagina van de lijsttrekker, dan aan de pagina van de pagina zelf?',
      answers: [
        { answer: 'VVD', check: false, id: 'VVD' },
        { answer: 'CDA', check: false, id: 'CDA' },
        { answer: 'PvdD', check: false, id: 'PvdD' },
        { answer: 'ChristenUnie', check: true, id: 'ChristenUnie' },
        { answer: 'FvD', check: false, id: 'FvD' },
        { answer: 'GroenLinks', check: false, id: 'GroenLinks' },
      ],
      correct: 'ChristenUnie',
      type: 'kennis',
      image: icon7,
      addition:
        '‘We merken al jaren dat posts van de pagina van Gert-Jan (Segers, red.) meer mensen bereiken en meer reacties uitlokken dan posts via onze partijpagina,’ vertelt een woordvoerder van de partij.',
    },
    {
      question:
        'De 27-jarige Sanne uit Groningen houdt ervan om na een lange dag werken op de bank door haar Facebook-feed te scrollen. Van welke partij zal Sanne de meeste advertenties tegenkomen?',
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
        'De 19-jarige Dennis kijkt op zondag altijd voetbal in zijn Amsterdamse studentenkamer. Ook kijkt hij regelmatig op Instagram. Van welke partij ziet Dennis tijdens het scrollen de meeste advertenties voorbijkomen?',
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
    {
      question:
        'Welke partij lanceerde in november 2020 maar liefst 777 keer dezelfde advertentie, met hetzelfde filmpje, om te testen welke doelgroep er het beste op reageerde?',
      answers: [
        { answer: 'D66', check: false, id: 'D66' },
        { answer: 'CDA', check: false, id: 'CDA' },
        { answer: 'VVD', check: false, id: 'VVD' },
        { answer: 'GroenLinks', check: false, id: 'GroenLinks' },
        { answer: 'PvdA', check: true, id: 'PvdA' },
        { answer: 'FvD', check: true, id: 'FvD' },
      ],
      correct: 'PvdA',
      type: 'kennis',
      image: icon10,
      addition:
        'In februari 2021 verscheen het filmpje opnieuw, dit keer gericht op één specifieke doelgroep (vrouwen op leeftijd) en met een groter bereik. De advertentie kostte tussen de 700 en 800 euro.',
    },
  ];

  const [view, setView] = useState('loading');

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
      // Data is loaded, set initial view
      setView('start');
    }
    getData();
  }, []);

  return (
    <React.Suspense fallback='Laden...'>
      <a className='header'>
        <img
          src='https://www.ftm.nl/assets/img/wordmark_black.svg'
          alt='Follow the Money'
        />
      </a>
      <div className='App'>
        {view === 'loading' && <Loading />}
        {view === 'start' && <Start setView={setView} quiz={quiz} />}
        {view === 'questions' && (
          <Questions
            dynamicAns={dynamicAns}
            dynamicAnsMoney={dynamicAnsMoney}
            setAntwoord={setAntwoord}
            antwoorden={antwoorden}
            setView={setView}
            quiz={quiz}
            dataState={dataState}
            totData={totData}
            checkIcon={icon5}
          />
        )}
        {view == 'gotocheck' && <GoToCheck setView={setView} />}
        {view == 'check' && (
          <Check
            setView={setView}
            quiz={quiz}
            dataState={dataState}
            totData={totData}
          />
        )}
        {view == 'end' && <End quiz={quiz} />}
      </div>
    </React.Suspense>
  );
}
