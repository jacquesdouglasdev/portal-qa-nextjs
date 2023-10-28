import GlobalContext from "@/app/data/context/GlobalContext"
import { useContext } from "react"

export default function PageStart({ nextStep, backStep}: any) {
    const { handleStep, clearValues } = useContext(GlobalContext)

    function handleBack() {
        clearValues()
        handleStep(backStep)
    } 

    return (
        <div className="tickets-left-panel-button">
            <button 
                onClick={() => handleStep(nextStep)}
                className="tickets-left-button"
            >
                Inicio
            </button>
            <button 
                onClick={() => handleStep(nextStep)}
                className="tickets-left-button"
            >
                Procedimento
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