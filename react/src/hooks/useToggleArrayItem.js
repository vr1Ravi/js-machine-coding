import { useCallback, useState } from "react"

export default function useToggleArrayItem(items, initialIndex){
 const [currentIndex, setCurrentIndex] = useState(initialIndex % items.length);
 const toggle = useCallback(() => {
        setCurrentIndex(prevIndex => {
        return (prevIndex + 1) % items.length;
    })
 },[initialIndex])
return [toggle, items[currentIndex]]
}