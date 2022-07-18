export let right = false
export function Keyboard() { 
    console.log(right)
    let songKey = "C"
    const handleClick = (buttonKey: string) => {
        if (buttonKey === songKey) {
            return true
        } else return false
    }
    
    return (
        <div className="grid grid-cols-5 grid-rows-8 mt-24 ml-auto mr-auto place-items-center max-w-md rounded">
            <div>
                <button onClick={() => {handleClick('C')}} className="text-4xl rounded font-bold hover:bg-purple-600 bg-purple-100 transition-colors pl-9 pr-10">C</button>
            </div>
            <div>
                <button onClick={() => {handleClick('C#')}} className="text-4xl rounded font-bold hover:bg-purple-600 bg-purple-100 transition-colors pl-8 pr-10">C#</button>
            </div>
            <div>
                <button onClick={() => {handleClick('D')}} className="text-4xl rounded font-bold hover:bg-purple-600 bg-purple-100 transition-colors pl-8 pr-10">D</button>
            </div>
            <div>
                <button onClick={() => {handleClick('D#')}} className="text-4xl rounded font-bold hover:bg-purple-600 bg-purple-100 transition-colors pl-8 pr-10">D#</button>
            </div>
            <div>
                <button onClick={() => {handleClick('E')}} className="text-4xl rounded font-bold hover:bg-purple-600 bg-purple-100 transition-colors pl-8 pr-[43px]">E</button>
            </div>
            <div>
                <button onClick={() => {handleClick('F')}} className="text-4xl rounded font-bold hover:bg-purple-600 bg-purple-100 transition-colors pl-10 pr-10">F</button>
            </div>
            <div>
                <button onClick={() => {handleClick('F#')}} className="text-4xl rounded font-bold hover:bg-purple-600 bg-purple-100 transition-colors pl-8 pr-10">F#</button>
            </div>
            <div>
                <button onClick={() => {handleClick('G')}} className="text-4xl rounded font-bold hover:bg-purple-600 bg-purple-100 transition-colors pl-8 pr-10">G</button>
            </div>
            <div>
                <button onClick={() => {handleClick('G#')}} className="text-4xl rounded font-bold hover:bg-purple-600 bg-purple-100 transition-colors pl-8 pr-10">G#</button>
            </div>
            <div>
                <button onClick={() => {handleClick('A')}} className="text-4xl rounded font-bold hover:bg-purple-600 bg-purple-100 transition-colors pl-8 pr-10">A</button>
            </div>
            <div>
                <button onClick={() => {handleClick('A#')}} className="text-4xl rounded font-bold hover:bg-purple-600 bg-purple-100 transition-colors pl-6 pr-9">A#</button>
            </div>
            <div>
                <button onClick={() => {handleClick('B')}} className="text-4xl rounded font-bold hover:bg-purple-600 bg-purple-100 transition-colors pl-8 pr-10">B</button>
            </div>            
        </div>        
    )
}

