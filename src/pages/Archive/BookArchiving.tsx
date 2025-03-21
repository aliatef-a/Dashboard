import Breadcrumb from "../../components/shared/Bredcrumb"
import Button from "../../components/shared/Button"
import Dropdown from "../../components/shared/Dropdown"
import InputField from "../../components/shared/InputField"
import UploadAttachments from "../../components/shared/UploadAttachments"

function BookArchiving() {
    return (
        <div className="container-page">
            <Breadcrumb items={[{ label: "الأرشفة الإلكترونية " }, { label: " أرشفة كتاب", href: "/archive/book-archiving" }]} />

            <div className="start-section flex flex-col gap-5">
                <div className="flex items-center flex-col md:flex-row gap-5 md:gap-10 w-full justify-between">
                    <div className="w-full">
                        <InputField label="رقم الكتاب" name="bookNumber" onChange={() => { }} type="text" placeholder="الرجاء إدخال رقم الكتاب." />
                    </div>
                    <div className="w-full">
                        <InputField label="تاريخ الكتاب" name="date" onChange={() => { }} type="text" placeholder="الرجاء إدخال تاريخ الكتاب." />
                    </div>
                </div>

                <div className="flex items-center gap-5 md:gap-10 flex-col md:flex-row w-full justify-between">
                    <div className="w-full">
                        <Dropdown value={"folderStructure"} label="هيكلة المجلدات" name="folderStructure" onChange={() => { }} options={[{ label: "هيكلة المجلدات", value: "folderStructure" }]} />
                    </div>
                    <div className="w-full">
                        <UploadAttachments text="رفع الملفات" />
                    </div>
                </div>
            </div>
            <div>
                <Button className="mt-8 px-3 w-[80%] md:w-[35%] mx-auto">أرشفة الكتاب</Button>
            </div>
        </div>
    )
}

export default BookArchiving