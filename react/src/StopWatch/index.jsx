import { useEffect, useRef, useState } from "react";
import "./style.css";

/**
 *
 * new Date().getTime(). = gives time in miliseconds which is past from 1970
 */
function StopWatch() {
  const [time, setTime] = useState(0);
  const stopwatchRef = useRef(0);
  const intervalRef = useRef(null);

  function handleStart() {
    stopwatchRef.current = new Date().getTime() - time;
    intervalRef.current = setInterval(() => {
      setTime(new Date().getTime() - stopwatchRef.current);
    }, 10);
  }

  function handlePasue() {
    clearInterval(intervalRef.current);
    intervalRef.current = null;
  }

  function handleReset() {
    clearInterval(intervalRef.current);
    setTime(0);
  }
  const formatTime = () => {
    const ms = Math.floor((time % 1000) / 10)
      .toString()
      .padStart(2, "0");
    const s = Math.floor((time / 1000) % 60)
      .toString()
      .padStart(2, "0");
    const m = Math.floor((time / (1000 * 60)) % 60)
      .toString()
      .padStart(2, "0");
    const h = Math.floor(time / (1000 * 60 * 60))
      .toString()
      .padStart(2, "0");
    return `${h}:${m}:${s}:${ms}`;
  };

  function handleBlur() {
    clearInterval(intervalRef.current);
  }
  function handleFocus() {
    if (intervalRef.current) handleStart();
  }
  useEffect(() => {
    window.addEventListener("blur", handleBlur);
    window.addEventListener("focus", handleFocus);

    return () => {
      window.removeEventListener("blur", handleBlur);
      window.removeEventListener("focus", handleFocus);
    };
  }, [time]);

  return (
    <div className="stopwatch">
      <span className="time">{formatTime()}</span>

      <div>
        <button className="error" onClick={handleStart}>
          Start
        </button>
        <button onClick={handlePasue}>Pause</button>
        <button onClick={handleReset}>Reset</button>
      </div>
    </div>
  );
}

export default StopWatch;
