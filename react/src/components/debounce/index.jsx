import { useDeboucedSearch } from "../../hooks/useDebouncedSearch";


function DebounceSearch() {
const {handleSearch, search} = useDeboucedSearch(log, 1000)
function log(value){
  console.log(value); 
}
  return (
       <input value={search} onChange={handleSearch}/>

  )
}

export default DebounceSearch