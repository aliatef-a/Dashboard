import { assets } from "../../../assets/assets"

function PersonInfo() {
    return (
        <div className="flex items-center w-full justify-between pb-5 border-text">
            <div className="flex items-center gap-3">
                <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-primary-20 ">
                    <img className="w-full h-full" src={assets.avatar} alt="avatar" />
                </div>
                <div className="flex flex-col items-start">
                    <p className="text-base font-bold text-primary-150">
                        علي عاطف
                    </p>
                    <p className="text-text-body text-base font-normal">
                        المدير
                    </p>
                </div>
            </div>
            <p className="text-primary-150 font-medium text-base">12 ديسمبر 2025</p>
        </div>
    )
}

export default PersonInfo
