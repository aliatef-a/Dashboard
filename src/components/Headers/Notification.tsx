import { useState, useEffect, useRef } from "react";
import { BellRing } from "lucide-react";

const Notification = () => {
    const [isOpen, setIsOpen] = useState(false);
    const notificationRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (notificationRef.current && !notificationRef.current.contains(event.target as Node)) {
                setIsOpen(false);
            }
        };

        if (isOpen) {
            document.addEventListener("mousedown", handleClickOutside);
        } else {
            document.removeEventListener("mousedown", handleClickOutside);
        }

        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, [isOpen]);

    return (
        <div className="relative" ref={notificationRef}>
            {/* Bell Icon */}
            <div
                className="border border-primary-20 rounded-full bg-primary-10 p-2 cursor-pointer hover:bg-primary-20 duration-200"
                onClick={() => setIsOpen(!isOpen)}
            >
                <BellRing strokeWidth="1px" className="text-primary-150 font-bold" />
            </div>

            {/* Notification */}
            {isOpen && (
                <div className="absolute right-0 mt-3 w-64 bg-white shadow-lg rounded-lg p-4 border border-gray-200">
                    <p className="text-sm font-medium text-text-head">🔔 لديك إشعارات جديدة</p>
                    <p className="text-sm text-gray-700 mt-1">منذ 24 دقيقة</p>
                </div>
            )}
        </div>
    );
};

export default Notification;
