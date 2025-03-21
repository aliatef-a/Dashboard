import Breadcrumb from "../../components/shared/Bredcrumb"
import TableComponents from "../../components/shared/TableComponents"

function Incoming() {
    return (
        <section>
            <div className="container-page">
                <Breadcrumb
                    items={[
                        { label: "إدارة المراسلات" },
                        { label: "الواردة", href: "/messages/incoming" },
                    ]}
                />
                <section>
                    <div className="start-section">
                        <TableComponents pathNavigate="/messages/incoming" rowsPerPageTable={10} />
                    </div>
                </section>
            </div>
        </section>
    )
}

export default Incoming
