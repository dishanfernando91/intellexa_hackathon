import { Modal } from '../Modal/Modal'
import '../shared/Button.css'
import './TicketModal.css'

interface TicketModalProps {
  isOpen: boolean
  onClose: () => void
  title: string
  message: string
}

export function TicketModal({ isOpen, onClose, title, message }: TicketModalProps) {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <div className="ticket-modal">
        <h2>{title}</h2>
        <p>{message}</p>
        <button onClick={onClose} className="btn-primary">
          Confirm
        </button>
      </div>
    </Modal>
  )
}

