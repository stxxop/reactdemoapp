import React, { useState } from "react";
import "./Game.css";

/*
state
- an object
- change over time
- whenever it changes, the component will re-render.

hooks
- reusable chunks of code
- Prefixed with "use*"

*/

const Game = () => {
  // Array destrurting.

  const [score, setScore] = useState(0);
  const [message, setMessage] = useState("init");
  const [startTime, setStartTime] = useState(new Date());

  return (
    <div className="bold">
      Game Score: {score}
      <br />
      <button
        onClick={() => {
          const newScore = score + 1;
          setScore(newScore);
          setMessage("clicked");
        }}
      >
        +1
      </button>
    </div>
  );
};

export default Game;
