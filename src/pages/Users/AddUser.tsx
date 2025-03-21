import Breadcrumb from "../../components/shared/Bredcrumb"
import FormAddUser from "../../components/UserComponents/FormAddUser"

const AddUser = () => {
    return (
        <section>
            <div className="container-page">
                <Breadcrumb items={[{ label: "إدارة المستخدمين" }, { label: "إضافة مستخدم جديد", href: '#' }]} />
                <FormAddUser />
            </div>
        </section>
    )
}

export default AddUser