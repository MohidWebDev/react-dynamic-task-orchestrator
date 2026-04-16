import { useState } from "react";

function App() {
  const [counter, setCounter] = useState(0);
  const [newCounter, setNewCounter] = useState(0);
  const [obtainedMarks, setObtainedMarks] = useState(0);
  const [totalMarks, setTotalMarks] = useState(0);
  const [percentage, setPercentage] = useState(0);

  function calculatePercentage(e) {
    e.preventDefault();

    const userPercentage = (obtainedMarks / totalMarks) * 100;
    setPercentage(userPercentage);
  }

  return (
    <div>
      <div>
        <h1>Counter App & Percentage Calculator</h1>
      </div>

      <div>
        <button
          onClick={() => {
            setCounter(counter + 1);
          }}
        >
          Increment
        </button>
        <div>
          <h2>{counter}</h2>
        </div>
        <button
          onClick={() => {
            setCounter(counter - 1);
          }}
        >
          Decrement
        </button>
      </div>

      <div>
        <button
          onClick={() => {
            setNewCounter(newCounter + 50);
          }}
        >
          Increment +50
        </button>
        <div>
          <h2>{newCounter}</h2>
        </div>
        <button
          onClick={() => {
            setNewCounter(newCounter - 50);
          }}
        >
          Decrement -50
        </button>
      </div>

      <div>
        <form onSubmit={calculatePercentage}>
          <input
            type="number"
            name="obtained-marks"
            id="obtained-marks"
            placeholder="Enter Obtained Marks"
            onChange={(e) => {
              setObtainedMarks(Number(e.target.value));
            }}
          />
          <input
            type="number"
            name="total-marks"
            id="total-marks"
            placeholder="Enter Total Marks"
            onChange={(e) => {
              setTotalMarks(Number(e.target.value));
            }}
          />
          <button type="submit">Calculate</button>
        </form>

        <div>Your calculated percentage is {percentage}%</div>
      </div>
    </div>
  );
}
export default App;
