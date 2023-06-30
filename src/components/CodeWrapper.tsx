import CodeBlock from "./CodeBlock";

interface CodeWrapper {
    Idyllic: string;
    plainJsx: string;
}

const CodeWrapper = ({ Idyllic, plainJsx }: CodeWrapper) => {

    const handleClick = (e: any) => {

        let btns = e.target.parentElement.childNodes
        btns[0].classList.remove('border-b-2')
        btns[1].classList.remove('border-b-2')

        e.target.classList.add('border-b-2')

        let tabs = e.target.parentElement.parentElement.childNodes;
        if (e.target.tagName !== 'BUTTON') return



        for (let i = 0;i < tabs.length;i++) {

            let currentTarget = e.target.textContent
            e.target.parentElement.parentElement.childNodes[i].classList.add('hidden')

            if (currentTarget == 'Idyllic-UI') {
                e.target.parentElement.parentElement.childNodes[0].classList.remove('hidden')
                e.target.parentElement.parentElement.childNodes[1].classList.remove('hidden')
            } else if (currentTarget == 'button.jsx') {
                e.target.parentElement.parentElement.childNodes[0].classList.remove('hidden')
                e.target.parentElement.parentElement.childNodes[2].classList.remove('hidden')

            }
        }

    }
    return (
        <div className="rounded-md bg-[#2a2734]">
            <div className="flex gap-1" onClick={handleClick}>
                <button className="text-white text-xs py-3 px-4 border-b-2 border-blue-500">Idyllic-UI</button>
                <button className="text-white text-xs py-3 px-4 border-blue-300">button.jsx</button>
            </div>

            <div data-set="idyllic-ui">
                <CodeBlock codeString={Idyllic} />
            </div>

            <div data-set="button.jsx" className="hidden">
                <CodeBlock codeString={plainJsx} />
            </div>
        </div>
    )
}
export default CodeWrapper