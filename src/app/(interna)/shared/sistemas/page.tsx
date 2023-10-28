'use client'
import React from 'react'
import sistemas from '@/app/data/constants/sistemas'
import { sistema } from '@/app/data/models/sistema'

export default function Page() {
  const openSystem = (url: string) => {
    window.open(url, '_blank')
  };

  return (
    <div>
      <table className='flex flex-col m-10'>
        <thead className='flex items-center w-full'>
          <tr className='flex w-full h-10'>
            <th className='sistemas-col1'>Sistema</th>
            <th className='sistemas-col2'>Descrição</th>
          </tr>
        </thead>
        <tbody>
          {sistemas.map((sistema: sistema, index: number) => (
            <tr className='flex h-12' key={index}>
              <td className='sistemas-col1'>
                <button 
                    onClick={() => openSystem(sistema.url)}
                    className="btn-sistemas"
                >
                  {sistema.nome}
                </button>
              </td>
              <td className='sistemas-col2'>{sistema.descricao}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
