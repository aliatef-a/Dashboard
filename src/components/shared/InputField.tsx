import { InputProps } from "../../types/types";

const InputField: React.FC<InputProps> = ({ label, value, readOnly, type = "text", name, onChange, placeholder, className }) => {
    return (
        <div className="flex flex-col gap-2">
            <label className="text-text-head text-base font-medium px-2">{label}</label>
            <input
                type={type}
                name={name}
                value={value}
                onChange={onChange}
                placeholder={placeholder}
                className={`border-0 rounded-xl py-3 px-3 outline-0 bg-[#F4F4F4] text-text-body text-sm placeholder:text-text-body placeholder:text-sm ${className}`}
                readOnly={readOnly}
            />
        </div>
    );
};

export default InputField;
