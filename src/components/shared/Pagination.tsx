import { ChevronLeft, ChevronRight } from "lucide-react";
import { PaginationProps } from "../../types/types";

const Pagination: React.FC<PaginationProps> = ({ currentPage, totalPages, onPageChange }) => {
    const pageNumbers = [];
    for (let i = 1; i <= totalPages; i++) {
        if (i === 1 || i === totalPages || (i >= currentPage - 2 && i <= currentPage + 2)) {
            pageNumbers.push(i);
        } else if (pageNumbers[pageNumbers.length - 1] !== "...") {
            pageNumbers.push("...");
        }
    }

    return (
        <div className="flex justify-center items-center mt-6 gap-1">
            {/* Previous Button */}
            <button
                className={`flex items-center justify-center w-9 h-9 cursor-pointer rounded-[5px]  ${currentPage === 1 ? "bg-[#B4B4B4] text-white cursor-not-allowed" : "bg-primary-125 text-white hover:bg-blue-800"
                    }`}
                onClick={() => onPageChange(currentPage - 1)}
                disabled={currentPage === 1}
            >
                <ChevronRight strokeWidth={1} />
            </button>

            {/* Page Numbers */}
            {pageNumbers.map((page, index) => (
                <button
                    key={index}
                    className={`w-8 h-8 flex items-center justify-center cursor-pointer ${page === "..."
                        ? "text-gray-600"
                        : page === currentPage
                            ? "bg-primary-125 text-white rounded-[5px]"
                            : "bg-primary-10 text-gray-800 hover:bg-gray-300"
                        }`}
                    onClick={() => typeof page === "number" && onPageChange(page)}
                    disabled={page === "..."}
                >
                    {page}
                </button>
            ))}

            {/* Next Button */}
            <button
                className={`flex cursor-pointer rounded-[5px] items-center justify-center w-9 h-9 ${currentPage === totalPages ? "bg-[#B4B4B4] text-white cursor-not-allowed" : "bg-primary-125 text-white hover:bg-blue-800"
                    }`}
                onClick={() => onPageChange(currentPage + 1)}
                disabled={currentPage === totalPages}
            >
                <ChevronLeft strokeWidth={1} />
            </button>
        </div>
    );
};

export default Pagination;
