import { ChevronDown } from "lucide-react";

interface DropdownProps {
    label: string;
    name: string;
    value: string | string[];
    onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
    options: { value: string; label: string }[];
}

const Dropdown: React.FC<DropdownProps> = ({ label, name, value, onChange, options }) => {
    return (
        <div className="flex flex-col gap-2">
            <label className="text-text-head text-base font-medium px-2">{label}</label>
            <div className="relative">
                <select
                    name={name}
                    value={value}
                    onChange={onChange}
                    className="w-full appearance-none border border-gray-300 bg-[#F4F4F4] outline-0 font-medium rounded-lg py-3 px-4 text-text-body text-sm"
                >
                    {options.map((option) => (
                        <option key={option.value} value={option.value}>
                            {option.label}
                        </option>
                    ))}
                </select>
                <span className="absolute inset-y-0 left-3 flex items-center pointer-events-none text-gray-500">
                    <ChevronDown strokeWidth={1} />
                </span>
            </div>
        </div>
    );
};

export default Dropdown;
