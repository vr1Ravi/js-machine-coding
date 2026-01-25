import React, { useEffect, useState } from 'react'


const getRandomTime = () => Math.floor(Math.random() * 3000);

function getRandomData(data) {
 return new Promise((res, rej) => {
   const time = getRandomTime();
   setTimeout(() => {
     res(data);
   }, time);
 });
}


function HandleRaceExample() {
    const [search, setSearch] = useState("");
    const [result, setResult] = useState("");

    const handleChange = (event) => {
        setSearch(event.target.value)
        
    }

    useEffect(() => {
        let flag = true;
        getRandomData(search).then((res) => {
            if(flag) setResult(res) 
        })

        // This will run in 2 cases when component mounts, unmounts (remove from dom) and prior to next re-render or prior to next update of state inside dep array
        // On reload the whole page cause this to run as well but technically that is unmounting and mounting (this is browser behaviour)
        return () => {
            console.log("runnnnnnn");
            
           flag = false 
        }
    },[])
  return (
    <div>
        <input type='text' value={search} onChange={handleChange}/>
        {result}
    </div>
  )
}

export default HandleRaceExample