import { useState } from "react";
import { TableProps } from "../../types/types";
import Pagination from "./Pagination";
import { useNavigate } from "react-router-dom";

function TableComponents({ rowsPerPageTable, pathNavigate }: { rowsPerPageTable: number, pathNavigate: string }) {
    const data: TableProps[] = [
        { id: 1, bookNumber: "123", title: "طلب اجازة", sender: "الموارد البشرية", receiver: "الحسابات", date: "2024-03-03", type: "عام", status: "قيد الانجاز" },
        { id: 2, bookNumber: "124", title: "طلب اجازة", sender: "الموارد البشرية", receiver: "الحسابات", date: "2024-03-02", type: "عام", status: "قيد الانجاز" },
        { id: 3, bookNumber: "125", title: "طلب اجازة", sender: "الموارد البشرية", receiver: "الحسابات", date: "2024-03-01", type: "عام", status: "قيد الانجاز" },
        { id: 4, bookNumber: "126", title: "كتاب 4", sender: "الموارد البشرية", receiver: "الحسابات", date: "2024-02-28", type: "عام", status: "قيد الانجاز" },
        { id: 5, bookNumber: "127", title: "كتاب 5", sender: "الموارد البشرية", receiver: "الحسابات", date: "2024-02-27", type: "خاص", status: "قيد الانجاز" },
        { id: 6, bookNumber: "128", title: "كتاب 6", sender: "الموارد البشرية", receiver: "الحسابات", date: "2024-02-26", type: "خاص", status: "قيد الانجاز" },
        { id: 7, bookNumber: "129", title: "كتاب 7", sender: "الموارد البشرية", receiver: "الحسابات", date: "2024-02-25", type: "خاص", status: "قيد الانجاز" },
    ];

    const [currentPage, setCurrentPage] = useState<number>(1);
    const rowsPerPage = rowsPerPageTable || 5;

    const totalPages = Math.ceil(data.length / rowsPerPage);
    const paginatedData = data.slice((currentPage - 1) * rowsPerPage, currentPage * rowsPerPage);

    // handle navigate to book details page
    const navigate = useNavigate();
    const handleClick = (id: number) => {
        navigate(`${pathNavigate}/${id}`);
    };

    return (
        <div className="p-4">
            <div className="w-full overflow-x-auto ">
                {/* Grid Header (Hidden on small screens) */}
                <div className="hidden md:grid grid-cols-7 md:place-items-center bg-primary-10 text-primary-150 text-xs sm:text-sm md:text-base font-semibold  py-3 md:py-4 px-3 md:px-6 text-center rounded-[20px]">
                    <div>رقم الكتاب</div>
                    <div>عنوان الكتاب</div>
                    <div>المرسل</div>
                    <div>المستقبل</div>
                    <div>التاريخ</div>
                    <div>نوع الكتاب</div>
                    <div>الحاله</div>
                </div>

                {/* Grid Body */}
                <div className="grid gap-2">
                    {paginatedData.map((book) => (
                        <div
                            key={book.id}
                            className="grid grid-cols-1 md:grid-cols-7 md:place-items-center text-center text-primary-150 font-medium bg-white p-4 rounded-lg shadow-sm hover:bg-gray-100 cursor-pointer"
                            onClick={() => handleClick(book.id)}
                        >
                            {/* Mobile Layout: Labels + Values */}
                            <div className="md:hidden flex justify-between">
                                <span className="font-semibold">رقم الكتاب:</span>
                                <span>{book.bookNumber}</span>
                            </div>
                            <div className="md:hidden flex justify-between">
                                <span className="font-semibold">عنوان الكتاب:</span>
                                <span>{book.title}</span>
                            </div>
                            <div className="md:hidden flex justify-between">
                                <span className="font-semibold">المرسل:</span>
                                <span>{book.sender}</span>
                            </div>
                            <div className="md:hidden flex justify-between">
                                <span className="font-semibold">المستقبل:</span>
                                <span>{book.receiver}</span>
                            </div>
                            <div className="md:hidden flex justify-between">
                                <span className="font-semibold">التاريخ:</span>
                                <span>{book.date}</span>
                            </div>
                            <div className="md:hidden flex justify-between">
                                <span className="font-semibold">نوع الكتاب:</span>
                                <span>{book.type}</span>
                            </div>
                            <div className="md:hidden flex justify-between">
                                <span className="font-semibold">الحاله:</span>
                                <span>{book.status}</span>
                            </div>


                            {/* Desktop Layout */}
                            <div className="hidden md:block">{book.bookNumber}</div>
                            <div className="hidden md:block">{book.title}</div>
                            <div className="hidden md:block">{book.sender}</div>
                            <div className="hidden md:block">{book.receiver}</div>
                            <div className="hidden md:block">{book.date}</div>
                            <div className="hidden md:block">{book.type}</div>
                            <div className="hidden md:block text-success px-5 py-2 rounded-full bg-success-light">{book.status}</div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Pagination Component */}
            <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={setCurrentPage} />
        </div >

    );
}

export default TableComponents;
