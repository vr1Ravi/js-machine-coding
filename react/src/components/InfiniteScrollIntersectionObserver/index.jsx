import { useEffect, useRef, useState } from 'react'


/**
 * Intersection observer API (Browser api) for the first time triggers the callback with all entries.
 * After that whenever the intersection of element changed, then it gets triggered with those elemets as an entry;
 * 
 * Cons:-
 * 1. DOM overload due to large number of DOM elements:
 *   => Solution to upper issue are:
 *     1. "Pagination"
 *     2. Infinite Scroll + Virtualization (Todo)
 * 
 * Intersection observer API options:
 * 1. threshold :- the threshold option determines how much of the target element must be visible in the
 *                 root (viewport or a specified element) before the observer’s callback is triggered.
 * 2. rootMargin:- the rootMargin option defines a margin around the root (viewport or a specified element)
 *                 used to expand or shrink the area for intersection calculations.
 *                 It accepts values like CSS margin syntax (e.g., "10px 20px 10px 20px" for top, right, bottom, left).
                   Positive values expand the root area, so intersections are detected sooner.
                   Negative values shrink the root area, so intersections are detected later.
                   By default root is window

 */
function InfiniteScrollIntersectionObserver() {
  const [data, setData] = useState([... new Array(40)]);
  const [loading, setLoading] = useState(false);
  const itemsRef = useRef([])

  function loadMore(){
        setLoading(true)
        setTimeout(() => {
            setData(prev => [...prev, ... new Array(10)])
            setLoading(false)
        }, 2000)
    }

  useEffect(() => {
    const observer = new IntersectionObserver( function (entries){
    if(entries[0].isIntersecting){
        observer.unobserve(entries[0].target);
        loadMore()
    }
    }, {threshold: 0.6, });
    // itemsRef.current.forEach(itemRef => observer.observe(itemRef))
    const lastElement = itemsRef.current.at(-1)
    observer.observe(lastElement)

    return () => {
    observer.unobserve(lastElement)
    observer.disconnect();
    }
  },[data.length])
  return (
       <div className='item-container'>
        {
            data.map((__, index) => (
                // ref can take callback as well, which react calls internally
                <div ref={(el) => itemsRef.current[index] = el} className='item' key={index}>  
                    {index + 1}
                </div>
            ))
        }

        {loading && <p className='loader'>Loading.....</p>}
    </div>
  )
}

export default InfiniteScrollIntersectionObserver