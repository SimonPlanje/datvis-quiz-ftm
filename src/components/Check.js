

export default function Check(antwoorden, currentQuestion) {
console.log(antwoorden.antwoorden[0])

const ans = antwoorden.antwoorden[0]

  return (
    <div className="CheckAns">
        <div className='question-section'>
          <h2 className='question-text'>{ans.vraag}</h2>
        </div>
        <div className='answer-section'>
          <h2>Jouw antwoord was {ans.antwoord}</h2>
          {ans.check
        ? <h2>Juist</h2>
        : <h2>Onjuist</h2>
      } 
      <button className='noAns' onClick={handleNext}>Volgende</button>
        </div>    
  </div>
  );
}
