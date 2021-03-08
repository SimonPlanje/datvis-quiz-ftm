import mainimg from '../images/main.jpg';

export default function Start({ setView, quiz }) {
  function handleStart() {
    setView('questions');
  }
  return (
    <div className="Start">
      <div className="startSection">
        <h1>
          Quiz over uitgaven van politieke partijen aan facebook en google
          advertenties.
        </h1>
        <img className="mainimg" src={mainimg} alt="Illustratie bij de quiz" />
        <div className="time">
          <h2>
            VRAGEN <span className="biggertext">{quiz.length}</span>
          </h2>
          <h2>
            TIJD <span>3</span> min
          </h2>
        </div>
        <p>
          Op google en facebook kunnen advertenties worden geplaatst gefocust op
          een specifieke doelgroep. Weet jij welke partijen jouw als belangrijke
          doelgroep zien? Doe de korte quiz...
        </p>
      </div>
      <div className="btnSection">
        <button className="nextBtn" onClick={handleStart}>
          Start de quiz!
        </button>
      </div>
    </div>
  );
}
