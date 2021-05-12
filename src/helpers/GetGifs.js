

export const getGif = async( categoria) =>{

    const url = `https://api.giphy.com/v1/gifs/search?q=${encodeURI( categoria )}&limit=10&api_key=iX8Wtk8aW436ZWquW4KKBnm8G3GIWKEl`;

    const resp = await fetch(url);
    const {data} = await resp.json();

    const gifApp = data.map(img =>{
        return{
        id: img.id,
        title: img.title,
        url:  img.images?.downsized_medium.url
    }
});

    return gifApp;
    //console.log(gifApp);
    //setImages(gifApp);
}