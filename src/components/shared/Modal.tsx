import { CircleX } from "lucide-react";
import { ModalProps } from "../../types/types";
import Button from "./Button";

function Modal({ isOpen, onClose }: ModalProps) {
    return (
        <div
            className={`fixed inset-0 flex items-center justify-center bg-black/50 z-50 transition-opacity duration-200 ${
                isOpen ? "opacity-100 visible" : "opacity-0 invisible"
            }`}
        >
            <div
                className={`bg-bg rounded-lg shadow-lg w-[400px] p-6 relative transform transition-all duration-200 ${
                    isOpen ? "scale-100 opacity-100" : "scale-95 opacity-0"
                }`}
            >
                <button
                    className="absolute top-6 left-3 text-gray-500 hover:text-gray-700 cursor-pointer"
                    onClick={onClose}
                >
                    <CircleX strokeWidth={1} fill="#E63946" color="white" size={24} />
                </button>
                <h2>إسم المجلد الجديد</h2>
                <input
                    type="text"
                    placeholder="الرجاء إدخال أسم المجلد الجديد."
                    className="outline-0 mt-5 w-full p-3 text-sm bg-white border-0 rounded-xl"
                />
                <Button className="w-full mx-auto mt-7">إنشاء مجلد</Button>
            </div>
        </div>
    );
}

export default Modal;
