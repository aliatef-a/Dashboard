import { useState } from "react"
import Dropdown from "../../shared/Dropdown"
import { CircleX } from "lucide-react";

function SendToDropdown() {
    const [sentTo, setSentTo] = useState<string[]>(["الحسابات"]);
    console.log("defult", sentTo);

    // handle seleckted value
    const handleSelect = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const selectedValue = e.target.value;
        console.log("selectedValue", selectedValue);

        // Add new value if it's not already selected
        if (selectedValue && !sentTo.includes(selectedValue)) {
            setSentTo([...sentTo, selectedValue]);
        }
    };
    // handle remove selected value
    const handleRemove = (value: string) => {
        setSentTo(sentTo.filter((item) => item !== value));
    }

    return (
        <div className="flex flex-col gap-2">
            <Dropdown
                value={sentTo}
                label="المرسل إليها"
                name="sentTo"
                onChange={handleSelect}
                options={[
                    { value: "الحسابات", label: "الحسابات" },
                    { value: "الموارد البشرية", label: "الموارد البشرية" },
                ]}
            />
            <div className="flex items-center flex-wrap gap-3">
                {sentTo.map((item) => (
                    <div key={item} className="flex items-center justify-between gap-3 bg-primary-10 p-2 rounded-sm">
                        <p className="text-primary-150 text-sm">{item}</p>
                        <CircleX
                            className="cursor-pointer"
                            fill="#E63946"
                            color="white"
                            strokeWidth={1}
                            onClick={() => handleRemove(item)}
                        />
                    </div>
                ))}
            </div>
        </div>
    )
}

export default SendToDropdown
