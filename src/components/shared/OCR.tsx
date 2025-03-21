import { ClipboardCheck, Copy } from "lucide-react";
import { useState } from "react"

function OCR() {
    const [copy, setCopy] = useState<boolean>(false);
    const textValue = `عزيزي م/محمد
أتمنى أن تكون بخير. أودّ أن أقدّم طلب إجازة في الفترة من 1/1 إلى 12/1 وذلك بسبب التزامات عائلية.
سأحرص على إنهاء أي مهام ضرورية قبل الإجازة لضمان سير العمل بسلاسة. يرجى إبلاغي في حال الحاجة إلى أي ترتيبات إضافية.
شكرًا لتفهمك، وأتطلع إلى موافقتك.
تحياتي، أحمد عطيه`;

    // Copy text function
    const handleCopy = async () => {
        try {
            await navigator.clipboard.writeText(textValue);
            setCopy(true);
            setTimeout(() => {
                setCopy(false);
            }, 2000);
        } catch (error) {
            console.error("Copy failed", error);
        }
    }


    return (
        <div className="relative w-full">
            <textarea
                name="ocr"
                value={textValue}
                rows={7}
                readOnly
                className="w-full border border-gray-300 bg-[#F4F4F4] outline-0 text-text-body text-sm font-medium rounded-lg py-2 px-4 placeholder:text-text-body placeholder:text-sm resize-none"
            />

            {/* Copy Button */}
            <button
                onClick={handleCopy}
                type="button"
                className="absolute top-2 end-2 p-2 cursor-pointer"
            >
                {copy ? (
                    <ClipboardCheck color="#818181" size={20} />
                ) : (
                    <Copy color="#818181" size={20} />
                )}
            </button>
        </div>
    )
}

export default OCR