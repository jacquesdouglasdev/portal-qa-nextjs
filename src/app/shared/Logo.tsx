import Image from "next/image"

export default function Logo() {
    return (
        <div className={`flex justify-center items-center h-14 border-b-2`}>
            <Image
                src="/logotipo.png"
                alt="Logo do Quinto Andar"
                width={150}
                height={20}
            />
        </div>
    )
}
