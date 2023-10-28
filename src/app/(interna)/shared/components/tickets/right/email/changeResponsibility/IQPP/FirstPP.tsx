import GlobalContext from "@/app/data/context/GlobalContext"
import { useContext, useRef } from "react"
import PageCopy from "../../../pageCopy"

export default function FirstPP(props: any) {
    const { client, address, userName, isCopied, handleCopy } = useContext(GlobalContext)
    const messageRef = useRef(null)

    return (
        <div className="overflow-auto">
            <div className="flex bg-white text-black p-7 rounded-md overflow-auto relative">
                {props.copy && <PageCopy isCopied={isCopied} handleCopy={() => handleCopy(messageRef)}/>}
                <p ref={messageRef}>
                    Olá, <strong>{client}!</strong>😊 Como vai? <br /><br />
                    Que alegria ter você conosco no QuintoAndar! 💖 <br /><br />
                    Meu nome é <strong>{userName}</strong>, e faço parte do time de Pagamentos. <br /><br />
                    Estou entrando em contato sobre o imóvel🏠 localizado na: <strong>{address}</strong>.
                    Conforme conversamos em ligação recebi sua solicitação para assumir a responsabilidade pelo pagamento do boleto de condomínio à administradora. Este é um passo importante e valorizamos sua iniciativa. Vou comunicar ao inquilino sobre sua intenção e verificar se está de acordo. É sempre bom lembrar que a decisão final será um consenso entre <strong>ambas as partes</strong>. O inquilino tem um prazo de até <strong>48 horas</strong> úteis para dar um retorno. <br /><br />
                    Assim que obtiver uma resposta, ou na ausência dela após o prazo mencionado, prontamente lhe informarei por aqui. <br /><br />
                    Se houver qualquer outra questão ou se desejar mais informações sobre o processo, sinta-se à vontade para me escrever neste mesmo e-mail. Estou à disposição para te ajudar da melhor maneira possível! 😃 <br /><br />
                    Atenciosamente,
                </p>
            </div>
        </div>
    )
}