import PageButtons from "@/app/(interna)/shared/components/tickets/left/PageButtons"
import PageAddress from "@/app/(interna)/shared/components/tickets/left/PageAddress"
import PageStart from "@/app/(interna)/shared/components/tickets/left/PageStart"
import PageClient from "@/app/(interna)/shared/components/tickets/left/PageClient"
import PageCellPhoneNumber from "@/app/(interna)/shared/components/tickets/left/PageCellPhoneNumber"
import PageHours from "@/app/(interna)/shared/components/tickets/left/PageHours"
import {
    buttonsConfigStep0,
    buttonsConfigStep1,
    buttonsConfigStep110,
    buttonsConfigStep120,
    buttonsConfigStep121,
    buttonsConfigStep122,
    buttonsConfigStep131,
} from "@/app/data/constants/changeResponsibilityStep"

export const CallStep = (step) => {
  switch (step) {
    case 0:
      return <PageButtons buttonsConfig={buttonsConfigStep0} />
    case 1:
      return <PageButtons buttonsConfig={buttonsConfigStep1} />
    case 110:
      return <PageButtons buttonsConfig={buttonsConfigStep110} />
    case 120:
      return <PageButtons buttonsConfig={buttonsConfigStep120} />
    case 121:
      return <PageButtons buttonsConfig={buttonsConfigStep121} />
    case 122:
      return <PageButtons buttonsConfig={buttonsConfigStep122} />
    case 123:
      return <PageClient nextStep={124} backStep={122}/>
    case 124:
      return <PageAddress nextStep={125} backStep={123}/>
    case 125:
      return <PageStart nextStep={0} backStep={124}/>
    case 126:
      return <PageClient nextStep={127} backStep={122} />
    case 127:
      return <PageCellPhoneNumber nextStep={128} backStep={126} />
    case 128:
      return <PageHours nextStep={129} backStep={127} />
    case 129:
      return <PageAddress nextStep={130} backStep={128} />
    case 130:
      return <PageStart nextStep={0} backStep={129} />
      case 131:
        return <PageButtons buttonsConfig={buttonsConfigStep131} />
    default:
      return <div>Step {step} não reconhecido</div>
  }
}
