import SyntaxHighlighter from "react-syntax-highlighter";
import { dracula } from "react-syntax-highlighter/dist/esm/styles/hljs";


const CodeBlock = ({ code, language }) => {
    return (
        <div className="max-w-3xl">
            <SyntaxHighlighter className="rounded-md" children={code} language={language} style={dracula} />
        </div>
    )
}
export default CodeBlock