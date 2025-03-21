interface TextAreaProps {
    label: string;
    name: string;
    value?: string;
    onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
    placeholder?: string;
    rows?: number;
}

const TextArea: React.FC<TextAreaProps> = ({ label, name, value, onChange, placeholder, rows = 4 }) => {
    return (
        <div className="flex flex-col gap-2">
            <label className="text-text-head text-base font-medium px-2">{label}</label>
            <textarea
                name={name}
                value={value}
                onChange={onChange}
                rows={rows}
                placeholder={placeholder}
                className="w-full border border-gray-300 bg-[#F4F4F4] outline-0 text-gray-800 text-sm font-medium rounded-lg py-2 px-4 placeholder:text-text-body placeholder:text-sm "
            />
        </div>
    );
};

export default TextArea;
