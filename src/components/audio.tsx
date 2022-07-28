import { DefaultUi, Player, Youtube } from '@vime/react';
import '@vime/core/themes/default.css';
import { getSong } from '../songs';

export let song = getSong()
export function Music() {
    return (
        <div className="max-w-xl ml-auto mr-auto mt-10 aspect-video">
            <div className='text-2xl mb-6'>Qual o tom da música?</div>
            <Player>
                <Youtube videoId={song.split(" ")[0]}/>
                <DefaultUi />
            </Player>
        </div>
    )
}