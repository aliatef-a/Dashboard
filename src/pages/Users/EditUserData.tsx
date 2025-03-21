
import Breadcrumb from "../../components/shared/Bredcrumb"
import EditUser from "../../components/UserComponents/EditUser"

const EditUserData = () => {
    return (
        <section>
            <div className="container-page">
                <Breadcrumb items={[{ label: "إدارة المستخدمين" }, { label: "تعديل بيانات المستخدم", href: '#' }]} />
                <EditUser />
            </div>
        </section>
    )
}

export default EditUserData