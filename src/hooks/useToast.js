import { useContext } from 'react'
import { ToastContext } from '../context/toastContext.js'

export function useToast() {
  return useContext(ToastContext)
}
