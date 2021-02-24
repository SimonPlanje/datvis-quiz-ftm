import React, {useState} from 'react'

export default function Check({quiz}) {

const ans = JSON.parse(localStorage.getItem('antwoorden'));

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



        <div className='answer-section'>
						{quiz[checkCounter].answers.map(answers =>
            <>
            <div className='button'>

              <span >
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
              <span className={`is${answers.check}`}>
              <svg id="Artboard_2" data-name="Artboard â€“ 2" class="cls-1">
    <rect class="cls-3" width="52" height="52"/>
    <path id="Path_43" data-name="Path 43" class="cls-2" d="M-3011.7,12604.991s11.39-7.488,12.615-5.355-11.808,14.413-7.713,13.893,24.095-19.039,24.095-15.975-24.095,25-24.095,28.232,19.814-14.014,24.095-15.29-6.976,10.194-6.976,10.194" transform="matrix(0.966, 0.259, -0.259, 0.966, 6184.751, -11378.36)"/>
  </svg>

              </span>
            <button data-value={answers.answer} >{answers.answer}</button>
            </div>
            </>
            )}

					</div>



        
                {ans[checkCounter].check
      ? <h2>{ans[checkCounter].antwoord} is het goede antwoord!</h2>
      : <h2>{ans[checkCounter].antwoord} is onjuist, het goed antwoord was {ans[checkCounter].ans}</h2>
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
