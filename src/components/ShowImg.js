export default function ShowImg({ quiz, currentQuestion }) {
  return (
    <div className='ShowImg'>
      <img src={quiz[currentQuestion].image} alt='afbeelding bij vraag' />
    </div>
  );
}
