'use client'
import GlobalContext from '@/app/data/context/GlobalContext'
import { useContext } from 'react'


export default function Header() {
    const { userName } = useContext(GlobalContext)

    return (
        <div className={`flex bg-[#3953B7] w-full h-14`}>
            <div></div>
            <div></div>
            <div>{userName}</div>
        </div>
    )
}
