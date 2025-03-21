import { useState } from "react";
import ArchiveFiles from "../../components/PageArchive/ArchiveFiles"
import ArchiveHeader from "../../components/PageArchive/ArchiveHeader"
import Pagination from "../../components/shared/Pagination"

function Archive() {
    const [currentPage, setCurrentPage] = useState<number>(1);

    const data = [
        { name: "ملف القانون العام ", href: "/archive/single-archive/4" },
        { name: "ملف القانون العام ", href: "/archive/single-archive/4" },
        { name: "ملف القانون العام ", href: "/archive/single-archive/4" },
        { name: "ملف القانون العام ", href: "/archive/single-archive/4" },
        { name: "ملف القانون العام ", href: "/archive/single-archive/4" },
        { name: "ملف القانون العام ", href: "/archive/single-archive/4" },
        { name: "ملف القانون العام ", href: "/archive/single-archive/4" },
        { name: "ملف القانون العام ", href: "/archive/single-archive/4" },
        { name: "ملف القانون العام ", href: "/archive/single-archive/4" },
    ];


    const rowsPerPage = 9;

    const totalPages = Math.ceil(data.length / rowsPerPage);
    const paginatedData = data.slice((currentPage - 1) * rowsPerPage, currentPage * rowsPerPage);
    return (
        <section>
            <div className="container-page">
                <div >
                    <ArchiveHeader items={[{ label: "الأرشفة الإلكترونية " }]} />
                </div>
                <div className="start-section">
                    <ArchiveFiles data={paginatedData} />
                    {/* Pagination Component */}
                    <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={setCurrentPage} />
                </div>
            </div>
        </section>
    )
}

export default Archive
