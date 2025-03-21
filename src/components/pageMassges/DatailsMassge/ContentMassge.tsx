import UploadAttachments from "../../shared/UploadAttachments"
import Button from "../../shared/Button"
import OCR from "../../shared/OCR"
import Files from "./Files"
import PersonInfo from "./PersonInfo"
import { ChevronDown } from "lucide-react"

function ContentMassge() {
    const options = [
        { label: "قيد الانتظار", value: "قيد الانتظار" },
        { label: "مقبول", value: "مقبول" },
        { label: "مرفوض", value: "مرفوض" },
    ];
    return (
        <form className="start-section flex flex-col gap-4">
            {/* person info */}
            <PersonInfo />
            {/* Send and Receive */}
            <div className="pb-5 border-text">
                <div className="flex w-full items-center justify-between">
                    <p className="text-text-head font-medium text-base">541545</p>
                    <div className="flex items-center gap-5 font-medium text-base">
                        {/* the status of massge */}
                        <div className="relative">
                            <select
                                name={"status"}
                                className="w-[130px] md:w-[170px] appearance-none border border-gray-300 bg-[#F4F4F4] outline-0 font-medium rounded-lg py-2 px-4 text-text-body text-xs md:text-sm"
                            >
                                {options.map((option) => (
                                    <option key={option.value} value={option.value}>
                                        {option.label}
                                    </option>
                                ))}
                            </select>
                            <span className="absolute inset-y-0 left-3 flex items-center pointer-events-none text-gray-500">
                                <ChevronDown strokeWidth={1} />
                            </span>
                        </div>
                        <p className="text-primary-150">عام</p>
                        {/* <p className="text-success px-5 py-2 rounded-full bg-success-light">جديد</p> */}
                    </div>
                </div>
                <h4 className="text-primary-150 text-base font-medium mt-2">المرسل: الموارد البشرية - المستقبل: الحسابات</h4>
            </div>
            {/* content massge */}
            <div className="pb-5 border-text">
                <h4 className="text-primary-150 text-base font-medium mt-2">طلب اجازة من المدير العام</h4>
                <p className="text-text-body text-balance text-sm leading-7 font-medium mt-2">تحية طيبة وبعد، <br />

                    أرجو من حضرتكم التكرم بالموافقة على طلبي للحصول على إجازة لمدة 21 يوماً، وذلك ابتداءً من 23 ديسمبر وحتى 12 يناير، وذلك لظروف السفر. <br />
                    سأحرص على استكمال جميع المهام المطلوبة مني قبل بدء الإجازة، كما سأكون متاحًا لأي استفسارات أو توجيهات لضمان سير العمل بسلاسة خلال فترة غيابي. <br />
                    شاكرًا لكم تعاونكم وتفهمكم، وأتطلع إلى موافقتكم الكريمة. <br />

                    مع خالص التقدير،محمد القحطاني</p>
            </div>
            {/* notes */}
            <div className="pb-5 border-text">
                <p className="text-primary-150 text-base font-medium mt-2">الملاحظات</p>
                <p className="text-base text-text-body mt-2">الرجاء الرد على الكتاب قبل أسبوع من الأن.</p>
            </div>
            {/* files */}
            <Files />

            {/* Reply on massge */}
            <div>
                <h4 className="text-primary-150 text-base font-bold ">رد على الرسالة</h4>
                <textarea rows={5} placeholder="الرجاء كتابة النص للرد على الرسالة ..." className="w-full mt-3 border border-gray-300  outline-0 text-gray-800 text-sm font-medium rounded-lg py-2 px-4 placeholder:text-text-body placeholder:text-sm ">
                </textarea>
            </div>

            {/* the file uploader */}
            <UploadAttachments text="إرفاق ملف" />
            {/* <FileUploader /> */}

            {/* the ocr files */}
            <UploadAttachments text="إرفاق ملف OCR" />
            {/* <OCRFiles /> */}

            {/* OCR text area */}
            <OCR />

            {/* submit */}
            <Button className="mt-4 w-[40%] mx-auto" type="submit">قبول</Button>

        </form>
    )
}
export default ContentMassge
