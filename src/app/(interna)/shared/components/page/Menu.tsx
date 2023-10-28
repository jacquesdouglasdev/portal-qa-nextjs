'use client'
import { usePathname, useRouter } from 'next/navigation'
import itemMenu from '../../../../data/constants/itemMenu'
import MenuItem from './MenuItem'
import { ItemMenu } from '@/app/data/models/ItemMenu'
import GlobalContext from '@/app/data/context/GlobalContext'
import { useContext } from 'react'


export default function Menu(): JSX.Element {
    const url = usePathname()
    const { clearValues, handleStep } = useContext(GlobalContext)
    const router = useRouter()

    function renderItems() {
        return itemMenu.map((item: ItemMenu, index) => (
            <div key={item.text} className={`flex h-10 ${index === 0 ? "mt-4" : ""}`}>
                <MenuItem
                    url={item.url}
                    text={item.text}
                    icon={item.icon}
                    selected={url === item.url}
                    onClick={() => {
                        if(item.text === 'Tickets' && url === item.url) {
                            clearValues();
                            handleStep(0);
                            setTimeout(() => {
                                router.push(item.url);
                            }, 0);
                        }
                    }}
                />
            </div>
        ))
    }

    return (
        <div>
            <nav>{renderItems()}</nav>
        </div>
    )
}
