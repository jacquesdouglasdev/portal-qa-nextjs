import { IconCopy } from "@tabler/icons-react";

export default function PageCopy( { isCopied, handleCopy} : any) {
    return (
        <div>
            <div className="absolute top-0 right-0 pr-5 pt-5">
                <div className={`tickets-left-icon-copy ${isCopied ? 'text-green-700' : 'text-[#3953B7]'}`} onClick={handleCopy}>
                    <IconCopy size={40} />
                </div>
                <span className="flex justify-center font-black text-xs">
                    {isCopied ? 'Copiado!' : 'Copiar'}
                </span>
            </div>
            { isCopied && <div 
                className="bg-black text-white absolute top-1/2 
                    left-1/2 transform -translate-x-1/2 -translate-y-1/2
                    w-48 h-16 rounded-md font-bold
                    flex justify-center items-center"
                >
                    Copiado!
                </div> }
        </div>
    )
}