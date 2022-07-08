import { DefaultUi, Player, Youtube } from '@vime/react';
import '@vime/core/themes/default.css';


export function Music() {
    return (
        <div className="max-w-xl ml-auto mr-auto mt-10 aspect-video">
            <Player>
                <Youtube videoId="wXhTHyIgQ_U"/>
                <DefaultUi />
            </Player>
        </div>
    )
}