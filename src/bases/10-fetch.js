const apiKey = 'UUsn52JBEx4Lv4CUlTjpRJcqeYwSuSic'
// https://api.giphy.com/v1/gifs/random?api_key=UUsn52JBEx4Lv4CUlTjpRJcqeYwSuSic

fetch( `https://api.giphy.com/v1/gifs/random?api_key=${apiKey}` )
    .then( resp => resp.json())
    .then (({data}) => {
        const {url} = data.images.original
        const img = document.createElement('img')
        img.src = url
        document.body.append(img)
    })