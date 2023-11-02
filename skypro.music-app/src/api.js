export async function getAllTracks({setTrackList}) {
  try {
    const response = await fetch(
      "https://skypro-music-api.skyeng.tech/catalog/track/all/",
      {
        method: "GET",
      }
    );

    const data = await response.json();
    
    if (data) {
      setTrackList(data)
    } else {
      setTrackList([])
    }

  } catch (error) {
    console.log(`${error}`);
    return setTrackList([`${error}`])
  }
}
