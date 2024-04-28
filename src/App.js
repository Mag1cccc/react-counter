import { useState } from "react";
import "./index.css";

export default function App() {
  return (
    <div className="container">
      <Count />
    </div>
  );
}

function Count() {
  const [count, setCount] = useState(0);
  const [step, setStep] = useState(1);
  const date = new Date("june 21 2027");
  date.setDate(date.getDate() + count);
  return (
    <div className="count-container">
      <div>
        <button onClick={() => setStep((step) => step - 1)}> - </button>
        <span className="text-color m-20"> Step: {step} </span>
        <button onClick={() => setStep((step) => step + 1)}> + </button>
      </div>

      <div className="m-16">
        <button onClick={() => setCount((count) => count - step)}> - </button>
        <span className="text-color m-20"> Count: {count} </span>
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
    </div>
  );
}
