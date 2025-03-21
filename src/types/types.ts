import { LucideIcon, LucideProps } from "lucide-react";
import { JSX } from "react";

type icon = {
  icon: React.ForwardRefExoticComponent<
    Omit<LucideProps, "ref"> & React.RefAttributes<SVGSVGElement>
  >;
};

export interface NavLinke {
  name: string;
  to: string;
  icon: icon;
}

export interface DropdownProps {
  link: {
    name: string;
    to: string;
    icon: LucideIcon;
    children: { name: string; to: string }[];
  };
  pathname: string;
  isOpen: boolean;
  toggleDropdown: () => void;
}

export interface HeaderProps {
  isOpen?: boolean;
  setIsOpen?: React.Dispatch<React.SetStateAction<boolean>>;
}

interface Book {
  name: string;
  value: number;
  color: string;
}

export interface CustomBarProps {
  x?: number;
  y?: number;
  width?: number;
  height?: number;
  payload?: Book;
}
export interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

export interface TableProps {
  id: number;
  bookNumber: string;
  title: string;
  sender: string;
  receiver: string;
  date: string;
  type: string;
  status: string;
}

export interface BreadcrumbProps {
  items: { label: string | JSX.Element[]; href?: string }[];
}

export interface InputProps {
  label: string;
  type: string;
  name: string;
  value?: string;
  className?: string
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  readOnly?: boolean;
}

export interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
}
