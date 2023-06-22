import { AiFillGithub, AiOutlineExpand } from 'react-icons/ai';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <header className='sticky top-0 bg-white'>
            <nav className='px-4 py-3 border-b shadow-sm top-10 bottom-4'>
                <ul className='flex items-center'>
                    <li><Link to="/" className='tracking-wider flex items-center gap-2 text-lg text-gray-900 font-bold'><AiOutlineExpand size={16} />Idyllic UI</Link></li>
                    <li className='ml-7 text-sm text-gray-500 font-medium hover:bg-gray-200  hover:text-gray-700 p-2 rounded'><Link to="/documentation/installation">Documentation</Link></li>
                    <li className='ml-auto hover:bg-gray-200 p-2 rounded'><Link to="/"><AiFillGithub size={20} /></Link></li>
                    <li></li>
                </ul>
            </nav>
        </header>
    )
}
export default Navbar