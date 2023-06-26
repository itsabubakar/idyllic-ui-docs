import { TailwindBtn } from "idyllic-ui"


const Button = () => {
    return (
        <div className="flex gap-2">
            <TailwindBtn cn='hover:bg-green-500 opacity-1'>Click</TailwindBtn>
        </div>
    )
}
export default Button