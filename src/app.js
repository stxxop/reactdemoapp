import React from "react";
import { createRoot } from "react-dom/client";
import Game from "./Game";

/*
props
- an object
    - strings, numbers, objects, functions
- read-only input


Two types of components:
- Functional Components
- Class Components
*/

const App = (props) => {
  const { person, today } = props;
  return (
    <h1>
      Hi, {person.name}! {today}
      <div>
        <Game />
      </div>
    </h1>
  );
};

const root = createRoot(document.getElementById("root"));
root.render(
  <App
    person={{ name: "Beth", age: 24 }}
    today={new Date().toLocaleDateString()}
  />
);
