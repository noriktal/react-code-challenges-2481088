import { useEffect, useState } from 'react'

export default function ScoreKeeper () {
  const [score, setScore] = useState( JSON.parse(localStorage.getItem('score')) || 0);

  useEffect(() => {
    localStorage.setItem('score', JSON.stringify(score));
  }, [score]);

  
  
  

  return (
    <div>
      <h1>Your score is: {score}</h1>
      <button onClick={() => setScore(prevScore => prevScore + 1)}>+</button>
      <button onClick={() => setScore(prevScore => prevScore - 1)}>-</button>
    </div>
  )
}
