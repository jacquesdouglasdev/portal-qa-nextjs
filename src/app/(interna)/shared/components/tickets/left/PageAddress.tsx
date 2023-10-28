import GlobalContext from "@/app/data/context/GlobalContext"
import { useContext, useEffect, useRef } from "react"

export default function PageAddress( { nextStep, backStep }: any) {
    const { handleStep } = useContext(GlobalContext)
    const { address, handleAddress } = useContext(GlobalContext)

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
        handleAddress('Endereço_imóvel')
        handleStep(backStep)
    }
    

    return (
        <div className="tickets-left-panel-button">
            <input 
                ref={inputRef}
                type="text" 
                className="tickets-left-input"
                value={address}
                onChange={e => handleAddress(e.target.value)}
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

