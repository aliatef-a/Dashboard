import { CircleX } from "lucide-react"
import Breadcrumb from "../../components/shared/Bredcrumb"
import InputField from "../../components/shared/InputField"
import TextHeader from "../../components/shared/TextHeader"

function DatailsBookArchive() {
    return (
        <section>
            <div className="container-page">
                <div >
                    <Breadcrumb items={[{ label: "الأرشفة الإلكترونية " }, { label: " ملف القانون العام ", href: "#" }, { label: " ملف رقم 1 ", href: "#" }]} />
                </div>

                <div className="start-section flex flex-col gap-5">
                    <TextHeader title="تفاصيل الكتاب" />
                    <div className="flex items-center flex-col md:flex-row gap-5 md:gap-10 w-full justify-between">
                        <div className="w-full">
                            <InputField readOnly value="36528" label="رقم الكتاب" name="bookNumber" onChange={() => { }} type="text" placeholder="الرجاء إدخال رقم الكتاب." />
                        </div>
                        <div className="w-full">
                            <InputField value="23 ديسمبر 2025" readOnly label="تاريخ الكتاب" name="date" onChange={() => { }} type="text" placeholder="الرجاء إدخال تاريخ الكتاب." />
                        </div>
                    </div>

                    <div className="flex items-center gap-5 md:gap-10 flex-col md:flex-row w-full justify-between">
                        <div className="w-full">
                            <InputField value="هيكلة المجلدات" readOnly label="هيكلة المجلدات" name="folderStructure" onChange={() => { }} type="text" placeholder="الرجاء إدخال تاريخ الكتاب." />
                        </div>
                        <div className="w-full">
                            <div className="flex flex-col gap-2">
                                <label className="cursor-pointer text-text-head text-base font-medium px-2">الملفات المرفقة</label>
                                <div className="flex flex-wrap gap-2 mr-2">
                                    <div className="flex items-center gap-2 bg-primary-10 p-2 rounded-sm">
                                        <p className="text-primary-150 text-sm">Test pdf file</p>
                                        <CircleX
                                            className="cursor-pointer"
                                            fill="#E63946"
                                            color="white"
                                            strokeWidth={1}
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default DatailsBookArchive