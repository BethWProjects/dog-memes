
// const apiKey = process.env.REACT_APP_API_KEY

const fetchMemes = () => {
    return fetch('https://api.imgflip.com/get_memes')
}

// const fetchMemes = () => {
//     return fetch('https://api.thedogapi.com/v1/images/search', {
//         headers: {'x-api-key': apiKey}
//     })
// }

export { fetchMemes }