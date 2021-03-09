export default function ShowImg({ quiz, currentQuestion }) {
  return (
    <div className='ShowImg'>
      <div className='imgPart'>
        <img src={quiz[currentQuestion].image} alt='afbeelding bij vraag' />
      </div>
    </div>
  );
}
