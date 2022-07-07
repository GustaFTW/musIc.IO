import { Player, Youtube } from '@vime/react';

export function Music() {
    return (
        <div className="flex place-content-center mt-8">
            <Player>
                <Youtube videoId="wXhTHyIgQ_U"/>
            </Player>
        </div>
    )
}