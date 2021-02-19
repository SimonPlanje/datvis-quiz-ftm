import React, {useState} from 'react'

import Questions from './components/Questions'
import Start from './components/Start'

export default function App() {


const [startQuiz, setStartQuiz] = useState(true)
const [antwoorden, setAntwoord] = useState([])


  return (
    <div className="App">
      {startQuiz ? 
      (<Start setStartQuiz={setStartQuiz}/>) : 
      (<Questions setAntwoord={setAntwoord} antwoorden={antwoorden}/>)
    }
    </div>
  );
}
