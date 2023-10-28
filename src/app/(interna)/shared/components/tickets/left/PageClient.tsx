import React, { useRef, useEffect, useContext } from 'react'
import GlobalContext from '@/app/data/context/GlobalContext'

export default function PageClient({ nextStep, backStep}: any) {
    const { handleStep, client, handleClient } = useContext(GlobalContext)

    const inputRef = useRef<any>(null)

    useEffect(() => {
        if (inputRef.current) {
            setTimeout(() => {
                inputRef.current.select()
            }, 50)
        }
    }, [])

    const handleKeyUp = (e: any) => {
        if (e.key === 'Enter') {
            handleStep(nextStep)
        }
    }

    function handleBack() {
        handleClient('Nome_cliente')
        handleStep(backStep)
    } 


    return (
        <div className="tickets-left-panel-button">
            <input 
                ref={inputRef}
                type="text" 
                className="tickets-left-input"
                value={client}
                onChange={e => handleClient((e.target.value))}
                onKeyUp={handleKeyUp}
            />
            <button 
                onClick={() => handleStep(nextStep)}
                className="tickets-left-button"
            >
                Prosseguir
            </button>
            <button 
                onClick={() => handleBack()}
                className="tickets-left-button"
            >
                Voltar
            </button>
        </div>
    )
}
