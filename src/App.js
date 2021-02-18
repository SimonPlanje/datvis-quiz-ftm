import React, {useState} from 'react'

import Questions from './components/Questions'
import Start from './components/Start'

export default function App() {


const [startQuiz, setStartQuiz] = useState(true)


  return (
    <div className="App">
      {startQuiz ? 
      (<Start setStartQuiz={setStartQuiz}/>) : 
      (<Questions />)
    }
    </div>
  );
}
