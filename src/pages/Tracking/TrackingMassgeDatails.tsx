import BookDatails from "../../components/shared/BookDatails"
import Breadcrumb from "../../components/shared/Bredcrumb"

function TrackingMassgeDatails() {
    return (
        <div className="container-page">
            <Breadcrumb items={[{ label: "تتبع المراسلات" }, { label: "تفاصيل الكتاب", href: '#' }]} />
            <BookDatails />
        </div>
    )
}

export default TrackingMassgeDatails
