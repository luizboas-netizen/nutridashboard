
import { useState } from 'react'

export default function Accordion({ items, allowMultiple = false }) {
  const [openItems, setOpenItems] = useState([])

  function toggleItem(index) {
    setOpenItems((current) => {
      if (current.includes(index)) {
        return current.filter((item) => item !== index)
      }

      return allowMultiple ? [...current, index] : [index]
    })
  }

  return (
    <div className="accordion">
      {items.map((item, index) => {
        const isOpen = openItems.includes(index)
        const panelId = `accordion-panel-${index}`

        return (
          <section className="accordion-item" key={item.title}>
            <h4 className="accordion-heading">
              <button
                type="button"
                className="accordion-trigger"
                aria-expanded={isOpen}
                aria-controls={panelId}
                onClick={() => toggleItem(index)}
              >
                <span>{item.title}</span>
                <span className="accordion-symbol" aria-hidden="true">
                  {isOpen ? '−' : '+'}
                </span>
              </button>
            </h4>

            <div
              id={panelId}
              className={`accordion-panel ${isOpen ? 'open' : ''}`}
              hidden={!isOpen}
            >
              <p>{item.content}</p>
            </div>
          </section>
        )
      })}
    </div>
  )
}
