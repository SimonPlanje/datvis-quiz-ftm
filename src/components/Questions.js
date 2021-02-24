import React, {useState} from 'react'

import Check from './Check'

export default function Questions({setAntwoord, antwoorden}) {

const quiz = [
  {
    question: 'Op welk platform konden politieke partijen geen advertenties kopen?',
    answers: [
      {answer: 'Facbook', check: false},
      {answer: 'Twitter', check: true},
      {answer: 'Google', check: false},
    ]
},
{
  question: 'Welke partij adverteerde online met de campagne #10jaarRutte?',
  answers: [
    {answer: 'PVV', check: false},
    {answer: 'VVD', check: false},
    {answer: 'FvD', check: true},
  ]
},
{
  question: 'De 27-jarige Sanne uit Groningen houdt ervan om na een lange dag werken bij de gemeente als … om lekker op de bank door haar Facebook-feed te scrollen. Van welke partij komt zij de meeste advertenties tegen tijdens het scrollen?',
  answers: [
    {answer: 'D66', check: false},
    {answer: 'GroenLinks', check: true},
    {answer: 'FvD', check: false},
  ]
},
{
question: 'De 19-jarige Dennis kijkt op zondag altijd alle voetbalwedstrijden in zijn studentenkamer in Amsterdam. Zo nu en dan pakt hij zijn mobiel en zit hij op Instagram. Van welke partij ziet hij de meeste advertenties voorbij komen tijdens het scrollen?',
answers: [
  {answer: 'PVV', check: false},
  {answer: 'PvdA', check: false},
  {answer: 'DENK', check: true},
]
},
]



const [currentQuestion, setCurrentQuestion] = useState(0)
const [showResult, setShowResult] = useState(false)
const [currentAns, setCurrentAns] = useState(null)


function handleAnswer(check, answer){

  if(document.querySelector(`button.selected`)){
    document.querySelector(`button.selected`).classList.toggle('selected')
  }
  document.querySelector(`button[data-value=${answer}]`).classList.toggle('selected')


  if(document.querySelector(`span.viewRed`)){
    document.querySelector(`span.viewRed`).classList.toggle('viewRed')
  }
    document.querySelector(`span[data-value=${answer}]`).classList.toggle('viewRed')

  


  setCurrentAns({"vraag" : quiz[currentQuestion].question, "antwoord" : answer, "check" : check})

console.log(check)
console.log(answer)

}

function handleNext(){
  if(document.querySelector(`button.selected`)){
    document.querySelector(`button.selected`).classList.toggle('selected')
    document.querySelector(`span.viewRed`).classList.toggle('viewRed')

  }

if(currentAns){
  antwoorden.push(currentAns)

  const nextQuestion = currentQuestion + 1
  if(nextQuestion < quiz.length){
    setCurrentQuestion(currentQuestion + 1)
    setCurrentAns(null)
  }else{
    setCurrentQuestion(0)
    setShowResult(true)
  }
}else{
  alert('Selecteer eerst een antwoord!')
}
}
  return (
    <div className="Questions">
			{showResult ? (
				<Check antwoorden={antwoorden}/>
			) : (
				<>
					<div className='question-section'>
						<div className='question-text'><h2>{quiz[currentQuestion].question}</h2></div>
					</div>
					<div className='answer-section'>
						{quiz[currentQuestion].answers.map(answers =>
            <>
            <div className='button'>

              <span onClick={() =>handleAnswer(answers.check, answers.answer)}>
              <svg id="Artboard_2" data-name="Artboard â€“ 2" class="cls-1">
    <rect class="cls-14" width="52" height="52"/>
    <g id="Rectangle_116" data-name="Rectangle 116" class="cls-12">
      <rect class="cls-15" width="52" height="52"/>
      <rect class="cls-16" x="1" y="1" width="50" height="50"/>
    </g>
    <path id="Path_44" data-name="Path 44" class="cls-13" d="M0,0H36V36H0Z" transform="translate(8 8)"/>
    <circle id="Ellipse_53" data-name="Ellipse 53" class="cls-14" cx="14" cy="14" r="14" transform="translate(12 12)"/>
  </svg>

              </span>
              <span data-value={answers.answer} onClick={() =>handleAnswer(answers.check, answers.answer)}>
              <svg id="Artboard_2" data-name="Artboard â€“ 2" class="cls-1">
    <rect class="cls-3" width="52" height="52"/>
    <path id="Path_43" data-name="Path 43" class="cls-2" d="M-3011.7,12604.991s11.39-7.488,12.615-5.355-11.808,14.413-7.713,13.893,24.095-19.039,24.095-15.975-24.095,25-24.095,28.232,19.814-14.014,24.095-15.29-6.976,10.194-6.976,10.194" transform="matrix(0.966, 0.259, -0.259, 0.966, 6184.751, -11378.36)"/>
  </svg>

              </span>
            <button data-value={answers.answer} onClick={() =>handleAnswer(answers.check, answers.answer)}>{answers.answer}</button>
            </div>
            </>
            )}
            <button className='nextBtn' onClick={handleNext}>Volgende</button>

					</div>
				</>
      )}

    </div>
  );
}
