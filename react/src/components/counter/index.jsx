import React, { useEffect, useState } from 'react'


/**
 * Create two buttons start and stop.
   On the start click, start a counter that will increment by 1 every second.
   On the stop click, pause the counter.
   When the start is clicked again, resume the counter.
 */

const COUNTER_ACTION = {
    START: "start",
    STOP: "stop"
}
function Counter() {
    const [counter, setCounter] = useState(0);
    const [running, setRunning] = useState(false);



    useEffect(() => {
        let timeoutId;
        if(!running){
        if(timeoutId) clearTimeout(timeoutId)
         return;
        } 
        timeoutId = setInterval(() => {setCounter(prev => prev + 1)}, 1000)

    return () => {
        clearTimeout(timeoutId)
    }
    },[running])

    const handleCounterAction = (action) => {
        const {START, STOP} = COUNTER_ACTION
        if(running && action === START) return;
        if(!running && action === STOP) return;
        setRunning(action === START);
    }
  return (
    <div>
        <h2>{counter}</h2>
        <button onClick={() => handleCounterAction(COUNTER_ACTION.START)}>start</button>
        <button onClick={() => handleCounterAction(COUNTER_ACTION.STOP)}>stop</button>
    </div>
  )
}

export default Counter