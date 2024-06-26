import { twMerge } from "tailwind-merge";
import { IconType } from "react-icons";
import Link from "next/link";

interface SidebarItemProps {
    children: React.ReactNode
    icon: IconType;
    label: string;
    active?: boolean;
    href: string;
}
const SidebarItem: React.FC<SidebarItemProps> = ({
    icon: Icon,
    label,
    active,
    href
}) => {
    return (
        <Link
            href = {href}
            className={twMerge(`
                flex 
                flex-row 
                h-auto 
                items-center 
                w-full 
                gap-x-4 
                test-md 
                font-medium 
                cursor-pointer 
                hover:text-white 
                transition 
                text-neutral-400 
                py-1`
            ,active && "text-white"
        )}
        >
            <Icon size={26} />
            <p className="truncate w-full">{label}</p>
        </Link>
    );
}
export default SidebarItem;