export const Code = ` <div className="">
<div className="">
    <h2>Configuration page</h2>
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
</div>`

export const ButtonImport = `import {Button} from 'idyllic-ui`

export const ButtonPreview = `<Button>Button</Button>`

export const ButtonVariant = `<Button type="light">Button</Button>
<Button type="dark">Button</Button>
<Button type="light-outline">Button</Button>
<Button type="dark-outline">Button</Button>`

export const ButtonExtend = `<Button cn="bg-green-500 text-white hover:text-black">Button</Button>
<Button cn="bg-red-500 text-white  hover:text-black" >Button</Button>
<Button cn="bg-gray-500 text-white hover:text-black" >Button</Button>
<Button cn="bg-yellow-500 text-white hover:text-black">Button</Button>`