

const fetchMemes = () => {
    return fetch('https://api.imgflip.com/get_memes')
}
const fetchHappyDog = () => {
    return fetch('https://happy-dogs.herokuapp.com/api/v1/happy_dog')
}

const fetchSillyDog = () => {
    return fetch('https://happy-dogs.herokuapp.com/api/v1/silly_dog')
}

const fetchTiredDog = () => {
    return fetch('https://happy-dogs.herokuapp.com/api/v1/tired_dog')
}

export { fetchMemes, fetchHappyDog, fetchSillyDog, fetchTiredDog }