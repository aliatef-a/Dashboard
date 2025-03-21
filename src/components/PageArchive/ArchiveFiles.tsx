import { Link } from "react-router-dom"
import { assets } from "../../assets/assets"

function ArchiveFiles({ data }: { data: { name: string, href: string }[] }) {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
            {data.map(name => (
                <Link key={crypto.randomUUID()} to={name.href} className="bg-primary-10 p-4 flex items-center gap-2 rounded-[20px]">
                    <img width={30} src={assets.folder} alt="icon" />
                    <p className="font-medium text-base text-text-head">{name.name}</p>
                </Link>
            ))}
        </div>
    )
}

export default ArchiveFiles