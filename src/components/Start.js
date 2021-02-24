
export default function Start({setStartQuiz}) {

    function handleStart(){
        setStartQuiz(false)
    }

  return (
    <div className="Start">

        <h1>Welke politieke partijen focussen op de doelgroep waarin jij valt?</h1>
        <p>Op google en facebook kunnen advertenties worden geplaatst gefocust op een specifieke doelgroep. Weet jij welke partijen jouw als belangrijke doelgroep zien? Doe de korte quiz...</p>
        <button className='nextBtn' onClick={handleStart}>Start Quiz</button>
    </div>
  );
}
