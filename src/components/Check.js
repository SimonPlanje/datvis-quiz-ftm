import React, {useState} from 'react'
import Barchart from './checkPart/BarChart'
import CheckForm from './checkPart/CheckForm'
import ShowImg from './ShowImg'
import End from './End'

export default function Check({quiz}) {


const ans = JSON.parse(localStorage.getItem('antwoorden'));

const [checkCounter, setCheckCounter] = useState(0)
const [showChecks, setShowChecks] = useState(false)
const [showBtn, setShowBtn] = useState(false)
const [end, setEnd] = useState(false)

const [showScenario, setShowScenario] = useState('kennis')


function handleNext(){

  const nextCheck = checkCounter + 1


  if(nextCheck < ans.length-1){
    setShowScenario(quiz[checkCounter+1].type)
    setCheckCounter(checkCounter + 1)

  }else{
    setCheckCounter(checkCounter + 1)
    setShowBtn(true)
  }
}

function handlePrevious(){
  setShowBtn(false)

  const prevCheck = checkCounter - 1
  if(prevCheck > 0){
    setShowScenario(quiz[checkCounter-1].type)

    setCheckCounter(checkCounter - 1)
  }else{
    setCheckCounter(0)
  }
}

function handleChecks(){
  setShowChecks(true)
}

function handleEnd(){
  setEnd(true)
}

console.log(checkCounter)
  return (
    <div className="CheckAns">
      {end ? (<>
      <End />
      </>):(<>
      
        {showChecks ? (
          <>
        <ShowImg quiz={quiz} currentQuestion={checkCounter}/>
        <div className='question-section'>
        <h2 className='question-text'>{ans[checkCounter].vraag}</h2>
      </div>
      <div className='check-section'>

        <div className='answer-section'>


          {showScenario === 'kennis' ? (<>
          		{quiz[checkCounter].answers.map(answers =>
            <>
           <CheckForm answers={answers}/>
            </>
            )}

          </>) : (<>
    
                    <Barchart ans={ans} quiz={quiz} checkCounter={checkCounter}/>

          </>)}

          </div>

          <h3>Jouw antwoord was <span className={`color${ans[checkCounter].check}`}>{ans[checkCounter].antwoord}</span></h3>
            {ans[checkCounter].check
      ? <h3>dit is het goede antwoord!</h3>
      : <h3>het goed antwoord was <span className='colortrue'>{ans[checkCounter].ans}</span></h3>
    } 
    <div className="checkBtns">
    <button className='prevBtn' onClick={handlePrevious}>Vorige</button>
    {showBtn ? <button className='C-nextBtn'  onClick={handleEnd}>Afronden</button>
             : <button className='C-nextBtn' onClick={handleNext}>Volgende</button>
    }
    </div>    
      </div>    			</>) : (
				<>
        <div>
        <h2>Je bent door de vragen heen, nu kan je kijken hoeveel je er goed had!</h2>
        <button className='nextBtn' onClick={handleChecks}>Volgende</button>
        </div>
				</>

      )}
      
      </>)}

  </div>
  );
}
