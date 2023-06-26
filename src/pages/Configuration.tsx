// import { Header, Text } from "idyllic-ui"
// import CodeBlock from "../components/CodeBlock"
// import { Link } from "react-router-dom"
// import Linker from "../components/Linker"
// import React from "react"

import { Highlight, themes } from "prism-react-renderer"
import { ButtonHTMLAttributes, ClassAttributes, useState } from "react";


const Configuration = () => {
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

    const codeBlock = ` const GroceryItem: React.FC<GroceryItemProps> = ({ item }) => {
      return (
        <div>
          <h2>{item.name}</h2>
          <p>Price: {item.price}</p>
          <p>Quantity: {item.quantity}</p>
          <p>Copy works!!</p>
        </div>
      );
 }`


    return (
        <div className="">
            <div className="">
                <h2>Configuration page</h2>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eligendi obcaecati, rerum error nam odit fuga sint veniam reprehenderit ipsa facere minima, hic consequatur incidunt cumque nobis aliquam iste fugit quidem.
                <Highlight
                    theme={themes.duotoneDark}
                    code={codeBlock}
                    language="tsx"
                >
                    {({ style, tokens, getTokenProps }) => (
                        <pre style={style} className="py-3 px-2 rounded text-sm relative ">
                            <Button
                                className="focus:outline-none"
                                onClick={() => {
                                    copyToClipboard(codeBlock);
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
            </div>
        </div>
    )
}
export default Configuration