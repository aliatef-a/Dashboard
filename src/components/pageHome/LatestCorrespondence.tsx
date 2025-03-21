import TableComponents from "../shared/TableComponents"
import TextHeader from "../shared/TextHeader"

function LatestCorrespondence() {
    return (
        <div className="start-section">
            <TextHeader title="أحدث المراسلات" />
            <div className="mt-4">
                <TableComponents pathNavigate="/messages/incoming" rowsPerPageTable={5} />
            </div>
        </div>
    )
}

export default LatestCorrespondence
