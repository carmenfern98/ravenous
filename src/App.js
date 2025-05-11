import './App.css';
import { Business } from './components/Business';
import { BusinessList } from './components/BusinessList';
import { SearchBar } from './components/SearchBar';
import { searchYelp } from './utilities/yelpapi';
import { useState, useEffect } from 'react';
import { LoadingSpinner } from './components/LoadingSpinner';

function App() {
const [businesses, setBusinesses] = useState([]);
const [loading, setLoading] = useState(true);
const [error, setError] = useState(null);

useEffect(() => {
  const fetchBusinesses = async () => {
    try {
      const term = "restaurant";
      const location = "New York";
      const data = await searchYelp(term, location);
      setBusinesses(data);
      setLoading(false);
    } catch (err){
      setError("Error fetching data from Yelp");
      setLoading(false);
    }
  }
  fetchBusinesses();
}, []);

if(loading) return <LoadingSpinner/>;
if(error) return <div>{error}</div>;

  return (
    <div className="App">
      <header className="App-header">
      <h2>ravenous</h2>
      </header>
      <div className="banner">
      <SearchBar setBusinesses={setBusinesses}/>
      </div>
      <BusinessList businesses={businesses}/>
    </div>
  );
}

export default App;
