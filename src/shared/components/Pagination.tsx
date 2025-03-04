import { FaAngleLeft, FaAngleRight } from "react-icons/fa6";

interface PaginationProps {
  currentPage: number; // Página actual
  totalPages: number; // Total de páginas
  onPageChange: (page: number) => void; // Función para cambiar de página
}

export default function Pagination({
  currentPage,
  totalPages,
  onPageChange,
}: PaginationProps) {

  const handlePageClick = (page: number) => {
    if (page >= 1 && page <= totalPages) {
      onPageChange(page);
    }
  };

  return (
    <div className="hidden sm:flex sm:flex-1 sm:items-center sm:justify-between">
      <div>
        <nav
          aria-label="Pagination"
          className="isolate inline-flex -space-x-px rounded-md shadow-xs bg-light"
        >
          {/* Boton "Anterior" */}
          <button
            onClick={() => handlePageClick(currentPage - 1)}
            disabled={currentPage === 1}
            className="relative cursor-pointer inline-flex items-center rounded-l-md px-2 py-2 text-grey ring-1 ring-gray-300 ring-inset hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
          >
            <span className="sr-only">Previous</span>
            <FaAngleLeft aria-hidden="true" className="size-5" />
          </button>

          {/* Botones de paginas */}
          {Array.from({ length: totalPages }, (_, index) => (
            <button
              key={index + 1}
              onClick={() => handlePageClick(index + 1)}
              className={`relative inline-flex items-center px-4 py-2 text-sm font-semibold cursor-pointer ${
                currentPage === index + 1
                  ? "bg-primary text-light"
                  : "text-dark ring-1 ring-gray-300 ring-inset hover:bg-gray-50"
              } focus:z-20 focus:outline-offset-0`}
            >
              {index + 1}
            </button>
          ))}

          {/* Boton "Siguiente" */}
          <button
            onClick={() => handlePageClick(currentPage + 1)}
            disabled={currentPage === totalPages}
            className="relative cursor-pointer inline-flex items-center rounded-r-md px-2 py-2 text-grey ring-1 ring-gray-300 ring-inset hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
          >
            <span className="sr-only">Next</span>
            <FaAngleRight aria-hidden="true" className="size-5" />
          </button>
        </nav>
      </div>
    </div>
  );
}
