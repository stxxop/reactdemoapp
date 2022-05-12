import React from "react";
import { createRoot } from "react-dom/client";

/*
props
- an object
    - strings, numbers, objects, functions
- read-only input

*/

const App = (props) => {
  const { person, today } = props;
  return (
    <h1>
      Hi, {person.name}! {today}
      <div>Hi again! Hi!</div>
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
