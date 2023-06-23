import { Header, Text } from "idyllic-ui"
import CodeBlock from "../components/CodeBlock"
import { Link } from "react-router-dom"
import Linker from "../components/Linker"

const Configuration = () => {
    const code = `import { Text } from "idyllic-ui"

const App = () => {
    return (
        <div>
            <Text
             className='mt-2'
             size='10px'
             color='#efefef'
             >Idyllic Ui can be used by importing the 
            component and passing the required props.</Text>
        </div>
        )
}
    `
    const codeTwo = `const App = () => {
        return (
            <div>
                <Text className='mt-2 !text-blue-600'>
                    Custom styling can be added.
                    Here Tailwindcss was used for styling.
                </Text>
            </div>
            )
}`

    return (
        <div>
            <div>
                <Header className="text-4xl font-bold text-gray-800" as="h1">Configuration</Header>
                <Text className='my-6'>Idyllic UI can be used by importing the component and passing the required props.</Text>

                <div className="my-4">
                    <CodeBlock language={'javascript'} code={code} />
                </div>
                <Text className='mt-2'>Custom styling can be added. Here Tailwindcss was used for styling.</Text>
                <div className="my-4">
                    <Text className='my-4 text-blue-600'>Adding '!' forces the component to override the default styling when using tailwindcss to style.</Text>

                    <CodeBlock language={'jsx'} code={codeTwo} />
                </div>
                <Linker pageLink={'alert'} />

            </div>
        </div>
    )
}
export default Configuration