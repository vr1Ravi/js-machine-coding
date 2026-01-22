import { useCallback, useRef } from "react";

export function useDebounceHook(func, delay) {
const timerRef = useRef(null);
return useCallback(function(value){
if(timerRef.current) clearTimeout(timerRef.current)
timerRef.current = setTimeout(() => func(value), delay)
}, [func, delay])
}


