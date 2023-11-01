export async function getAllTracks() {
  const response = await fetch('https://skypro-music-api.skyeng.tech/catalog/track/all/', {
    method: 'GET',
  }).then((response) => {
    return response.json()
  })
  return response
}

export async function getFirstCollectionTracks() {
  const response = await fetch('https://skypro-music-api.skyeng.tech/catalog/selection/1/', {
    method: 'GET',
  }).then((response) => {
    return response.json()
  })
  console.log(response);
  return response
}


