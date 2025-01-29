const API_KEY = import.meta.env.VITE_API_KEY;
const API_URL_NASA = "https://api.nasa.gov";
const API_URL_JSON = "https://jsonplaceholder.typicode.com";

export async function fetchComments() {
  const comments = await fetchData(
    `${API_URL_JSON}/comments`,
    "Failed to fetch comments"
  );
  const users = await fetchData(
    `${API_URL_JSON}/users`,
    "Failed to fetch users"
  );

  return comments.map((comment) => ({
    ...comment,
    user:
      users.find((user) => user.id === (comment.email.length % 10) + 1) || {},
  }));
}

export async function addComment(newComment) {
  return postData(`${API_URL_JSON}/comments`, newComment);
}

export async function updateComment(id, updatedComment) {
  return putData(`${API_URL_JSON}/comments/${id}`, updatedComment);
}

export async function deleteComment(id) {
  return deleteData(`${API_URL_JSON}/comments/${id}`);
}

async function postData(url, data) {
  const response = await fetch(url, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
  return response.json();
}

async function putData(url, data) {
  const response = await fetch(url, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
  return response.json();
}

async function deleteData(url) {
  const response = await fetch(url, { method: "DELETE" });
  return response.ok;
}

export async function fetchEpicImages(date) {
  const url = `${API_URL_NASA}/EPIC/api/natural/date/${date}?api_key=${API_KEY}`;
  return fetchData(url, "Failed to fetch EPIC data");
}

export async function fetchApod(date) {
  const url = `${API_URL_NASA}/planetary/apod?date=${date}&api_key=${API_KEY}`;
  return fetchData(url, "Failed to fetch APOD data");
}

export async function fetchMarsRoverPhotos(roverName, sol) {
  const url = `${API_URL_NASA}/mars-photos/api/v1/rovers/${roverName}/photos?sol=${sol}&api_key=${API_KEY}`;
  return fetchData(url, "Failed to fetch Mars Rover photos");
}

async function fetchData(url, errorMessage) {
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error(errorMessage || "Failed to fetch data");
  }
  return response.json();
}
