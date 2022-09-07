import axios from "axios";

const apiKey = 'W8y0JCivfxMiydpGDTIHQc3jdTGDCg4f'
// https://api.giphy.com/v1/gifs/random?api_key=${apiKey}

const gifhyApi = axios.create({
    baseURL: 'https://api.giphy.com/v1/gifs',
    params: {
        api_key: apiKey
    }
})



export default gifhyApi

// gifhyApi.get('/random')
//     .then( res => {

//         const {data} = res.data
//         const {url} = data.images.original
//         console.log(data)

//         const img = document.createElement('img')

//         img.src = url

//         document.body.append(img)



//     })
//     .catch(e => console.log(e))