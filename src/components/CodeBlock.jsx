import SyntaxHighlighter from "react-syntax-highlighter";
import { dracula } from "react-syntax-highlighter/dist/esm/styles/hljs";


const CodeBlock = ({ code }) => {
    return (
        <SyntaxHighlighter className="rounded-md" children={code} language="bash" style={dracula} />
    )
}
export default CodeBlock