export default function ShowImg({quiz, currentQuestion}) {

  return (
    <div className="ShowImg">
        <p>{quiz[currentQuestion].type}</p>
        <img src={quiz[currentQuestion].image} alt="afbeelding bij de vraag"></img>
    </div>
  );
}