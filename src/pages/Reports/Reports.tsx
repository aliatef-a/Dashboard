import ActivityStatement from "../../components/pageHome/ActivityStatement"
import CorrespondenceCases from "../../components/pageHome/CorrespondenceCases"
import ReportsTabls from "../../components/ReportsComponents/ReportsTabls"
import TextHeader from "../../components/shared/TextHeader"

function Reports() {
    return (
        <section>
            <div className="container-page">
                <CorrespondenceCases />
                <ActivityStatement />
                <div className="start-section">
                    <TextHeader title="سجلات النظام" />
                    <div className="mt-4">
                        <ReportsTabls rowsPerPageTable={5} />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Reports
