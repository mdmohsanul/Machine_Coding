import { useState } from "react";
import "./App.css";
import { useReducer } from "react";

function App() {
  const [hours, setHours] = useState("");
  const [minutes, setMinutes] = useState("");
  const [seconds, setSeconds] = useState("");
  const [showTimer, setShowTimer] = useState(false);

  const starthandler = () => {
    if (hours > 0 && minutes > 0 && seconds > 0) {
      setShowTimer(true);
    }
    console.log(hours, minutes, seconds);
  };
  return (
    <>
      <main className="bg-gray-900 min-h-screen">
        <h1 className="text-center text-4xl py-5 text-white">Timer</h1>
        <div className="max-w-2xl mx-auto border border-gray-200 h-32">
          <div className="flex items-center justify-center gap-11 pt-8">
            <input
              type="number"
              name=""
              id="hours"
              value={hours}
              onChange={(e) => setHours(e.target.value)}
              className="border border-gray-200 w-20 h-12 text-white px-2 text-2xl"
              placeholder="HH"
            />
            <input
              type="number"
              name=""
              id="minutes"
              value={minutes}
              onChange={(e) => setMinutes(e.target.value)}
              className="border border-gray-200 w-20 h-12 text-white px-2 text-2xl"
              placeholder="MM"
            />
            <input
              type="number"
              name=""
              id="seconds"
              value={seconds}
              onChange={(e) => setSeconds(e.target.value)}
              className="border border-gray-200 w-20 h-12 text-white px-2 text-2xl"
              placeholder="SS"
            />{" "}
            <button
              className="text-white border border-gray-200 py-3 px-7 text-2xl cursor-pointer"
              onClick={starthandler}
            >
              Start
            </button>
          </div>
        </div>
      </main>
    </>
  );
}

export default App;
