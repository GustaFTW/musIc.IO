import { Question, Info } from "phosphor-react";

export function Header() {
    return (
        <header className="flex">
            <div>
                <Question className="flex-none w-80 h-14"/>
            </div>

            <div className="grow h-14 text-center text-5xl">
                musIc
            </div>

            <div>
                <Info className="flex-none w-80 h-14"></Info>
            </div>
        </header>
    )
}