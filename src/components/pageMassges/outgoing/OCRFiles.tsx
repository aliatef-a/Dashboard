import { Paperclip } from "lucide-react"

function OCRFiles() {
    return (
        <div className="flex flex-col gap-2">
            <label htmlFor="file" className="cursor-pointer text-text-head text-base font-medium px-2">إرفاق ملف OCR</label>
            <input
                accept="application/pdf" type="file" id="file" className="hidden" />
            <div
                className="border w-fit  border-primary-20 rounded-full bg-primary-10 p-2 cursor-pointer hover:bg-primary-20 duration-200">
                <Paperclip strokeWidth="1px" className="text-primary-150 rotate-[135deg] font-bold" />
            </div>
        </div>
    )
}

export default OCRFiles
