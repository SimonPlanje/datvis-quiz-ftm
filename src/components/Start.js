import mainimg from '../images/main.jpg';

export default function Start({ setView, quiz }) {
  function handleStart() {
    setView('questions');
  }
  return (
    <div className='Start'>
      <div className='startSection'>
        <h1>
          Quiz: weet jij hoe politieke partijen online jouw stem proberen te
          winnen?
        </h1>
        <div className='time'>
          <h2>
            VRAGEN <span className='biggertext'>{quiz.length}</span>
          </h2>
          <h2>
            TIJD <span>3</span> min
          </h2>
        </div>
        <p>
          De stille strijd om jouw stem is in volle gang. Weet jij hoe politieke
          partijen hun publiek proberen te bereiken? Doe de test! Deze quiz is
          gemaakt op basis van vrijgegeven data van Google en Facebook over
          online advertenties. Daaruit wordt duidelijk hoe er campagne wordt
          gevoerd op deze platforms. De data gaat terug tot augustus 2020.
        </p>
        <div className='btnSection'>
          <button className='nextBtn' onClick={handleStart}>
            Start de quiz
          </button>
        </div>
      </div>
    </div>
  );
}
