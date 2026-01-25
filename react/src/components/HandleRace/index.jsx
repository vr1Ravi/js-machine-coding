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

        return () => {
           flag = false 
        }
    },[search])
  return (
    <div>
        <input type='text' value={search} onChange={handleChange}/>
        {result}
    </div>
  )
}

export default HandleRaceExample