import ContentMassge from "../../components/pageMassges/DatailsMassge/ContentMassge";
import Breadcrumb from "../../components/shared/Bredcrumb"
import { useParams } from "react-router-dom"

function Messages() {
    const { id } = useParams();
    return (
        <section>
            <div className="container-page">
                <Breadcrumb
                    items={[
                        { label: "الواردة" },
                        { label: "تفاصيل المراسلة", href: `/messages/incoming/${id}` },
                    ]}
                />
                <section>
                    <ContentMassge />
                </section>
            </div>
        </section>
    )
}

export default Messages
