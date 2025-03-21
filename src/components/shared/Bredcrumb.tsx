import { Link } from "react-router-dom";
import { BreadcrumbProps } from "../../types/types";

function Breadcrumb({ items }: BreadcrumbProps) {
    return (
        <nav className="flex items-center flex-wrap text-gray-700 text-base font-medium gap-2 bg-white p-6 rounded-[20px]">
            {items.map((item, index) => (
                <span key={index} className="flex items-center gap-2">
                    {item.href ? (
                        <Link to={item.href} className="text-text-body hover:underline">
                            {item.label}
                        </Link>
                    ) : (
                        <span className="text-primary-150">{item.label}</span>
                    )}
                    {index < items.length - 1 && <span>/</span>}
                </span>
            ))}
        </nav>
    );
}

export default Breadcrumb;
