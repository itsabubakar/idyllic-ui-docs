import { Outlet } from "react-router-dom"
import Sidebar from "../components/Sidebar"

const Documentation = () => {
    return (
        <div className="flex h-full">
            <Sidebar />
            <div className="px-14 py-10 max-w-4xl">
                <Outlet />
            </div>
        </div>
    )
}
export default Documentation