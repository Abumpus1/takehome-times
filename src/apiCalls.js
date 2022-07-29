export const getTopStories = () => {
  return fetch(`https://api.nytimes.com/svc/topstories/v2/home.json?api-key=1AHD46o6jvZ6wNyvAXx0No8Wks7AnASz`).then(response => {
    if(!response.ok) {
      throw new Error(response.statusText);
    }
    return response.json();
  });
}