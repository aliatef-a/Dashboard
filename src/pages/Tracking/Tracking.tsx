import Breadcrumb from "../../components/shared/Bredcrumb"
import TableComponents from "../../components/shared/TableComponents"

function Tracking() {
    return (
        <section>
            <div className="container-page">
                <Breadcrumb items={[{ label: "تتبع المراسلات" }]} />
                <div className="start-section">
                    <TableComponents pathNavigate="/tracking" rowsPerPageTable={10} />
                </div>
            </div>
        </section>
    )
}

export default Tracking
