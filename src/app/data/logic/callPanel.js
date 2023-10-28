import FirstIQCall from "@/app/(interna)/shared/components/tickets/right/email/changeResponsibility/IQPP/FirstIQCall"
import FirstIQProposal from "@/app/(interna)/shared/components/tickets/right/email/changeResponsibility/IQPP/FirstIQProposal"
import FirstPP from "@/app/(interna)/shared/components/tickets/right/email/changeResponsibility/IQPP/FirstPP"

export const CallPanel = (step) => {
    switch(step) {
        case 123:
            return <FirstIQProposal />
        case 124:
            return <FirstIQProposal />
        case 125:
            return <FirstIQProposal copy />
        case 126: 
            return <FirstIQCall />
        case 127: 
            return <FirstIQCall />
        case 128: 
            return <FirstIQCall />
        case 129: 
            return <FirstIQCall />
        case 130: 
            return <FirstIQCall copy />
        case 132:
            return <FirstPP />
        default:
            return <div>Step {step} não reconhecido</div>
    }
}