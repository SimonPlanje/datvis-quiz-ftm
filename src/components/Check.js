import React, {useState} from 'react'

export default function Check(antwoorden) {

const ans = antwoorden.antwoorden

const [checkCounter, setCheckCounter] = useState(0)

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

  return (
    <div className="CheckAns">
        <div className='question-section'>
          <h2 className='question-text'>{ans[checkCounter].vraag}</h2>
        </div>
        <div className='check-section'>
          <h2>Jouw antwoord was {ans[checkCounter].antwoord}</h2>
          {ans[checkCounter].check
        ? <h2>Juist</h2>
        : <h2>Onjuist</h2>
      } 
      <button className='noAns' onClick={handlePrevious}>Vorige</button>
      <button className='noAns' onClick={handleNext}>Volgende</button>
        </div>    
  </div>
  );
}
