import React from "react";
import { createRoot } from "react-dom/client";

const App = () => {
  let today = new Date().toLocaleDateString();

  return (
    <h1>
      Hi, Jim! {today}
      <div>Hi again! Hi!</div>
      <div>Hi again!</div>
    </h1>
  );
};

const root = createRoot(document.getElementById("root"));
root.render(<App />);
