import  { useEffect, useSyncExternalStore } from 'react'
import { Toast } from './types';
import { store } from './store';
import { getIcon } from './utility';
import "./style.css"

function Toaster() {
  const toasts = useSyncExternalStore(store.subscribe, store.getToasts) 
  return (
    <div className='toast-container'>
      {toasts.map(toast => <ToastComponent key={toast.id} {...toast}/>)}
    </div>
  )
}


function ToastComponent({ id, type , message, config : {closable, duration, position}} : Toast){

  useEffect(() => {
    let timeoutId = setTimeout(() => {store.removeToast(id)}, duration)
    return () => clearTimeout(timeoutId)
  },[])

  const handleToastClose = (id: string) => store.removeToast(id)
  return <div>
    {getIcon(type)}
    {message}
    {
      closable && <button onClick={()=> handleToastClose(id)}>x</button>
    }
  </div>
}





export default Toaster