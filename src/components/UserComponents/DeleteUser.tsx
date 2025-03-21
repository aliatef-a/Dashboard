import { CircleX } from "lucide-react"
import { assets } from "../../assets/assets"
import Button from "../shared/Button"
import { useState } from "react";

const DeleteUser = () => {
    const [isOpen, setIsOpen] = useState(false);

    const onClose = () => {
        setIsOpen(false);
    }
    return (
        <div>
            <img className="cursor-pointer" onClick={() => setIsOpen(true)} src={assets.deletIcon} alt="icon" />

            {/* modle */}
            <div
                className={`fixed inset-0 flex items-center justify-center bg-black/50 z-50 transition-opacity duration-200 ${isOpen ? "opacity-100 visible" : "opacity-0 invisible"
                    }`}
            >
                <div
                    className={`bg-bg rounded-lg shadow-lg w-[400px] p-6 relative transform transition-all duration-200 ${isOpen ? "scale-100 opacity-100" : "scale-95 opacity-0"
                        }`}
                >
                    <button
                        className="absolute top-6 left-3 text-gray-500 hover:text-gray-700 cursor-pointer"
                        onClick={onClose}
                    >
                        <CircleX strokeWidth={1} fill="#E63946" color="white" size={24} />
                    </button>
                    <h2 className="mt-5 w-full p-3 border-0 ">هل تريد حذف المستخدم؟</h2>
                    <div className="flex items-center gap-4">
                        <Button className="w-full mx-auto mt-7 bg-red-600 hover:bg-red-700 text-white">
                            نعم
                        </Button>
                        <Button onClick={onClose} className="w-full mx-auto mt-7 bg-gray-500 hover:bg-gray-600 text-white">
                            لا
                        </Button>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default DeleteUser