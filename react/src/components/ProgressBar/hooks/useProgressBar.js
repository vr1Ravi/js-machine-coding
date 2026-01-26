import React, { useCallback, useState } from 'react'

function useProgressBar(progressCompletionRefs) {
 const [progressBars, setProgressBars] = useState([]);

 const addProgressBar = useCallback((progressBar) => {
    if(progressBars.length === 0){
        setProgressBars(prev => [...prev, progressBar]);
        setTimeout(() => processProgressBar({...progressBar, ele : progressCompletionRefs.current[0]}), 0)
    }

 },[setProgressBars])



 const processProgressBar = async (progressBar) => {
    return new Promise((resolve, reject) => {
        const {ele, completionTime} = progressBar;        
        let trackTime = 0;
        let intervaleId;

        const completionRate = 100 / completionTime;
        intervaleId = setInterval(() => {
            trackTime+=1;
            ele.style.width = `${Math.min(parseFloat(ele.style.width) + completionRate, 100)}%`
             console.log({ele : ele.style.width});
            if(trackTime === completionTime) {
                clearInterval(intervaleId);
                resolve()
            }
        }, 1000)
    })
 }

  return {
    progressBars,
    addProgressBar
  }
}

export default useProgressBar