import BookDatails from "../../components/shared/BookDatails"
import Breadcrumb from "../../components/shared/Bredcrumb"

function CompletedBookDateils() {
    return (
        <div className="container-page">
            <Breadcrumb items={[{ label: "الكتب المنجزة" }, { label: "تفاصيل الكتاب", href: '#' }]} />
            <BookDatails />
        </div>
    )
}

export default CompletedBookDateils
