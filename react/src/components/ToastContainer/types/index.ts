export type ToastConfig = {
  duration?: number;
  closable?: boolean;
  position?: ToastPosition
}
export type ToastType = "success" | "error" ;
type ToastPosition = "top-right" | "top-bottom"

export type Toast = {
  id: string
  type: ToastType;
  message: string;
  config: ToastConfig
}