import { useEffect, useState } from 'react';
import { getTopStories } from '../apiCalls';
import '../styles/App.css';
import Dashboard from './Dashboard';
import Nav from './Nav';

const App = () => {

  const [stories, setStories] = useState([]);

  const generateStoryIDs = (storyData) => {
    return storyData.map(story => {
      story.id = story.short_url.split("ms/")[1];
      return story;
    })
  }

  useEffect(() => {
    getTopStories().then(data => {
      console.log(data);
      setStories(generateStoryIDs(data.results));
    })
    .catch(err => console.log(err));
  },[]);

  return (
    <div className="App">
      <Nav />
      {stories.length ? (
        <Dashboard stories={stories} /> 
      ) : (
        <h2>Loading...</h2>
      )}
    </div>
  );
}

export default App;
