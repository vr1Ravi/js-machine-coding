import { Toast } from "../types";

let toasts : Toast[] = []
let listners : Array<() => void> = []

class Store {

  removeToast(id: string){
    toasts = toasts.filter(toast => toast.id != id)
     emitChange();
  }
  addToast(toast : Toast){
    toasts = [...toasts, toast]
    console.log({toasts});
    
    emitChange();
  }

  subscribe(listner : () => void){
    listners = [...listners, listner]
    return () => {
      listners = listners.filter(l =>  l !== listner)
    }
  }

  getToasts(){
    return toasts
  }

}
function emitChange() {
  for (let listener of listners) {
    listener();
  }
}
export const store = new Store();