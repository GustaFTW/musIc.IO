import { DefaultUi, Player, Youtube } from '@vime/react';
import '@vime/core/themes/default.css';
import { songs } from '../songs';

let peopleList = songs.map(person => person)
console.log(peopleList)
export function Music() {
    return (
        <div className="max-w-xl ml-auto mr-auto mt-10 aspect-video">
            <div className='text-2xl mb-6'>Qual o tom da música?</div>
            <Player>
                <Youtube videoId={"sexo"}/>
                <DefaultUi />
            </Player>
        </div>
    )
}