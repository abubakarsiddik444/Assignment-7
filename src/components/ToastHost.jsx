import { useToast } from '../hooks/useToast.js'

export default function ToastHost() {
  const { toasts } = useToast()

  return (
    <div className="toast-host" aria-live="polite" aria-atomic="true">
      {toasts.map((toast) => (
        <div className="toast" key={toast.id}>
          {toast.message}
        </div>
      ))}
    </div>
  )
}
