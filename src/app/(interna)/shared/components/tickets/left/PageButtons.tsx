import React, { useContext } from "react"
import GlobalContext from "@/app/data/context/GlobalContext"

type ButtonConfig = {
  text: string
  step: number
}

interface PageButtonsProps {
  buttonsConfig: ButtonConfig[]
}

export default function PageButtons({ buttonsConfig }: PageButtonsProps) {
  const { handleStep } = useContext(GlobalContext)

  return (
    <div className="tickets-left-panel-button">
      {buttonsConfig.map((button, index) => (
        <button 
          key={index}
          onClick={() => handleStep(button.step)}
          className="tickets-left-button"
        >
          {button.text}
        </button>
      ))}
    </div>
  )
}
