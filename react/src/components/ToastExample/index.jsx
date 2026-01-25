import { toastService } from "../ToastContainer/service/ToastService"

function ToastContainer() {


  return (
    <div className='container'>
        <div className='btn-container'>
            <button onClick={() => {toastService.success("Sucess", {duration: 3000})}}>Success</button>
            <button>Info</button>
            <button>Warning</button>
            <button onClick={() => {toastService.error("error", {duration: 3000})}}>Error</button>
        </div>
    </div>
  )
}

export default ToastContainer