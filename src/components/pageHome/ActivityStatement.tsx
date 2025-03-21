import TextHeader from "../shared/TextHeader"
import BooksBarChart from "./BooksBarChart"

function ActivityStatement() {
    return (
        <div className="start-section">
            <TextHeader title="بيان نشاط المراسلات" />
            <div className="mt-4">
                <BooksBarChart />
            </div>
        </div>
    )
}

export default ActivityStatement
