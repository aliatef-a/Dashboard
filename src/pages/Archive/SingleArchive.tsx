import ArchiveFiles from "../../components/PageArchive/ArchiveFiles"
import ArchiveHeader from "../../components/PageArchive/ArchiveHeader"

function SingleArchive() {
    const data = [
        { name: "ملف رقم “ 1 “ ", href: "/archive/book-archive-table/10" },
        { name: "ملف رقم “ 2 “ ", href: "/archive/book-archive-table/10" },
        { name: "ملف رقم “ 3 “ ", href: "/archive/book-archive-table/10" },
        { name: "ملف رقم “ 4 “ ", href: "/archive/book-archive-table/10" },
        { name: "ملف رقم “ 5 “ ", href: "/archive/book-archive-table/10" },
        { name: "ملف رقم “ 6 “ ", href: "/archive/book-archive-table/10" },
        { name: "ملف رقم “ 7 “ ", href: "/archive/book-archive-table/10" },
        { name: "ملف رقم “ 8 “ ", href: "/archive/book-archive-table/10" },
        { name: "ملف رقم “ 9 “ ", href: "/archive/book-archive-table/10" },
        { name: "ملف رقم “ 10 “ ", href: "/archive/book-archive-table/10" },
    ]
    return (
        <section>
            <div className="container-page">
                <div >
                    <ArchiveHeader items={[{ label: "الأرشفة الإلكترونية " }, { label: " ملف القانون العام ", href: "#" }]} />
                </div>
                <div className="start-section">
                    <ArchiveFiles data={data} />
                </div>
            </div>
        </section>
    )
}

export default SingleArchive