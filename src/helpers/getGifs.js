export const getGifs = async( category ) => {

    // encodeURI() will replace empty spaces to avoid errors in the url
    const url = `https://api.giphy.com/v1/gifs/search?q=${ encodeURI( category ) }&limit=10&api_key=eyTO6BsSM7DVq3PhN3tr6pGEvh9iAmpZ`;
    const resp = await fetch( url );
    const {data} = await resp.json();

    const gifs = data.map( img => {
        return {
            id: img.id,
            title: img.title,
            url: img.images?.downsized_medium.url
        }
    } );

    // console.log(gifs);
    return gifs;
}