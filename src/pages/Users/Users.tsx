import { UserPlus } from "lucide-react"
import Button from "../../components/shared/Button"
import UsersTable from "../../components/UserComponents/UsersTable"
import { useNavigate } from "react-router-dom"

function Users() {
    const navigate = useNavigate();
    const handleClick = () => {
        navigate("/users/add-user")
    }
    return (
        <section>
            <div className="container-page">
                <div className="flex flex-col md:flex-row items-start md:items-center gap-6 justify-between text-gray-700 text-base font-medium md:gap-2 bg-white p-6 rounded-[20px]">
                    <span className="text-primary-150">إدارة المستخدمين</span>
                    <Button className="px-5 py-3 !text-white !bg-primary-125" onClick={handleClick}>
                        <UserPlus />
                        إضافة مستخدم جديد
                    </Button>
                </div>
                <div className="start-section">
                    <UsersTable rowsPerPageTable={10} />
                </div>
            </div>
        </section>
    )
}

export default Users
