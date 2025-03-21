
import BookDatails from "../../components/shared/BookDatails"
import Breadcrumb from "../../components/shared/Bredcrumb"

function DatailsSendBooks() {
    return (
        <section>
            <div className="container-page">
                <Breadcrumb items={[{ label: "الكتب المرسلة" }, { label: "تفاصيل الكتاب", href: '#' }]} />
                <BookDatails />
            </div>
        </section>
    )
}

export default DatailsSendBooks
