import { Outlet } from "react-router-dom"
import Sidebar from "../components/Sidebar"

import { AppContext } from '../context/Context';
import { useContext } from "react"

const Documentation = () => {
    const { sidebarOpen } = useContext(AppContext)

    return (
        <div className="flex  relative">
            <div className={`${sidebarOpen ? 'absolute h-full' : 'hidden sm:flex'} z-10   bg-white sm:relative`}>
                <Sidebar />
            </div>
            <div className="p-5 sm:px-14 sm:py-10">
                <Outlet />
            </div>
        </div>
    )
}
export default Documentation    