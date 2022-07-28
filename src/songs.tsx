export function getSong () {
    let songs = ["wXhTHyIgQ_U C", "A8MO7fkZc5o D", "Djrl6fu8myo F#", "0J2QdDbelmY G", "0qanF-91aJo E", "3mbvWn1EY6g F#", "bePCRKGUwAY D", "qnkuBUAwfe0 D", "Sb5aq5HcS1A A", "zUwEIt9ez7M G"]
    let randomNumber = Math.floor(Math.random() * ((songs.length - 1) - 1 + 1)) + 1;
    return songs[randomNumber]
}
