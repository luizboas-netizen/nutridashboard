
import { useToast } from '../context/ToastContext'

export default function Toast({ message = 'Notificação de teste', type = 'info' }) {
  const { showToast } = useToast()

  return (
    <button
      type="button"
      className={`toast-demo-button toast-demo-${type}`}
      onClick={() => showToast(message, type)}
    >
      Testar notificação
    </button>
  )
}
