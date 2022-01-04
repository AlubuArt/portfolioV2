//TODO: do some more validation etc. error handling
export async function getVideos() {
    const API_KEY = process.env.NEXT_PUBLIC_YOUTUBE_API_KEY
    const PLAYLIST_ID = "PLEqpYJHv1AC9LLeqNw9b9ZMxZ0HSG4fmy"
    const url = `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&maxResults=50&playlistId=${PLAYLIST_ID}&key=${API_KEY}`


    const res = await fetch(url)

    const json = await res.json();
    return json.items

}

export default getVideos


