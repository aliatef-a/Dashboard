import { useState } from "react";
import ArchiveHeader from "../../components/PageArchive/ArchiveHeader"
import { useNavigate } from "react-router-dom";
import Pagination from "../../components/shared/Pagination";
import { assets } from "../../assets/assets";

function BookArchiveTable() {
    interface TableArchiveProps {
        id: number;
        bookNumber: string;
        date: string;
        FolderStructure: string;
        QR: string;
    }

    const data: TableArchiveProps[] = [
        { id: 1, bookNumber: "123", date: "23 ديسمبر 2025", FolderStructure: "القوانين العامة", QR: assets.QrCode, },
        { id: 2, bookNumber: "124", date: "23 ديسمبر 2025", FolderStructure: "القوانين العامة", QR: assets.QrCode, },
        { id: 3, bookNumber: "125", date: "23 ديسمبر 2025", FolderStructure: "القوانين العامة", QR: assets.QrCode, },
        { id: 4, bookNumber: "126", date: "23 ديسمبر 2025", FolderStructure: "القوانين العامة", QR: assets.QrCode, },
        { id: 5, bookNumber: "127", date: "23 ديسمبر 2025", FolderStructure: "القوانين العامة", QR: assets.QrCode, },
        { id: 6, bookNumber: "128", date: "23 ديسمبر 2025", FolderStructure: "القوانين العامة", QR: assets.QrCode, },
        { id: 7, bookNumber: "129", date: "23 ديسمبر 2025", FolderStructure: "القوانين العامة", QR: assets.QrCode, },
    ];

    const [currentPage, setCurrentPage] = useState<number>(1);
    const rowsPerPage = 5;

    const totalPages = Math.ceil(data.length / rowsPerPage);
    const paginatedData = data.slice((currentPage - 1) * rowsPerPage, currentPage * rowsPerPage);

    // handle navigate to book details page
    const navigate = useNavigate();
    const handleClick = (id: number) => {
        navigate(`/archive/details-book-archive/${id}`);
    };
    return (
        <section>
            <div className="container-page">
                <div >
                    <ArchiveHeader items={[{ label: "الأرشفة الإلكترونية " }, { label: " ملف القانون العام ", href: "#" }, { label: " ملف رقم 1 ", href: "#" }]} />
                </div>
                <div className="start-section">
                    <div className="p-4">
                        <div className="w-full overflow-x-auto ">
                            {/* Grid Header (Hidden on small screens) */}
                            <div className="hidden md:grid grid-cols-4 bg-primary-10 text-primary-150 text-xs sm:text-sm md:text-base font-semibold  py-3 md:py-4 px-3 md:px-6 text-center rounded-[20px]">
                                <div>رقم الكتاب</div>
                                <div>تاريخ الكتاب</div>
                                <div>هيكلة المجلدات</div>
                                <div>QR Code</div>
                            </div>

                            {/* Grid Body */}
                            <div className="grid gap-2">
                                {paginatedData.map((book) => (
                                    <div
                                        key={book.id}
                                        className="grid grid-cols-1 md:grid-cols-4 text-center md:place-items-center text-primary-150 font-medium bg-white p-4 rounded-lg shadow-sm hover:bg-gray-100 cursor-pointer"
                                        onClick={() => handleClick(book.id)}
                                    >
                                        {/* Mobile Layout: Labels + Values */}
                                        <div className="md:hidden flex justify-between">
                                            <span className="font-semibold">رقم الكتاب:</span>
                                            <span>{book.bookNumber}</span>
                                        </div>
                                        <div className="md:hidden flex justify-between">
                                            <span className="font-semibold">تاريخ الكتاب:</span>
                                            <span>{book.date}</span>
                                        </div>
                                        <div className="md:hidden flex justify-between">
                                            <span className="font-semibold">هيكلة المجلدات:</span>
                                            <span>{book.FolderStructure}</span>
                                        </div>
                                        <div className="md:hidden flex justify-between">
                                            <span className="font-semibold">QR Code:</span>
                                            <img src={book.QR} alt="QR code" />
                                        </div>

                                        {/* Desktop Layout */}
                                        <div className="hidden md:block">{book.bookNumber}</div>
                                        <div className="hidden md:block">{book.date}</div>
                                        <div className="hidden md:block">{book.FolderStructure}</div>
                                        <div className="hidden md:block mx-auto">
                                            <img src={book.QR} alt="QR code" />
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Pagination Component */}
                        <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={setCurrentPage} />
                    </div >
                </div>
            </div>
        </section>
    )
}

export default BookArchiveTable