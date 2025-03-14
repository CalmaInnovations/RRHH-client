import { FaAngleLeft, FaAngleRight } from "react-icons/fa6";

interface PaginationProps {
   currentPage: number;
   totalPages: number;
   onPageChange: (page: number) => void;
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

   const baseButtonStyles =
      "rounded transition-all duration-200 flex items-center justify-center font-medium px-3 py-2 text-sm";
   const activeButtonStyles =
      "bg-[#002D72] text-white hover:bg-[#2A5BA7] cursor-pointer";
   const inactiveButtonStyles =
      "bg-white text-[#002D72] hover:bg-gray-50 cursor-pointer border border-[#002D72]";
   const disabledButtonStyles =
      "bg-gray-100 text-gray-400 cursor-not-allowed border border-gray-200";

   return (
      <div className="flex justify-center items-center gap-1">
         <nav aria-label="Pagination" className="flex items-center gap-1">
            {/* Previous Button */}
            <button
               onClick={() => handlePageClick(currentPage - 1)}
               disabled={currentPage === 1}
               className={`${baseButtonStyles} ${
                  currentPage === 1
                     ? disabledButtonStyles
                     : inactiveButtonStyles
               }`}
            >
               <FaAngleLeft aria-hidden="true" className="size-4" />
               <span className="sr-only">Previous</span>
            </button>

            {/* Page Numbers */}
            {Array.from({ length: totalPages }, (_, index) => (
               <button
                  key={index + 1}
                  onClick={() => handlePageClick(index + 1)}
                  className={`${baseButtonStyles} ${
                     currentPage === index + 1
                        ? activeButtonStyles
                        : inactiveButtonStyles
                  }`}
               >
                  {index + 1}
               </button>
            ))}

            {/* Next Button */}
            <button
               onClick={() => handlePageClick(currentPage + 1)}
               disabled={currentPage === totalPages}
               className={`${baseButtonStyles} ${
                  currentPage === totalPages
                     ? disabledButtonStyles
                     : inactiveButtonStyles
               }`}
            >
               <FaAngleRight aria-hidden="true" className="size-4" />
               <span className="sr-only">Next</span>
            </button>
         </nav>
      </div>
   );
}
