import GlobalContext from "@/app/data/context/GlobalContext"
import { useContext, useRef } from "react"
import PageCopy from "../../../pageCopy"

export default function FirstIQProposal(props: any) {
    const { client, address, userName, isCopied, handleCopy } = useContext(GlobalContext)
    const messageRef = useRef(null)

    return (
        <div className="overflow-auto">
            <div className="flex bg-white text-black p-7 rounded-md overflow-auto relative">
                {props.copy && <PageCopy isCopied={isCopied} handleCopy={() => handleCopy(messageRef)}/>}
                <p ref={messageRef}>
                    Olá, <strong>{client}</strong> 😊 Como vai?<br /><br />
                    Que alegria ter você conosco no QuintoAndar! 💖<br /><br />
                    Como já sabe, sou <strong>{userName}</strong>, e faço parte do time de Pagamentos. <br /><br />
                    Meu contato é sobre o imóvel🏠 localizado na: <strong>{address}</strong>​<br /><br />
                    Conforme conversamos em ligação recebemos uma solicitação do proprietário do imóvel em que você reside, e ele manifestou o desejo de assumir a responsabilidade pelos pagamentos do boleto de condomínio. Contudo, é importante esclarecer alguns pontos: <br />
                    Você, como inquilino, ainda receberá mensalmente o nosso boleto com os demais valores devidos da locação, que incluem: <strong>aluguel, despesas ordinárias de condomínio, cota condominial, IPTU, seguro incêndio e taxa de serviço.</strong> <br /><br />
                    Para que possamos efetuar essa mudança no sistema, é fundamental que ambas as partes estejam de acordo. Por isso, peço, por gentileza, que confirme sua aceitação em relação a esta mudança em até 48 horas úteis. <br /><br />
                    Queremos muito que você se sinta à vontade com essa decisão, lembrando que a palavra final é sempre um consenso entre ambas as partes. <br /><br />
                    Se tiver qualquer dúvida ou questão sobre esse processo, estou à disposição para esclarecer. 😃 <br /><br />
                    Por favor, responda a este email para confirmar sua decisão. <br /><br />
                    Aguardo seu retorno! <br /><br />
                    Atenciosamente,​
                </p>
            </div>
        </div>
    )
}