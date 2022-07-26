import { Info, GithubLogo } from "phosphor-react";
export function Header() {
    return (
        <header className="flex mt-0">
            <div className="flex-none min-w-min ml-auto mt-4">
                <a href="https://www.github.com/gustaftw" target={"_blank"}>
                    <GithubLogo size={24}/>
                </a>
            </div>

            <div className="grow h-14 text-center text-5xl max-w-[796px]">
                musIc
            </div>

            <div className="flex-none min-w-min mr-auto mt-4">
                <a href="#">
                    <Info size={24}></Info>
                </a>
            </div>
        </header>
    )
}