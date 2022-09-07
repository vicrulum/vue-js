
const apiKey = 'W8y0JCivfxMiydpGDTIHQc3jdTGDCg4f'


fetch(`https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`)
    .then(res => res.json())
    .then(({data}) => {
        const {url} = data.images.original
        const img = document.createElement('img')
        img.src = url
        document.body.append(img)
    })
    .catch(e => {
        console.log(e)
    })
