import { assets } from "../../assets/assets"
import TextHeader from "../shared/TextHeader";

function CorrespondenceCases() {
    const data = [
        {
            id: 1,
            icon: assets.book1,
            count: 415,
            label: "الكتب الواردة",
            bgColor: "bg-success-light",
            textColor: "text-success",
            borderColor: "border-success",
        },
        {
            id: 2,
            icon: assets.book2,
            count: 230,
            label: "الكتب الصادرة",
            bgColor: "bg-primary-10",
            textColor: "text-primary-150",
            borderColor: "border-primary-150",
        },
        {
            id: 3,
            icon: assets.book3,
            count: 120,
            label: "الكتب المؤرشفة",
            bgColor: "bg-[#E5FFFF]",
            textColor: "text-[#018D8D]",
            borderColor: "border-[#018D8D]",
        },
    ];
    return (
        <div className="start-section">
            <TextHeader title="حالات المراسلات" />
            <div className="grid grid-cols-1 sm-grid-cols-2 md:grid-cols-3 gap-2 md:gap-7">
                {data.map((item) => (
                    <div
                        key={item.id}
                        className={`${item.bgColor} rounded-[20px] p-6 py-6 mt-4 flex items-center gap-x-5`}
                    >
                        <div className={`border-r-[3px] ${item.borderColor} h-[80px]`} />
                        <img src={item.icon} className="w-12 h-12" alt="icon" />
                        <div className={`flex flex-col items-start ${item.textColor} font-bold text-xl`}>
                            <p>{item.count}</p>
                            <p className="text-base font-medium">{item.label}</p>
                        </div>
                    </div>

                ))}
            </div>
        </div>
    )
}

export default CorrespondenceCases
