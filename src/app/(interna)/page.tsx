'use client'
import { useContext, useEffect, useRef } from "react"
import GlobalContext from "../data/context/GlobalContext"
import { useRouter } from 'next/navigation'

export default function Page() {
    const { userName, setUserName, clearValues } = useContext(GlobalContext);
    const router = useRouter()
    const inputRef = useRef<any>(null)
    
    useEffect(() => {
        if (inputRef.current) {
            setTimeout(() => {
                if (userName) {
                    inputRef.current.select();
                } else {
                    inputRef.current.focus();
                }
            }, 50)
        }
    }, [])

    const handleLogin = () => {
        setUserName(userName)
        clearValues()
        router.push('/shared/tickets')
    }

    const handleKeyUp = (e: any) => {
        if (e.key === 'Enter') {
            handleLogin();
        }
    }

    return (
        <div className="flex justify-center items-center h-full w-full">
            <div className="flex flex-col gap-5">
                <input
                    ref={inputRef}
                    type="text" 
                    className="tickets-left-input"
                    value={userName}
                    onChange={e => setUserName(e.target.value)}
                    onKeyUp={handleKeyUp}
                />
                <button 
                    onClick={handleLogin}
                    className="tickets-left-button"
                >
                    Logar
                </button>
            </div>
        </div>
    );
}
