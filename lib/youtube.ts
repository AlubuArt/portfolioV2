const API_KEY = process.env.NEXT_PUBLIC_YOUTUBE_API_KEY;
const URL =
    "https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&maxResults=50&playlistId=";

export async function getYouTubePlaylist(
    playListID: string
): Promise<[]> {
    const query = `${URL}${playListID}&key=${API_KEY}`;

    const response = await fetch(query);

    const data = await response.json();

    if (data.items) {
        const list = data.items;
        return list.reverse();
    } else {
        const error =
            "Custom Error: Could not fetch a Youtube playlist with that ID";

        console.log(error);
        //TODO: returning an empty array isnt the best way to do this. Would rather return an error
        return [];
    }
}
