import React, {useState} from 'react'


export default function ShowImg({quiz, currentQuestion}) {


  return (
    <div className="ShowImg">
        <p>{quiz[currentQuestion].type}</p>
        <img src={quiz[currentQuestion].image} alt='afbeelding bij vraag'></img>
    </div>
  );
}