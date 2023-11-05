const apiUrl = 'https://skypro-music-api.skyeng.tech'

export async function getAllTracks({ setTrackList }) {
  try {
    const response = await fetch(
      `${apiUrl}/catalog/track/all/`,
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

    return data

  } catch (error) {
    return { error: error.message }
  }
}
