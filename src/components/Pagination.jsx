
import { useState } from 'react'

export default function Pagination({ items, itemsPerPage = 5, renderItem }) {
  const [currentPage, setCurrentPage] = useState(1)

  const totalPages = Math.ceil(items.length / itemsPerPage)
  const startIndex = (currentPage - 1) * itemsPerPage
  const currentItems = items.slice(startIndex, startIndex + itemsPerPage)

  return (
    <div className="pagination-container">
      <div className="pagination-items">
        {currentItems.map((item, index) => (
          <div key={item.id ?? startIndex + index}>
            {renderItem(item)}
          </div>
        ))}
      </div>

      {totalPages > 1 && (
        <nav className="pagination" aria-label="Paginação dos registros">
          <button
            type="button"
            onClick={() => setCurrentPage((page) => page - 1)}
            disabled={currentPage === 1}
          >
            Anterior
          </button>

          <span aria-live="polite">
            Página {currentPage} de {totalPages}
          </span>

          <button
            type="button"
            onClick={() => setCurrentPage((page) => page + 1)}
            disabled={currentPage === totalPages}
          >
            Próxima
          </button>
        </nav>
      )}
    </div>
  )
}
