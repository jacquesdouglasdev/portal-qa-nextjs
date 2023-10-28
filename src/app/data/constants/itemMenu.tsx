import { IconDeviceLaptop, IconMail } from "@tabler/icons-react"

export const menuItems = [
    { icon: <IconDeviceLaptop stroke={1}/>, text: 'Sistemas', url: '/shared/sistemas', selected: false },
    { icon: <IconMail stroke={1}/>, text: 'Tickets', url: '/shared/tickets', selected: false }
];

export default menuItems