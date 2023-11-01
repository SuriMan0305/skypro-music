export async function getAllTracks() {
  const response = await fetch('https://skypro-music-api.skyeng.tech/catalog/track/all/', {
    method: 'GET',
  })

  if (!response.ok) {
    throw new Error('Error')
  }

  const data = await response.json()

  return data
}


