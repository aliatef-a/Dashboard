import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { assets } from "../assets/assets";
import {
  LayoutDashboard,
  Send,
  Archive,
  ClipboardMinus,
  Users,
  Settings,
  LogOut,
  X,
  BookUp,
  BookCheck,
  Mails,
} from "lucide-react";
import Dropdown from "./Dropdown";
import { HeaderProps } from "../types/types";

function Navbar({ isOpen, setIsOpen }: HeaderProps) {
  const { pathname } = useLocation();
  const [openDropdown, setOpenDropdown] = useState<{ [key: string]: boolean }>(
    {}
  );

  // Toggle Dropdown
  const toggleDropdown = (name: string) => {
    setOpenDropdown((prev) => ({
      ...prev,
      [name]: !prev[name],
    }));
  };

  // Links
  const links = [
    { name: "لوحة التحكم", to: "/", icon: LayoutDashboard },
    {
      name: "إدارة المراسلات",
      to: "#",
      icon: Send,
      children: [
        { name: "-  الصادرة", to: "/messages/outgoing" },
        { name: "-  الواردة", to: "/messages/incoming" },
      ],
    },
    { name: "الأرشفة الإلكترونية", to: "/archive", icon: Archive },
    { name: "الكتب المرسلة", to: "/sent-books", icon: BookUp },
    { name: "الكتب المنجزة", to: "/completed-books", icon: BookCheck },
    { name: "تتبع المراسلات", to: "/tracking", icon: Mails },
    { name: "التقارير", to: "/reports", icon: ClipboardMinus },
    { name: "إدارة المستخدمين", to: "/users", icon: Users },
    { name: "الإعدادات", to: "/settings", icon: Settings },
    // { name: "تسجيل الخروج", to: "/logout", icon: LogOut },
  ];

  const activeStyle =
    pathname === "/logout"
      ? "text-error bg-error-light"
      : "text-primary-125 bg-primary-10";

  return (
    <aside
      className={`z-50 fixed lg:static w-72 bg-white text-white mx-auto px-4 py-8 ${
        isOpen ? "right-0" : "-right-full"
      } duration-300`}
    >
      <div className="relative w-24 h-24 mx-auto mb-8">
        <img
          className="w-full h-fit object-contain"
          src={assets.logo}
          alt="logo"
        />
      </div>
      <button
        onClick={() => setIsOpen!((prev) => !prev)}
        className="lg:hidden absolute top-3 left-0 p-2 bg-primary-10 rounded-r-lg"
      >
        <X strokeWidth="1px" className="text-primary-150" />
      </button>
      <nav>
        <ul className="space-y-3">
          {links.map((link, index) =>
            !link.children ? (
              <li key={index}>
                <Link
                  to={link.to}
                  className={`py-[14px] px-3 rounded-xl cursor-pointer flex items-center gap-3 ${
                    pathname.split("/")[1] === link.to.split("/")[1]
                      ? activeStyle
                      : "text-text-body hover:bg-primary-10 hover:text-primary-125 duration-200"
                  }`}
                >
                  <link.icon strokeWidth="1px" />
                  <p className="text-base font-medium">{link.name}</p>
                </Link>
              </li>
            ) : (
              <Dropdown
                key={index}
                link={link}
                pathname={pathname}
                isOpen={!!openDropdown[link.name]}
                toggleDropdown={() => toggleDropdown(link.name)}
              />
            )
          )}
          <li>
            <Link
              to={"/login"}
              className={`py-[14px] px-3 rounded-xl cursor-pointer flex items-center space-x-2 text-error bg-error-light duration-200"
                            hover:bg-[#a901013a] duration-200`}
            >
              <LogOut strokeWidth="1px" />
              <p className="text-base font-medium">تسجيل الخروج</p>
            </Link>
          </li>
        </ul>
      </nav>
    </aside>
  );
}

export default Navbar;
