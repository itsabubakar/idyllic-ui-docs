import { Link } from "react-router-dom"
import { AiOutlineEdit } from "react-icons/ai"

const Linker = ({ github, pageLink }) => {
    return (
        <div className='py-8  flex flex-col'>
            <Link className='text-sm text-gray-500 flex items-center hover:text-blue-500' to='/'><AiOutlineEdit className="mr-1" size={20} />Edit this page on Github</Link>

            <div className='ml-auto'>
                <h3 className='text-sm text-gray-600 mb-2'>Next</h3>
                <Link className='text-lg capitalize text-gray-800 font-semibold hover:text-blue-500' to={`/documentation/${pageLink}`}>{pageLink}</Link>
            </div>
        </div>
    )
}
export default Linker