'use client'
import React, { useContext } from 'react'
import { CallStep } from '@/app/data/logic/callStep'
import { CallPanel } from '@/app/data/logic/callPanel'
import GlobalContext from '@/app/data/context/GlobalContext'

export default function Page() {
  const { step } = useContext(GlobalContext)

  return (
      <div className="tickets-container">
        <div className="tickets-left-panel">
          {CallStep(step)}
        </div>
        <div className="tickets-right-panel border border-yellow-500">
          {CallPanel(step)}
        </div>
      </div>
  );                    
}
