import React, {useState} from 'react'

import Questions from './components/Questions'
import Start from './components/Start'

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
      img: '',
  },
  {
    question: 'Welke partij adverteerde online met de campagne #10jaarRutte?',
    answers: [
      {answer: 'PVV', check: false},
      {answer: 'VVD', check: false},
      {answer: 'FvD', check: true},
    ],
    correct: 'FvD'
  },
  {
    question: 'De 27-jarige Sanne uit Groningen houdt ervan om na een lange dag werken bij de gemeente als … om lekker op de bank door haar Facebook-feed te scrollen. Van welke partij komt zij de meeste advertenties tegen tijdens het scrollen?',
    answers: [
      {answer: 'D66', check: false},
      {answer: 'GroenLinks', check: true},
      {answer: 'FvD', check: false},
    ],
    correct: 'GroenLinks'
  },
  {
  question: 'De 19-jarige Dennis kijkt op zondag altijd alle voetbalwedstrijden in zijn studentenkamer in Amsterdam. Zo nu en dan pakt hij zijn mobiel en zit hij op Instagram. Van welke partij ziet hij de meeste advertenties voorbij komen tijdens het scrollen?',
  answers: [
    {answer: 'PVV', check: false},
    {answer: 'PvdA', check: false},
    {answer: 'DENK', check: true},
  ],
  correct: 'DENK'
  },
  ]


const [startQuiz, setStartQuiz] = useState(true)
const [antwoorden, setAntwoord] = useState([])




  return (
    <div className="App">
      {startQuiz ? 
      (<Start setStartQuiz={setStartQuiz}/>) : 
      (<Questions setAntwoord={setAntwoord} antwoorden={antwoorden} quiz={quiz}/>)
    }
    </div>
  );
}
