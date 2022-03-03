import icon from "./images/icon-dice.svg";
import desk_divider from "./images/pattern-divider-desktop.svg";
import mobile_divider from "./images/pattern-divider-mobile.svg";

import React, { useEffect, useState } from "react";
import "./App.css";

const url = "https://api.adviceslip.com/advice";

function App() {
  const [quote, setQoute] = useState("Bringing a great quote for you.");
  const [adviceNum, setAdviceNum] = useState(0);

  const ChangeQoute = async () => {
    const response = await fetch(url);
    const data = await response.json();
    setQoute(data.slip.advice);
    setAdviceNum(adviceNum + 1);
  };

  useEffect(() => {
    ChangeQoute();
    setAdviceNum(adviceNum + 1);
  }, []);

  return (
    <main>
      <div className="parent">
        <h6>Advice no #{adviceNum > 9 ? adviceNum : `0${adviceNum}`}</h6>
        <p>"{quote}"</p>

        <img src={desk_divider} alt="divider image" className="divider" />

        <button className="quote-change" onClick={ChangeQoute}>
          <img src={icon} alt="dice icon" />
        </button>
      </div>

      <footer className="attribution">
        Challenge by{" "}
        <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">
          Frontend Mentor
        </a>
        . Coded by <a href="https://github.com/surajsarkar">Suraj Sarkar</a>.
      </footer>
    </main>
  );
}

export default App;
