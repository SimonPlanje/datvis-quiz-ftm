export default function ShowImg({quiz, currentQuestion}) {

  return (
    <div className="ShowImg">
        <p>{quiz[currentQuestion].type}</p>
        <img src='/public/images/icon1.PNG' alt='afbeelding bij vraag'></img>
    </div>
  );
}