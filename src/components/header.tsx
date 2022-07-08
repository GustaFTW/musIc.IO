import { Question, Info } from "phosphor-react";

export function Header() {
    return (
        <header className="flex mt-0">
            <div className="flex-none min-w-min ml-auto mt-4">
                <Question size={24}/>
            </div>

            <div className="grow h-14 text-center text-5xl max-w-[796px]">
                musIc
            </div>

            <div className="flex-none min-w-min mr-auto mt-4">
                <Info size={24}></Info>
            </div>
        </header>
    )
}