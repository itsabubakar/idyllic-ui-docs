import Props from "../../components/Props"

const ButtonProps = () => {
    return (
        <div className="max-w-3xl">
            <div>
                <h2 className="text-2xl text-gray-800 font-semibold pt-10 pb-5">Button props</h2>
                <p className="text-gray-700">These are props specific to the <span className="text-blue-500">Button</span> component:</p>
            </div>

            {/* Type */}

            <Props
                header="type"
                description="The visual color appearance of the component"
                type={`"light" | "dark" | "light-outline" | "dark-outline"`}
                defaultValue="light"
            />

            {/* disabled */}
            <Props
                header="disabled"
                description="Disables the button and adds opacity"
                type="boolean"
                defaultValue="false"
            />

            {/* cn */}
            <Props
                header="cn"
                description="Extend the styles or add unique classes to the component"
                type="property"
                defaultValue=""
            />

        </div>
    )
}
export default ButtonProps