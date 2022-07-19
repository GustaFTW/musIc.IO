import { useState } from "react";

export function Keyboard() { 
    let songKey = "C"
    const [correctAnswer, setCorrectAnswer] = useState(false);
    const [guesses, setGuesses] = useState(0);

    const handleClick = (buttonKey: string) => {
        setGuesses(guesses + 1)
        if (buttonKey === songKey) {
            setCorrectAnswer(true)
        } else setCorrectAnswer(false);
    }

    if (correctAnswer == false) {
        return (
        <div>
            <div className="font-bold text-2xl text-center mt-2 mb-2">Quantidade de chutes (máximo 3): {guesses}</div>
            <div className="grid grid-cols-5 grid-rows-8 mt-12 ml-auto mr-auto place-items-center max-w-md rounded">
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
        </div>)
    } else if (guesses <= 3) {
        return (<div className="font-bold text-2xl mt-2 text-center">Resposta correta, chutes: {guesses}</div>)
    } else {
        return (<div className="font-bold text-2xl mt-2 text-center">Perdeu ruim, chutes: {guesses}</div>)
    }

}
