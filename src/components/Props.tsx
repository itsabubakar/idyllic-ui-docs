interface Props {
    header: string;
    description: string;
    type: string;
    defaultValue: string;
}

const Props = ({ header, description, type, defaultValue }: Props) => {
    return (
        <div className="pt-8">
            <h2 className="border-b text-gray-800 font-medium">{header}</h2>
            <div className="flex my-2 gap-5">
                <p className="text-gray-700 text-sm w-20">Description</p>
                <p className="text-gray-700 text-sm">{description} </p>
            </div>

            <div className="flex my-2 gap-5 ">
                <p className="text-gray-700 text-sm w-20">Type</p>
                <p className="text-blue-400 text-xs">{type}</p>
            </div>

            <div className="flex my-2 gap-5">
                <p className="text-gray-700 text-sm w-20">Default</p>
                <p className="text-blue-400 text-xs">{defaultValue}</p>
            </div>
        </div>
    )
}
export default Props