import { GlobalProvider } from "../data/context/GlobalContext"
import Logo from "../shared/Logo"
import Header from "./shared/components/page/Header"
import Menu from "./shared/components/page/Menu"

export default function Layout(props: any) {
    return (
        <div className="h-screen w-screen bg-white p-1">
            <GlobalProvider>
                <div className="flex h-full w-full rounded-2xl overflow-hidden">
                    <aside className="flex flex-col w-1/5 bg-[#082338]">
                        <Logo />
                        <Menu />
                    </aside>
                    <div className="flex flex-col w-full">
                        <Header />
                        <main className={`flex-1 bg-[#131735] overflow-auto`}>
                            {props.children}
                        </main>
                    </div>
                </div>
            </GlobalProvider>
        </div>
    )
}