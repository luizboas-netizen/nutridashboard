
import { useState, useRef, useEffect } from 'react'

export default function DropdownMenu({ onAction }) {
  const [isOpen, setIsOpen] = useState(false)
  const menuRef = useRef(null)

  useEffect(() => {
    function handleClickOutside(event) {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsOpen(false)
      }
    }

    function handleEscape(event) {
      if (event.key === 'Escape') {
        setIsOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    document.addEventListener('keydown', handleEscape)

    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
      document.removeEventListener('keydown', handleEscape)
    }
  }, [])

  function selectAction(action) {
    setIsOpen(false)
    onAction?.(action)
  }

  return (
    <div className="dropdown" ref={menuRef}>
      <button
        type="button"
        className="dropdown-trigger"
        aria-haspopup="true"
        aria-expanded={isOpen}
        onClick={() => setIsOpen((open) => !open)}
      >
        Ações <span aria-hidden="true">▾</span>
      </button>

      {isOpen && (
        <div className="dropdown-menu" role="menu">
          <button
            type="button"
            role="menuitem"
            onClick={() => selectAction('Visualizar detalhes')}
          >
            Visualizar detalhes
          </button>
          <button
            type="button"
            role="menuitem"
            onClick={() => selectAction('Editar cadastro')}
          >
            Editar cadastro
          </button>
          <button
            type="button"
            role="menuitem"
            onClick={() => selectAction('Enviar mensagem')}
          >
            Enviar mensagem
          </button>
        </div>
      )}
    </div>
  )
}
