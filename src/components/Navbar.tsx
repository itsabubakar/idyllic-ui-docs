import { AiFillGithub, AiOutlineExpand, AiOutlineMenu } from 'react-icons/ai';
import { Link } from 'react-router-dom';

import { AppContext } from '../context/Context';
import { useContext } from "react"



const Navbar = () => {

    const { sidebarOpen, setSidebarOpen } = useContext(AppContext)

    const handleClick = () => {
        setSidebarOpen(!sidebarOpen)
    }
    return (
        <header className='sticky top-0 bg-white z-50'>
            <nav className='px-4 py-3 border-b shadow-sm top-10 bottom-4'>
                <ul className='flex items-center'>
                    <li><Link to="/" className='tracking-wider flex items-center gap-2 text-lg text-gray-900 font-bold'><AiOutlineExpand size={16} />Idyllic UI</Link></li>
                    <li className='ml-7 text-sm text-gray-500 font-medium hover:bg-gray-200  hover:text-gray-700 p-2 rounded hidden sm:block'><Link to="/documentation/installation">Documentation</Link></li>
                    <li className='ml-auto hover:bg-gray-200 p-2 rounded'><Link to="https://github.com/itsabubakar/idyllic-ui"><AiFillGithub size={20} /></Link></li>
                    <button onClick={handleClick} className='hover:bg-gray-200 p-2 rounded sm:hidden'><AiOutlineMenu className="text-gray-700 f" size={22} /></button>
                </ul>
            </nav>
        </header>
    )
}
export default Navbar