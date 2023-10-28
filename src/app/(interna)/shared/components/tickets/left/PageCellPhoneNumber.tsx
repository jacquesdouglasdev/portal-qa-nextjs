import GlobalContext from "@/app/data/context/GlobalContext"
import { useContext, useEffect, useRef } from "react"

export default function PageCellPhoneNumber( { nextStep, backStep }: any) {
    const { handleStep } = useContext(GlobalContext)
    const { cellPhoneNumber, handleCellPhoneNumber } = useContext(GlobalContext)

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
        handleCellPhoneNumber('Telefone_celular')
        handleStep(backStep)
    }
    

    return (
        <div className="tickets-left-panel-button">
            <input 
                ref={inputRef}
                type="text" 
                className="tickets-left-input"
                value={cellPhoneNumber}
                onChange={e => handleCellPhoneNumber(e.target.value)}
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