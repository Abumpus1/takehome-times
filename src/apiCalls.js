const apiKey = `${process.env.REACT_APP_API_KEY}`

export const getTopStories = () => {
  return fetch(`https://api.nytimes.com/svc/topstories/v2/home.json?api-key=${apiKey}`).then(response => {
    if(!response.ok) {
      throw new Error(response.statusText);
    }
    return response.json();
  });
}