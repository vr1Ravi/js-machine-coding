import { useState } from 'react';
import './App.css';
import { useDebounceHook } from './hooks/useDebounceHook';



function useDeboucedSearch(func, delay){
  const [search, setSearch] = useState("");
  const delayed = useDebounceHook(func, delay)
  const handleSearch = (event) => {
    setSearch(event.target.value)
    delayed(event.target.value)
  }
 return  {handleSearch, search}
}
function App() {
const {handleSearch, search} = useDeboucedSearch(log, 1000)
function log(value){
  console.log(value); 
}

  return (
   <div>
    <input value={search} onChange={handleSearch}/>
   </div>
  )
}

export default App
