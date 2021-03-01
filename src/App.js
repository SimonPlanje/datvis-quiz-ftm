import React, {useState, useEffect} from 'react'

import Questions from './components/Questions'
import Start from './components/Start'
import fetchData from './helper/data'

import icon1 from './images/icon1.PNG'
import icon2 from './images/icon2.PNG'
import icon3 from './images/icon3.PNG'
import icon4 from './images/icon4.PNG'
import icon5 from './images/icon5.PNG'


export default function App() {

  const quiz = [
    {
      question: 'Op welk platform konden politieke partijen geen advertenties kopen?',
      answers: [
        {answer: 'Facebook', check: false},
        {answer: 'Twitter', check: true},
        {answer: 'Google', check: false},
      ],
      correct: 'Twitter',
      type: 'kennis',
      image: icon1
  },
  {
    question: 'Welke partij adverteerde online met de campagne #10jaarRutte?',
    answers: [
      {answer: 'PVV', check: false},
      {answer: 'VVD', check: false},
      {answer: 'FvD', check: true},
    ],
    correct: 'FvD',
    type: 'kennis',
    image: icon2


  },
  {
    question: 'De 27-jarige Sanne uit Groningen houdt ervan om na een lange dag werken bij de gemeente als … om lekker op de bank door haar Facebook-feed te scrollen. Van welke partij komt zij de meeste advertenties tegen tijdens het scrollen?',
    answers: [
      {answer: 'D66', check: false},
      {answer: 'GroenLinks', check: true},
      {answer: 'FvD', check: false},
    ],
    correct: 'GroenLinks',
    type: 'scenario',
    image: icon3,
    category: {
      gender: 'vrouw',
      age: '25-34',
      geo: 'Groningen',
  }

  },
  {
  question: 'De 19-jarige Dennis kijkt op zondag altijd alle voetbalwedstrijden in zijn studentenkamer in Amsterdam. Zo nu en dan pakt hij zijn mobiel en zit hij op Instagram. Van welke partij ziet hij de meeste advertenties voorbij komen tijdens het scrollen?',
  answers: [
    {answer: 'PVV', check: false},
    {answer: 'PvdA', check: false},
    {answer: 'DENK', check: true},
  ],
  correct: 'DENK',
  type: 'scenario',
  image: icon4,
  category: {
    gender: 'man',
    age: '18-24',
    geo: 'Noord-Holland',
}
  },
  ]


const [startQuiz, setStartQuiz] = useState(true)
const [antwoorden, setAntwoord] = useState([])


//Barchartload state
const [dataState, setDataState] = useState('loading')

useEffect(() => {
  async function getData(){
  await fetchData(setDataState)
}
getData()
  }, [])


  return (
    <div className="App">
      {startQuiz ? 
      (<Start setStartQuiz={setStartQuiz}/>) : 
      (<Questions setAntwoord={setAntwoord} antwoorden={antwoorden} quiz={quiz} dataState={dataState} checkIcon={icon5}/>)
    }
    </div>
  );
}
