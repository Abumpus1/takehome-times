import { useEffect, useState } from 'react';
import { getTopStories } from '../apiCalls';
import '../styles/App.css';
import Dashboard from './Dashboard';
import Nav from './Nav';

const App = () => {

  const [stories, setStories] = useState([]);

  useEffect(() => {
    getTopStories().then(data => {
      console.log(data);
      setStories(data.results)
    })
    .catch(err => console.log(err));
  },[]);

  return (
    <div className="App">
      <Nav />
      <Dashboard />
    </div>
  );
}

export default App;
