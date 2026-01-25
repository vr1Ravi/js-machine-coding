import { store } from "../store";
import { ToastConfig, ToastType } from "../types";

class ToastService {
   create(type: ToastType, config: ToastConfig, message: string){
    console.log({config});
    
    store.addToast({
      config : {
        closable : config.closable ?? false,
        duration: config.duration ?? 3000,
        position: config.position ?? "top-right"
      },
      id: crypto.randomUUID(),
      message,
      type
    })
   }

  success(message: string, config: ToastConfig){
        this.create("success",  config ?? {}, message)
    }
  error(message: string, config: ToastConfig){
         this.create("error", config ?? {}, message) 
    }

}

export const toastService = new ToastService();