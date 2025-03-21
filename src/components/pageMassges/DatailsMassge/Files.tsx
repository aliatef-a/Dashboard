import { Eye, Fingerprint, QrCode } from "lucide-react"
import { assets } from "../../../assets/assets"

function Files() {
    const buttons: { text: string, icon: React.ReactNode }[] = [
        { text: "عرض", icon: <Eye strokeWidth={1} size={20} fill="#1a4595 " color="white" /> },
        { text: "تحميل", icon: assets.dawnland },
        { text: "QR Code", icon: <QrCode strokeWidth={2} size={20} color="#1a4595" /> },
        { text: "البصمة", icon: <Fingerprint strokeWidth={2} size={20} color="#1a4595" /> },
    ]
    return (
        <div className="pb-5 border-text">
            <div className="flex items-center gap-2">
                <h4 className="text-primary-150 text-base font-bold ">المرفقات</h4>
                <img src={assets.dawnland} alt="icon" />
            </div>
            <div className="flex items-center flex-wrap gap-3 mt-4">
                {buttons.map(btn => (
                    <button key={crypto.randomUUID()} className="bg-primary-10 text-primary-125 rounded-full px-5 py-2 text-sm font-medium flex items-center gap-2 cursor-pointer hover:bg-primary-20 duration-200">
                        {btn.text === "تحميل" ? <img width={12} src={assets.dawnland} alt="icon" /> : btn.icon}
                        {btn.text}
                    </button>
                ))}
            </div>
        </div>
    )
}

export default Files
