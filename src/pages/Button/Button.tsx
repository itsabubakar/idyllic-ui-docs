import { Link, Outlet } from "react-router-dom";


const Button = () => {
    const setActive = (e: any) => {
        let tabs = e.target.parentElement.childNodes;
        for (let i = 0;i < tabs.length;i++) {
            tabs[i].classList.remove('border-b-[2px]')
        }
        e.target.classList.add('border-b-[2px]');
    }
    return (
        <div className="">
            <div>
                <h1 className="text-3xl text-gray-800 font-semibold pb-5">Button</h1>
                <p className="text-gray-700 max-w-3xl">Button component is used to trigger an action or event, such as submitting a form, canceling an action, or performing a delete operation.</p>
            </div>

            <div className="bg-white mt-4">
                <nav className="flex border-b " onClick={setActive}>
                    <Link to={"/documentation/button"} className="text-gray-600 text-sm py-2 px-6 block hover:text-blue-500 focus:outline-none border-b-[2px] font-medium border-gray-500 -mb-[1.4px]">
                        Usage
                    </Link>
                    <Link to={"/documentation/button/props"} className="text-gray-600 border-gray-500 text-sm py-2 px-6 block hover:text-blue-500 focus:outline-none -mb-[1.4px]">
                        Props
                    </Link>
                </nav>
            </div>

            <div className="">
                <Outlet />
            </div>
        </div>
    )
}
export default Button