import "../styles/Game.css";
import { useState } from "react";
import ScoreHolder from "./ScoreHolder";
import CardHolder from "./CardHolder";

export default function Game() {
  const [score, setScore] = useState(0);
  const [highScore, setHighScore] = useState(0);

  function incrementScore() {
    setScore((s) => s + 1);
  }

  function newHighScore() {
    if (highScore < score) {
      setHighScore(score);
    }
    setScore(0);
  }

  return (
    <div className="Game">
      <ScoreHolder string="Score" score={score} />
      <ScoreHolder string="High score" score={highScore} />
      <CardHolder incrementScore={incrementScore} setHighScore={newHighScore} />
    </div>
  );
}
