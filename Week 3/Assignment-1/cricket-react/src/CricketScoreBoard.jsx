import { useState } from 'react'

const TOTAL_BALLS = 6
const POSSIBLE_RUNS = [0, 1, 2, 3, 4, 6]

function getRandomRuns() {
  return POSSIBLE_RUNS[Math.floor(Math.random() * POSSIBLE_RUNS.length)]
}

function CricketScoreBoard() {
  const [balls, setBalls] = useState(0)
  const [runs, setRuns] = useState(0)

  const isOverComplete = balls >= TOTAL_BALLS

  function handleHit() {
    if (isOverComplete) return

    setBalls((prevBalls) => prevBalls + 1)
    setRuns((prevRuns) => prevRuns + getRandomRuns())
  }

  function handleReset() {
    setBalls(0)
    setRuns(0)
  }

  return (
    <div className="container">
      <div className="scoreboard">
        <h1>Cricket Score Board</h1>
        <div className="stat">Balls : {balls}</div>
        <div className="stat">Runs : {runs}</div>
      </div>

      <p className="info-text">
        You get total of 6 balls(1 over). The button gets disabled after that
      </p>

      <div className="controls">
        <button onClick={handleHit} disabled={isOverComplete}>
          Click to hit the ball
        </button>
        <button onClick={handleReset}>Reset Game</button>
      </div>

      <div className="game-over">
        {isOverComplete &&
          `Over complete! Final score: ${runs} runs off ${balls} balls.`}
      </div>
    </div>
  )
}

export default CricketScoreBoard
