import { NavLink } from "react-router-dom"

const Sidebar = () => {
    return (
        <div className="w-52 border-r flex flex-col px-5 h-full">
            <h2 className="text-base text-gray-800 mt-10 mb-4 font-semibold">Setup</h2>
            <div className="flex flex-col">
                <NavLink
                    className={({ isActive }) => (isActive ? 'link active-link' : 'link')}
                    to='/documentation/installation'>Installation</NavLink>
                <NavLink className={({ isActive }) => (isActive ? 'link active-link' : 'link')} to='/documentation/configuration'>Configuration</NavLink>
            </div>

            <h2 className="text-base text-gray-800 mt-10 mb-4 font-semibold">Components</h2>
            <div className="flex flex-col">
                <NavLink className={({ isActive }) => (isActive ? 'link active-link' : 'link')} to='/documentation/alert'>Alert</NavLink>
                <NavLink className={({ isActive }) => (isActive ? 'link active-link' : 'link')} to='/documentation/button'>Button</NavLink>
                <NavLink className={({ isActive }) => (isActive ? 'link active-link' : 'link')} to='/documentation/container'>Container</NavLink>
                <NavLink className={({ isActive }) => (isActive ? 'link active-link' : 'link')} to='/documentation/header'>Header</NavLink>
                <NavLink className={({ isActive }) => (isActive ? 'link active-link' : 'link')} to='/documentation/form'>FormControl</NavLink>
                <NavLink className={({ isActive }) => (isActive ? 'link active-link' : 'link')} to='/documentation/spinner'>Spinner</NavLink>
                <NavLink className={({ isActive }) => (isActive ? 'link active-link' : 'link')} to='/documentation/text'>Text</NavLink>
            </div>

        </div>
    )
}
export default Sidebar