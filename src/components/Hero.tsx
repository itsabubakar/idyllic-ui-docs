import { AiFillGithub } from "react-icons/ai"
import { Link } from "react-router-dom"

const Hero = () => {
    return (
        <div className="flex justify-center items-center h-full">
            <section className="px-5 -mt-20">
                <h1 className="text-5xl md:text-7xl font-bold text-gray-700 text-center pb-10">Idyllic UI</h1>
                <p className="pb-8 md:text-xl text-base text-center max-w-xl md:max-w-3xl text-gray-500">The perfect minimal UI library containing regulary used components you can use for your next project minimally styled and easy to use</p>
                <div className="flex gap-2  justify-center">
                    <Link className='bg-gray-900 text-white font-medium px-5 py-3 rounded-md hover:bg-gray-800 text-sm' to="/documentation/installation">Documentation</Link>
                    <Link className='border-gray-300 gap-1 font-medium border flex text-gray-800 px-5 py-3 rounded-md text-sm' to="/documentation"><AiFillGithub size={20} />Github</Link>
                </div>
            </section>

        </div>
    )
}
export default Hero