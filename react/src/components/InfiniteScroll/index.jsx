import { useRef, useState } from 'react';
import "./style.css"

const SCROLL_THRESHOLD = 20;
function InfiniteScrollDomApi() {
    const [data, setData] = useState([... new Array(40)]);
    const [loading, setLoading] = useState(false)

    function loadMore(){
        setLoading(true)
        setTimeout(() => {
            setData(prev => [...prev, ... new Array(10)])
            setLoading(false)
        }, 3000)
    }
    function handleScroll(event){
        const scrollTop = event.target.scrollTop;
        const clientHeight = event.target.clientHeight;
        const scrollHeight = event.target.scrollHeight

        const remainingScroll = scrollHeight - (scrollTop + clientHeight);
        if(remainingScroll <= SCROLL_THRESHOLD && !loading) loadMore();
    }
  return (
    <div className='item-container' onScroll={handleScroll}>
        {
            data.map((__, index) => (
                <div className='item' key={index}>
                    {index}
                </div>
            ))
        }

        {loading && <p className='loader'>Loading.....</p>}
    </div>
  )
}

export default InfiniteScrollDomApi