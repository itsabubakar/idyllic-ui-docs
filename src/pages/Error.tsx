import Sidebar from "../components/Sidebar"
import { AppContext } from "../context/Context"
import { useContext } from 'react'

const Error = () => {
    const { sidebarOpen } = useContext(AppContext)

    return (
        <div className="flex h-full relative">
            <div className={`${sidebarOpen ? 'absolute ' : 'hidden sm:flex'} z-10 h-full bg-white sm:relative`}>
                <Sidebar />
            </div>
            <div className="p-5 sm:px-14 sm:py-10">
                <p>Error</p>
            </div>
        </div>
    )
}
export default Error