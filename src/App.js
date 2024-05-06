import { useState } from "react";
import "./index.css";

export default function App() {
  return (
    <div className="container">
      <Counter />
    </div>
  );
}

function Counter() {
  const [count, setCount] = useState(0);
  const [step, setStep] = useState(1);

  function handleReset() {
    setCount(0);
    setStep(1);
  }

  const date = new Date("june 21 2027");
  date.setDate(date.getDate() + count);
  return (
    <div className="count-container">
      <div className="steps">
        <div className="range-input">
          <input
            type="range"
            min="0"
            max="20"
            value={step}
            onChange={(event) => setStep(Number(event.target.value))}
          />
        </div>
        <span className="text-color m-20"> Step: {step} </span>
      </div>

      <div className="m-16 count">
        <button onClick={() => setCount((count) => count - step)}> - </button>
        <input
          type="text"
          value={count}
          onChange={(e) => setCount(Number(e.target.value))}
        />
        <button onClick={() => setCount((count) => count + step)}> + </button>
      </div>

      <p>
        <span>
          {count === 0
            ? "Today is "
            : count > 0
            ? `${count} days from today is `
            : `${Math.abs(count)} days ago was `}
        </span>
        <span>{date.toDateString()}</span>
      </p>

      {count !== 0 || step !== 1 ? (
        <button className="button" onClick={handleReset}>
          Reset
        </button>
      ) : null}
    </div>
  );
}
