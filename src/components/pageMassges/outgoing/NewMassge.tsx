import { useState } from "react"
import Dropdown from "../../shared/Dropdown"
import InputField from "../../shared/InputField"
import TextArea from "../../shared/TextArea"
import TextHeader from "../../shared/TextHeader"
import SendToDropdown from "./SendToDropdown"
import UploadAttachments from "../../shared/UploadAttachments"
import Button from "../../shared/Button"
import OCR from "../../shared/OCR"

function NewMassge() {
    const [bookType, setBookType] = useState<string>("عام");
    return (
        <form className="start-section">
            <TextHeader title=" رسالة جديدة" />
            <div className="mt-4 grid grid-cols-1 gap-4 md:grid-cols-2">
                <InputField label="تاريخ الكتاب" type="text" name="date" onChange={() => { }} placeholder="الرجاء إدخال تاريخ الكتاب." />
                <InputField label="رقم الكتاب" type="text" name="bookNumber" onChange={() => { }} placeholder="الرجاء إدخال رقم الكتاب." />
                <Dropdown
                    value={bookType}
                    label="نوع الكتاب"
                    name="bookType"
                    onChange={(e: React.ChangeEvent<HTMLSelectElement>) => { setBookType(e.target.value) }}
                    options={[
                        { value: "عام", label: "عام" },
                        { value: "خاص", label: "خاص" },
                    ]}
                />
                <SendToDropdown />
            </div>
            <div className="mt-5 grid grid-cols-1 gap-4">
                <InputField label="عنوان الكتاب" type="text" name="title" onChange={() => { }} placeholder="عنوان الكتاب." />
                <TextArea
                    label="الكتاب"
                    name="description"
                    onChange={() => { }}
                    placeholder="وصف مضمون الكتاب..."
                />
                <TextArea
                    label="الملاحظات"
                    name="notes"
                    onChange={() => { }}
                    placeholder="ادخل ملاحظاتك .."
                />

                {/* fingerprint */}
                <div className="flex items-start flex-col gap-2 px-2">
                    <label className="cursor-pointer text-text-head text-base font-medium">
                        إرفاق البصمة الإلكترونية
                    </label>
                    <input className="custom-checkbox" type="checkbox" id="fingerprint" name="fingerprint" />
                </div>

                {/* the file uploader */}
                <UploadAttachments text="إرفاق المرفقات" />
                {/* <FileUploader /> */}

                {/* the ocr files */}
                <UploadAttachments text="إرفاق ملف OCR" />
                {/* <OCRFiles /> */}

                {/* OCR text area */}
                <OCR />
            </div>
            <Button type="submit" className="mx-auto w-[30%] mt-10 mb-5">ارسال</Button>
        </form>
    )
}

export default NewMassge
