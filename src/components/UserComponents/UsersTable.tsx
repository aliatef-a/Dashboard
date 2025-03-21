import { useState } from "react";
import Pagination from "../shared/Pagination";
import { assets } from "../../assets/assets";
import { useNavigate } from "react-router-dom";
import DeleteUser from "./DeleteUser";

const UsersTable = ({ rowsPerPageTable }: { rowsPerPageTable?: number }) => {
    const navigate = useNavigate();
    const data = [
        { id: 1, name: "أحمد علي", email: "ahmed@example.com", job: "مهندس برمجيات", actions: "تحرير" },
        { id: 2, name: "سارة محمد", email: "sara@example.com", job: "مصمم UI/UX", actions: "تحرير" },
        { id: 3, name: "خالد حسن", email: "khaled@example.com", job: "مدير مشاريع", actions: "تحرير" },
        { id: 4, name: "منى عبد الله", email: "mona@example.com", job: "محلل بيانات", actions: "تحرير" },
        { id: 5, name: "يوسف إبراهيم", email: "youssef@example.com", job: "مسؤول تسويق", actions: "تحرير" },
    ];

    const [currentPage, setCurrentPage] = useState<number>(1);
    const rowsPerPage = rowsPerPageTable || 5;

    const totalPages = Math.ceil(data.length / rowsPerPage);
    const paginatedData = data.slice((currentPage - 1) * rowsPerPage, currentPage * rowsPerPage);

    const handleNavigate = () => {
        navigate("/users/edit-user");
    }
    return (
        <div className="p-4">
            <div className="w-full overflow-x-auto">
                {/* Grid Header */}
                <div className="hidden md:grid grid-cols-4 md:place-items-center bg-primary-20 text-primary-150 text-xs sm:text-sm md:text-base font-semibold py-3 md:py-4 px-3 md:px-6 rounded-[20px]">
                    <div>الأسم</div>
                    <div>الوظيفة</div>
                    <div>البريد الإلكتروني</div>
                    <div>العمليات</div>
                </div>

                {/* Grid Body */}
                <div className="grid gap-2">
                    {paginatedData.map((item) => (
                        <div
                            key={item.id}
                            className="grid grid-cols-1 md:grid-cols-4 text-center md:place-items-center text-primary-150 font-medium bg-white p-4 rounded-lg shadow-sm hover:bg-gray-100 cursor-pointer"
                        >
                            {/* Mobile Layout: Labels + Values */}
                            <div className="md:hidden flex justify-between">
                                <span className="font-semibold">الأسم:</span>
                                <span>{item.name}</span>
                            </div>
                            <div className="md:hidden flex justify-between">
                                <span className="font-semibold">الوظيفة:</span>
                                <span>{item.job}</span>
                            </div>
                            <div className="md:hidden flex justify-between">
                                <span className="font-semibold">البريد الإلكتروني:</span>
                                <span>{item.email}</span>
                            </div>
                            <div className="md:hidden flex justify-between">
                                <span className="font-semibold">العمليات:</span>
                                <div className="flex items-center gap-2 mt-2">
                                    <div onClick={handleNavigate}>
                                        <img src={assets.editIcon} alt="icon" />
                                    </div>
                                    <div>
                                        <DeleteUser />
                                    </div>
                                </div>
                            </div>

                            {/* Desktop Layout */}
                            <div className="hidden md:block">{item.name}</div>
                            <div className="hidden md:block">{item.job}</div>
                            <div className="hidden md:block">{item.email}</div>
                            <div className="hidden md:block">
                                <div className="flex items-center gap-2">
                                    <div onClick={handleNavigate}>
                                        <img src={assets.editIcon} alt="icon" />
                                    </div>
                                    <DeleteUser />
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Pagination Component */}
            <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={setCurrentPage} />
        </div>
    );
};

export default UsersTable;
