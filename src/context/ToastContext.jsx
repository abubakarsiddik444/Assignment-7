import { useMemo, useState } from 'react'
import { ToastContext } from './toastContext.js'

export function ToastProvider({ children }) {
  const [toasts, setToasts] = useState([])

  const showToast = (message) => {
    const id = crypto.randomUUID()
    setToasts((current) => [...current, { id, message }])
    window.setTimeout(() => {
      setToasts((current) => current.filter((toast) => toast.id !== id))
    }, 2800)
  }

  const value = useMemo(() => ({ toasts, showToast }), [toasts])

  return <ToastContext.Provider value={value}>{children}</ToastContext.Provider>
}
