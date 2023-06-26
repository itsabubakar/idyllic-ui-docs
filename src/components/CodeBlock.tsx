import { Highlight, themes, Language } from "prism-react-renderer";
import { ButtonHTMLAttributes, ClassAttributes, useState } from "react";
// import SyntaxHighlighter from "react-syntax-highlighter";
// import { dracula } from "react-syntax-highlighter/dist/esm/styles/hljs";
import { JSX } from "react/jsx-runtime";

export interface CopyBlockProps {
    codeString: string;
    language?: Language;
}

const CodeBlock = ({ codeString }: CopyBlockProps) => {
    const [isCopied, setIsCopied] = useState(false);

    const copyToClipboard = (str: string) => {
        const el = document.createElement('textarea');
        el.value = str;
        el.setAttribute('readonly', '');
        el.style.position = 'absolute';
        el.style.left = '-9999px';
        document.body.appendChild(el);
        el.select();
        document.execCommand('copy');
        document.body.removeChild(el);
    };

    const Button = (props: JSX.IntrinsicAttributes & ClassAttributes<HTMLButtonElement> & ButtonHTMLAttributes<HTMLButtonElement>) => (
        <button
            style={{
                border: 'none',
                boxShadow: 'none',
                textDecoration: 'none',
                position: 'absolute',
                top: 0,
                right: 0,
                margin: '8px',
                padding: '8px 12px',
                background: '#E2E8F022',
                borderRadius: '8px',
                cursor: 'pointer',
                color: '#E2E8F0',
                fontSize: '14px',
                fontFamily: 'sans-serif',
                lineHeight: '1',
            }}
            {...props}
        />
    );

    return (
        <Highlight
            theme={themes.duotoneDark}
            code={codeString}
            language="tsx"
        >
            {({ style, tokens, getTokenProps }) => (
                <pre style={style} className="py-3 px-2 rounded text-sm relative ">
                    <Button
                        className="focus:outline-none"
                        onClick={() => {
                            copyToClipboard(codeString);
                            setIsCopied(true);
                            setTimeout(() => setIsCopied(false), 3000);
                        }}
                    >
                        {isCopied ? '🎉 Copied!' : 'Copy'}
                    </Button>
                    {tokens.map((line, i) => (
                        <div key={i}>
                            {/* <span>{i + 1}</span> */}
                            {line.map((token, key) => (
                                <span key={key} {...getTokenProps({ token })} />
                            ))}
                        </div>
                    ))}
                </pre>
            )}

        </Highlight>
    )
}
export default CodeBlock