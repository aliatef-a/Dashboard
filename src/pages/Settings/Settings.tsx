import { useState } from "react";
import { UserPen } from "lucide-react";
import { assets } from "../../assets/assets";
import Breadcrumb from "../../components/shared/Bredcrumb";
import TextHeader from "../../components/shared/TextHeader";
import Button from "../../components/shared/Button";

function Settings() {
    const [isEditing, setIsEditing] = useState({ name: false, email: false });
    const [formData, setFormData] = useState({
        name: "محمد أحمد",
        email: "example@email.com",
    });

    const handleEdit = (field: "name" | "email") => {
        setIsEditing((prev) => ({ ...prev, [field]: true }));
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    return (
        <section>
            <div className="container-page">
                <Breadcrumb items={[{ label: "الإعدادات" }]} />
                <div className="start-section">
                    <TextHeader title="بياناتي الشخصية" />
                    <form className="mt-5">
                        {/* Profile Image */}
                        <div className="flex justify-center md:justify-start">
                            <img
                                className="w-24 h-24 rounded-full overflow-hidden border-2 border-primary-20 object-cover"
                                src={assets.avatar}
                                alt="avatar"
                            />
                        </div>

                        {/* Editable Inputs */}
                        <div className="mt-5 flex flex-col md:flex-row w-full  gap-4">
                            {/* Name Field */}
                            <div className="flex w-full flex-col gap-2 relative">
                                <label className="text-text-head text-base font-medium px-2">الاسم</label>
                                <input
                                    type="text"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    className={`border-0 rounded-xl py-3 px-3 outline-0 pr-10 bg-[#F4F4F4] text-text-body text-sm placeholder:text-text-body placeholder:text-sm
                                        ${isEditing.name ? "border border-blue-500 bg-white" : ""}
                                    `}
                                    readOnly={!isEditing.name}
                                />
                                <UserPen
                                    size={20}
                                    className="absolute top-11 left-3 text-gray-500 cursor-pointer hover:text-blue-500"
                                    onClick={() => handleEdit("name")}
                                />
                            </div>

                            {/* Email Field */}
                            <div className="flex w-full flex-col gap-2 relative">
                                <label className="text-text-head text-base font-medium px-2">البريد الإلكتروني</label>
                                <input
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    className={`border-0 rounded-xl py-3 px-3 outline-0 pr-10 bg-[#F4F4F4] text-text-body text-sm placeholder:text-text-body placeholder:text-sm
                                        ${isEditing.email ? "border border-blue-500 bg-white" : ""}
                                    `}
                                    readOnly={!isEditing.email}
                                />
                                <UserPen
                                    size={20}
                                    className="absolute top-11 left-3 text-gray-500 cursor-pointer hover:text-blue-500"
                                    onClick={() => handleEdit("email")}
                                />
                            </div>
                        </div>
                        <Button type="submit" className="w-[50%] md:w-[35%] mx-auto mt-8">
                            حفظ
                        </Button>
                    </form>
                </div>
            </div>
        </section>
    );
}

export default Settings;
