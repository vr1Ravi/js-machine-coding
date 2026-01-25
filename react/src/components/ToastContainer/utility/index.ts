import { ToastType } from "../types"

export function getIcon(toastype: ToastType){
const iconStore : Record<ToastType, React.ReactNode> = {
  error: "❌",
  success: "✔️"
}
return iconStore[toastype]
}