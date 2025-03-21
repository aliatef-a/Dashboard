import { useState } from "react";
import Pagination from "../shared/Pagination";

function ReportsTabls({ rowsPerPageTable }: { rowsPerPageTable?: number }) {
    const data = [
        { id: 1, info: "تم إضافة مراسلة جديدة برقم 26588", date: "2024-03-03", time: "12:30", status: "معلومة" },
        { id: 2, info: "تم إضافة مراسلة جديدة برقم 26588", date: "2024-03-02", time: "10:15", status: "معلومة" },
        { id: 3, info: "تم إضافة مراسلة جديدة برقم 26588", date: "2024-03-01", time: "09:45", status: "معلومة" },
        { id: 4, info: "كتاب 4", date: "2024-02-28", time: "14:00", status: "معلومة" },
        { id: 5, info: "كتاب 5", date: "2024-02-27", time: "16:20", status: "معلومة" },
        { id: 6, info: "كتاب 6", date: "2024-02-26", time: "11:10", status: "معلومة" },
        { id: 7, info: "كتاب 7", date: "2024-02-25", time: "13:30", status: "معلومة" },
    ];

    const [currentPage, setCurrentPage] = useState<number>(1);
    const rowsPerPage = rowsPerPageTable || 5;

    const totalPages = Math.ceil(data.length / rowsPerPage);
    const paginatedData = data.slice((currentPage - 1) * rowsPerPage, currentPage * rowsPerPage);

    return (
        <div className="p-4">
            <div className="w-full overflow-x-auto">
                {/* Grid Header */}
                <div className="hidden md:grid grid-cols-4 md:place-items-center bg-primary-20 text-primary-150 text-xs sm:text-sm md:text-base font-semibold py-3 md:py-4 px-3 md:px-6  rounded-[20px]">
                    <div>الوقت</div>
                    <div>التاريخ</div>
                    <div>الحالة</div>
                    <div>المعلومة</div>
                </div>

                {/* Grid Body */}
                <div className="grid gap-2">
                    {paginatedData.map((item) => (
                        <div
                            key={item.id}
                            className="grid grid-cols-1 md:grid-cols-4 text-center text-primary-150 font-medium bg-white p-4 rounded-lg shadow-sm hover:bg-gray-100 cursor-pointer"
                        >
                            {/* Mobile Layout: Labels + Values */}
                            <div className="md:hidden flex justify-between">
                                <span className="font-semibold">الوقت:</span>
                                <span>{item.time}</span>
                            </div>
                            <div className="md:hidden flex justify-between">
                                <span className="font-semibold">التاريخ:</span>
                                <span>{item.date}</span>
                            </div>
                            <div className="md:hidden flex justify-between">
                                <span className="font-semibold">الحالة:</span>
                                <span>{item.status}</span>
                            </div>
                            <div className="md:hidden flex justify-between">
                                <span className="font-semibold">المعلومة:</span>
                                <span>{item.info}</span>
                            </div>

                            {/* Desktop Layout */}
                            <div className="hidden md:block">{item.time}</div>
                            <div className="hidden md:block">{item.date}</div>
                            <div className="hidden md:block">{item.status}</div>
                            <div className="hidden md:block">{item.info}</div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Pagination Component */}
            <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={setCurrentPage} />
        </div>
    );
}

export default ReportsTabls;
