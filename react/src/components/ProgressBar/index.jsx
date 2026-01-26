import React, { useEffect, useRef, useState } from 'react'
import "./style.css";
import useProgressBar from './hooks/useProgressBar';

function ProgressBar() {
    const progressCompletionRefs = useRef([])
    const {progressBars, addProgressBar} = useProgressBar(progressCompletionRefs);
    
    
    const handleAddProgressBar = () => {
        addProgressBar({id: crypto.randomUUID(), completionTime : Math.ceil(Math.random() * 4) + 1})
    }
useEffect(() => {console.log({progressCompletionRefs: progressCompletionRefs.current});},[progressBars])


  return (
    <div>
        <button onClick={handleAddProgressBar}>Add</button>
        <div className='progress-container'>
            {
                progressBars.map((bar, index) => (
                     <div key={bar.id} className='progress'>
                        <div ref={(el) => progressCompletionRefs.current[index] = el} className='progress progress-completion'></div>
                    </div>
                ))
            }
        </div>
    </div>
  )
}

export default ProgressBar