import { useEffect, useRef, useState } from "react"
import "./style.css";


// getBoundingClientRect -> The getBoundingClientRect() method returns a DOMRect object that provides the size of an element and its position relative to the viewport 
// scrollend -> Event that gets triggered when user ends scrolling.

const getCapturedItems = (parentElement) => {
const parentBoundingRect = parentElement.getBoundingClientRect();
const children = Array.from(parentElement.children)
return children.filter(child => {
    const childBoundingRect = child.getBoundingClientRect();
    return childBoundingRect.top >= parentBoundingRect.top && childBoundingRect.bottom <= parentBoundingRect.bottom
}).map(child => child.innerText)
}


export const CaptureOnScroll = () => {
    const captureScreenRef = useRef(null);
      
    const handleScroll = () => {
        const capturedItems = getCapturedItems(captureScreenRef.current)
        console.log({capturedItems});
    }
    useEffect(() => {   
        if(captureScreenRef.current)
        captureScreenRef.current.addEventListener("scrollend", handleScroll);

        return () => {
            if(captureScreenRef.current)
            captureScreenRef.current.removeEventListener("scrollend", handleScroll)
        }
    },[])

return <div className="capture-screen" ref={captureScreenRef}>
      {
        (Array(27).fill("")).map((val, index) => (
            <div className="content" key={index}>{index}</div>
        ))
      }
    </div>
}