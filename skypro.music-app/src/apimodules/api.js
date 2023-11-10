const apiUrl = "https://skypro-music-api.skyeng.tech";

export async function getAllTracks({ setTrackList }) {
  try {
    const response = await fetch(`${apiUrl}/catalog/track/all/`, {
      method: "GET",
    });

    const data = await response.json();

    if (data) {
      setTrackList(data);
    } else {
      setTrackList([]);
    }

    return data;
  } catch (error) {
    return { error: error.message };
  }
}

export async function registration({ email, password }) {
  try {

    const response = await fetch(`${apiUrl}/user/signup/`, {
      method: "POST",
      body: JSON.stringify({
        email: email,
        password: password,
        username: email,
      }),
      headers: {
        "content-type": "application/json",
      },
    });

    const data = await response.json();

    if (data) {
      return data;
    } else {
      return;
    }

  } catch (error) {

    return { error: error.message };

  }
}

export async function authorization({ email, password }) {
  try {

    const response = await fetch(`${apiUrl}/user/login/`, {
      method: "POST",
      body: JSON.stringify({
        email: email,
        password: password,
      }),
      headers: {
        "content-type": "application/json",
      },
    });

    const data = await response.json();

    if (data) {
      return data;
    } else {
      return;
    }

  } catch (error) {

    return { error: error.message };

  }
}
