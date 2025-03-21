import { Archive, FilePlus } from "lucide-react";
import { BreadcrumbProps } from "../../types/types";
import Button from "../shared/Button";
import Modal from "../shared/Modal";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function ArchiveHeader({ items }: BreadcrumbProps) {
    const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
    const navigate = useNavigate();
    return (
        <nav className="flex flex-col md:flex-row items-start md:items-center gap-6 justify-between text-gray-700 text-base font-medium md:gap-2 bg-white p-6 rounded-[20px]">
            <div className="flex flex-wrap items-center gap-2">
                {items.map((item, index) => (
                    <span key={index} className="flex items-center gap-2">
                        {item.href ? (
                            <Link to={item.href} className="text-text-body hover:underline">
                                {item.label}
                            </Link>
                        ) : (
                            <span className="text-primary-150">{item.label}</span>
                        )}
                        {index < items.length - 1 && <span>/</span>}
                    </span>
                ))}
            </div>
            <div className="flex flex-col md:flex-row items-center w-full md:w-fit gap-3">
                <Button className="px-5 py-3 !bg-primary-10 !text-primary-150" onClick={() => setIsModalOpen(true)}>
                    <FilePlus strokeWidth={1} />
                    إنشاء مجلد جديد
                </Button>
                <Button onClick={() => navigate("/archive/book-archiving")} className="px-5 py-3">
                    <Archive strokeWidth={1} />
                    أرشفة كتاب جديد
                </Button>
            </div>
            <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
        </nav>
    );
}

export default ArchiveHeader;
