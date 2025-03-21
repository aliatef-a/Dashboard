import Button from "../shared/Button"
import Dropdown from "../shared/Dropdown"
import InputField from "../shared/InputField"
import TextHeader from "../shared/TextHeader"
import UploadAttachments from "../shared/UploadAttachments"


const EditUser = () => {
    const permissions = [
        { id: "control", name: "control", label: "لوحة التحكم" },
        { id: "outgoing", name: "outgoing", label: "المراسلات الصادرة" },
        { id: "incoming", name: "incoming", label: "المراسلات الواردة" },
        { id: "archive", name: "archive", label: "الأرشفة الإلكترونية" },
        { id: "sent-books", name: "sent-books", label: "الكتب المرسلة" },
        { id: "completed-books", name: "completed-books", label: "الكتب المنجزة" },
        { id: "users", name: "users", label: "إدارة المستخدمين" },
        { id: "settings", name: "settings", label: "الإعدادات" },
        { id: "tracking", name: "tracking", label: "تتبع المراسلات" },
    ];
    return (
        <form>
            {/* section form data */}
            <div className="start-section">
                <TextHeader title="إضافة مستخدم جديد" />
                <div className="mt-8 w-full flex flex-col gap-5">
                    <div className="flex w-full flex-col md:flex-row items-center gap-5 md:gap-10">
                        <div className="w-full">
                            <InputField label="الأسم" name="name" onChange={() => { }} type="text" placeholder="الرجاء إدخال اسم المستخدم الجديد." />
                        </div>
                        <div className="w-full">
                            <InputField label="البريد الإلكتروني" name="email" onChange={() => { }} type="email" placeholder="الرجاء إدخال البريد الإلكتروني الجديد." />
                        </div>
                    </div>
                    <div className="flex w-full flex-col md:flex-row items-center gap-5 md:gap-10">
                        <div className="w-full">
                            <InputField label="الوظيفة" name="job" onChange={() => { }} type="text" placeholder="الرجاء إدخال المسمى الوظيفي." />
                        </div>
                        <div className="w-full">
                            <InputField label="كلمة المرور" name="password" onChange={() => { }} type="password" placeholder="الرجاء إدخال كلمة المرور." />
                        </div>
                    </div>
                    <div className="flex w-full flex-col md:flex-row items-center gap-5 md:gap-10">
                        <div className="w-full">
                            <Dropdown
                                label="الإدارة التابع لها"
                                name="department"
                                onChange={() => { }}
                                value={""}
                                options={[
                                    { label: "الموارد البشرية", value: "hr" },
                                    { label: "الإدارة المالية", value: "finance" },
                                    { label: "إدارة تقنية المعلومات", value: "it" },
                                    { label: "إدارة التسويق", value: "marketing" }
                                ]}
                            />
                        </div>
                        <div className="w-full" />
                    </div>
                    <UploadAttachments text="التوقيع الإلكتروني" />
                </div>
            </div>
            {/* start section permissions */}
            <div className="start-section">
                <TextHeader title="الصلاحيات" />
                <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 gap-5" >
                    {permissions.map((permission) => (
                        <div key={permission.id} className="flex items-center gap-2 px-2">
                            <input
                                className="custom-checkbox"
                                type="checkbox"
                                id={permission.id}
                                name={permission.name}
                            />
                            <label
                                htmlFor={permission.id}
                                className="cursor-pointer text-text-head text-base font-medium"
                            >
                                {permission.label}
                            </label>
                        </div>
                    ))}
                </div>
            </div>
            <Button className="mx-auto my-15 w-[50%] md:w-[35%]">تعديل البيانات</Button>
        </form>
    )
}

export default EditUser