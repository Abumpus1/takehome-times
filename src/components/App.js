import { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import { getTopStories } from '../apiCalls';
import '../styles/App.css';
import Dashboard from './Dashboard';
import DetailedView from './DetailedView';
import Nav from './Nav';

const App = () => {

  const [stories, setStories] = useState([]);
  const [error, setError] = useState("")

  const generateStoryIDs = (storyData) => {
    return storyData.map(story => {
      story.id = story.short_url.split("ms/")[1];
      return story;
    });
  }

  useEffect(() => {
    getTopStories().then(data => {
      console.log(data);
      setStories(generateStoryIDs(data.results));
    })
    .catch(err => {
      console.log(err);
      setError(err);
    });
  },[]);

  if (error) {
    return <h2>Error, {error}</h2>
  }

  return (
    <main className="App">
      <Nav />
      <Routes>
        <Route exact path="/" element={
          stories.length ? (
            <Dashboard stories={stories} /> 
          ) : (
            <h2>Loading...</h2>
          )
        } />
        <Route path="/details/:id" element={
          stories.length ? (
            <DetailedView stories={stories} />
          ) : (
            <h2>Loading...</h2>
          )
        } />
        <Route path="*" element={<h2>Error 404, Not found</h2>} />
      </Routes>
    </main>
  );
}

export default App;
