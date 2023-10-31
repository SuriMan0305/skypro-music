export async function getAllTracks() {
  const response = await fetch('https://skypro-music-api.skyeng.tech/catalog/track/all/', {
    method: 'GET',
  }).then((response) => {
    return response.json()
  })
  return response
}