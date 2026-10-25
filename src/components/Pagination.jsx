
import { useState } from 'react'

export default function Pagination({ items, itemsPerPage = 5, renderItem }) {
  const [currentPage, setCurrentPage] = useState(1)

  const totalPages = Math.ceil(items.length / itemsPerPage)
  const startIndex = (currentPage - 1) * itemsPerPage
  const currentItems = items.slice(startIndex, startIndex + itemsPerPage)

 function changePage(page) {
  if (page >= 1 && page <= totalPages) {
    setCurrentPage(page)
  }
}

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
            onClick={() => changePage(currentPage - 1)}
            disabled={currentPage === 1}
          >
            Anterior
          </button>

          <div className="pagination-pages" aria-label="Selecionar página">
            {Array.from({ length: totalPages }, (_, index) => index + 1).map(
              (page) => (
                <button
                  key={page}
                  type="button"
                  className={currentPage === page ? 'active' : ''}
                  onClick={() => changePage(page)}
                  aria-label={`Ir para a página ${page}`}
                  aria-current={currentPage === page ? 'page' : undefined}
                >
                  {page}
                </button>
              )
            )}
          </div>
          
          <button
            type="button"
            onClick={() => changePage(currentPage + 1)}
            disabled={currentPage === totalPages}
          >
            Próxima
          </button>
        </nav>
      )}
    </div>
  )
}
