import React, {useState} from 'react'

export default function Check(antwoorden) {

const ans = antwoorden.antwoorden

const [checkCounter, setCheckCounter] = useState(0)
const [showChecks, setShowChecks] = useState(false)


function handleNext(){
  const nextCheck = checkCounter + 1
  if(nextCheck < ans.length){
    setCheckCounter(checkCounter + 1)
  }else{
  }
}

function handlePrevious(){
  const prevCheck = checkCounter - 1
  if(prevCheck > 0){
    setCheckCounter(checkCounter - 1)
  }else{
    setCheckCounter(0)
  }
}

function handleChecks(){
  setShowChecks(true)
}

  return (
    <div className="CheckAns">
        {showChecks ? (
          <>
        <div className='question-section'>
        <h2 className='question-text'>{ans[checkCounter].vraag}</h2>
      </div>
      <div className='check-section'>
        <h2>Jouw antwoord was {ans[checkCounter].antwoord}</h2>
        {ans[checkCounter].check
      ? <h2>Dit antwoord is juist</h2>
      : <h2>Dit antwoord is onjuist</h2>
    } 
    <div className="checkBtns">
    <button className='prevBtn' onClick={handlePrevious}>Vorige</button>
    <button className='nextBtn' onClick={handleNext}>Volgende</button>
    </div>
      </div>    			</>) : (
				<>
        <div>
        <h2>Je bent door de vragen heen, nu kan je kijken hoeveel je er goed had!</h2>
        <button className='nextBtn' onClick={handleChecks}>Volgende</button>
        </div>
				</>

      )}
  </div>
  );
}
