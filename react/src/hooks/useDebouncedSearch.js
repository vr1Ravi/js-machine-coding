import { useState } from "react";
import { useDebounceHook } from "./useDebounceHook";

export function useDeboucedSearch(func, delay){
  const [search, setSearch] = useState("");
  const delayed = useDebounceHook(func, delay)
  const handleSearch = (event) => {
    setSearch(event.target.value)
    delayed(event.target.value)
  }
 return  {handleSearch, search}
}