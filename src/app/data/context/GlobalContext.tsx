'use client'
import { createContext, useEffect, useState } from "react"

interface GlobalContext {
    // Client Info
    client: string
    address: string
    cellPhoneNumber: string
    hours: string
    handleClient: (client: string) => void
    handleAddress: (address: string) => void
    handleCellPhoneNumber: (cellPhoneNumber: string) => void
    handleHours: (hours: string) => void
    clearValues: () => void
    
    // Requests
    step: number;
    setStep: (step: number) => void;
    handleStep: (step: number) => void
    
    // User Info
    userName: string;
    setUserName: (name: string) => void

    // Copy to clipboard
    isCopied: boolean
    handleCopy: (texto: any) => void
}

const GlobalContext = createContext<GlobalContext>({} as any)

export function GlobalProvider(props: any) {
    // Client Info
    const [client, setClient] = useState<string>('Nome_cliente')
    const [address, setAddress] = useState<string>('Endereço_imóvel')
    const [cellPhoneNumber, setCellPhoneNumber] = useState<string>('Número_celular')
    const [hours, setHours] = useState<string>('Horário_ligação')

    // Requests
    const [step, setStep] = useState<number>(0);

    // User Info
    const [userName, setUserNameState] = useState<string>('');

    useEffect(() => {
        const storedName = localStorage.getItem('loggedInUserName') || '';
        setUserNameState(capitalizeFirstLetter(storedName));
    }, []);


    // Copy to clipboard
    const [isCopied, setIsCopiedState] = useState<boolean>(false)
    
    const setUserName = (name: string) => {
        if (typeof window !== 'undefined') {
            localStorage.setItem('loggedInUserName', name);
        }
        setUserNameState(capitalizeFirstLetter(name));
    };
    

    function handleClient(client: string) {
        setClient(capitalizeFirstLetter(client))
    }

    function handleAddress(address: string) {
        setAddress(address)
    }

    function handleCellPhoneNumber(cellPhoneNumber: string) {
        setCellPhoneNumber(cellPhoneNumber)
    }

    function handleHours(hours: string) {
        setHours(hours)
    }

    function handleStep(step: number) {
        setStep(step)
    }

    function capitalizeFirstLetter(string: string) {
        return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase()
    }

    function clearValues() {
        setClient('Nome_cliente')
        setAddress('Endereço_imóvel')
        setCellPhoneNumber('Número_celular')
    }

    function handleCopy(messageRef: any) {
    if (messageRef.current) {
        const text = messageRef.current.innerHTML
        const data = new Blob([text], { type: 'text/html' })
        const clipboardItem = new ClipboardItem({ 'text/html': data });
        
        navigator.clipboard.write([clipboardItem]).then(() => {
            setIsCopiedState(true);
            setTimeout(() => {
                setIsCopiedState(false);
            }, 1000)
        });
    }
}

    const ctx = { 
        client, address, cellPhoneNumber, step, userName,
        isCopied, hours,
        handleClient, handleAddress, handleCellPhoneNumber, 
        setStep, handleStep, setUserName, clearValues, 
        handleCopy, handleHours
    }

    return (
        <GlobalContext.Provider value={ctx}>
            {props.children}
        </GlobalContext.Provider>
    )
}

export default GlobalContext
