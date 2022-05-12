import React from "react";

/*
state
- an object
- change over time
- whenever it changes, the component will re-render.
*/

class Game extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      score: 0,
      message: "init",
      startTime: new Date(),
    };
  }

  render() {
    console.log(this.state);
    return (
      <div>
        Game Score: {this.state.score}
        <br />
        <button
          onClick={() => {
            const newScore = this.state.score + 1;
            const newState = {
              ...this.state,
              score: newScore,
              message: "clicked",
            };
            this.setState(newState);
          }}
        >
          +1
        </button>
      </div>
    );
  }
}

export default Game;
