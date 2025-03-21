import NewMassge from "../../components/pageMassges/outgoing/NewMassge"
import Breadcrumb from "../../components/shared/Bredcrumb"

function Outgoing() {
    return (
        <section>
            <div className="container-page">
                <Breadcrumb
                    items={[
                        { label: "إدارة المراسلات" },
                        { label: "الصادرة", href: "/messages/outgoing" },
                    ]}
                />
                <section>
                    <NewMassge />
                </section>
            </div>
        </section>

    )
}

export default Outgoing
