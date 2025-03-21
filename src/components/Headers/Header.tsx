import { Menu, Search } from "lucide-react"
import { assets } from "../../assets/assets"
import { HeaderProps } from "../../types/types"
import Notification from "./Notification"

const Header = ({ setIsOpen }: HeaderProps) => {
    return (
        <nav>
            <div className="bg-white w-auto h-20 flex items-center justify-between px-8 py-3.5 mr-1">
                <div className="w-[40%] hidden lg:block">
                    <form className="relative w-full">
                        <input type="text" name="search" className="w-full bg-bg px-10 py-4 rounded-[20px] text-sm text-text-body outline-0" placeholder="بحث برقم المراسلة أو العنوان أو أسم المرسل .." />
                        <Search className="absolute top-1/2 right-3 -translate-y-1/2 " strokeWidth="1px" />
                    </form>
                </div>
                <button onClick={() => setIsOpen!(prev => !prev)} className="border lg:hidden border-primary-20 rounded bg-primary-10 p-2 cursor-pointer hover:bg-primary-20 duration-200">
                    <Menu strokeWidth="1px" />
                </button>
                <div className="flex items-center gap-3 ">
                    <Notification />
                    <div className="flex items-center gap-1">
                        <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-primary-20 ">
                            <img className="w-full h-full" src={assets.avatar} alt="avatar" />
                        </div>
                        <div className="flex flex-col items-start">
                            <p className="text-base font-bold text-primary-150">
                                علي عاطف
                            </p>
                            <p className="text-text-body text-base font-normal">
                                رئيس مجلس الإدارة
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Header