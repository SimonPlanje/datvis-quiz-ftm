import React, {useState} from 'react'


export default function Questions() {

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
    {answer: 'Groen Links', check: true},
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

const antwoord = [];


const [currentQuestion, setCurrentQuestion] = useState(0)
const [showResult, setShowResult] = useState(false)

const [userAnswers, setUserAnswers] = useState(null)

function handleAnswer(answer, check){

  
  setUserAnswers({"vraag" : currentQuestion+1, "antwoord" : check, "check" : answer}) 
  console.log(antwoord)


console.log(check)
console.log(answer)

    const nextQuestion = currentQuestion + 1
  if(nextQuestion < quiz.length){
    setCurrentQuestion(currentQuestion + 1)
  }else{
    setShowResult(true)
  }


}

  return (
    <div className="Questions">
			{showResult ? (
				<div className='score-section'>You reached the end of the quizzzzzz</div>
			) : (
				<>
					<div className='question-section'>
						<div className='question-text'>{quiz[currentQuestion].question}</div>
					</div>
					<div className='answer-section'>
						{quiz[currentQuestion].answers.map(answers =>
            <button className='btn btn-primary' onClick={ () =>handleAnswer(answers.check, answers.answer)}>{answers.answer}</button>
            )}

					</div>
				</>

      )}

    </div>
  );
}
