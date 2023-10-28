import Link from "next/link"

export interface MenuItemProps {
    url: string
    text: string
    icon: any
    selected: boolean
    onClick?: () => void;
}

export default function MenuItem(props: MenuItemProps) {
    const { url, text, icon, selected, onClick } = props

    return (
        <Link 
            href={url}
            className={`icon-config ${selected ? 'text-purple-400 bg-[#131735]' : 'text-white'}`}
            onClick={onClick}
        >
            {icon}
            <span className={`ml-3 text-sm`}>{text}</span>
        </Link>
    )
}