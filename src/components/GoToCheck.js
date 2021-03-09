export default function GoToCheck({setView}) {
  
  return (
    <div className="Check">
            <div className="checkSection">
              <h1>
                Je bent door de vragen heen, nu kan je kijken hoeveel je er goed
                had...
              </h1>
                <button className="nextBtn" onClick={() => setView('check')}>
                  Checken!
                </button>
          </div>
     
    </div>
  );
}
