import { ChevronDown } from "lucide-react";
import { NavLink } from "react-router-dom";
import { DropdownProps } from "../types/types";

function Dropdown({ link, pathname, isOpen, toggleDropdown }: DropdownProps) {
    return (
        <div>
            <button
                onClick={toggleDropdown}
                className={`flex py-[14px] px-3 items-center rounded-xl cursor-pointer justify-between w-full text-base font-medium ${pathname.startsWith("/messages") ? "bg-primary-10 text-primary-125 " : "text-text-body hover:bg-primary-10 hover:text-primary-125 duration-200"}`}
            >
                <div className="flex items-center gap-2 text-base">
                    <link.icon size={20} strokeWidth={1} />
                    {link.name}
                </div>
                <ChevronDown
                    size={20}
                    className={`transition-transform ${isOpen ? "rotate-180" : "rotate-0"}`}
                />
            </button>

            {/* Dropdown Menu */}
            <ul className={`overflow-hidden transition-all duration-300 ${isOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"}`}>
                {link.children.map((child, index) => {
                    const isChildActive = pathname.startsWith(child.to);
                    return (
                        <li key={index} className={`mt-2 px-10  text-base ${isChildActive ? "text-primary-125" : "text-text-body"}`}>
                            <NavLink to={child.to}>{child.name}</NavLink>
                        </li>
                    );
                })}
            </ul>
        </div>
    );
}

export default Dropdown;
