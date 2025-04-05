// src/App.jsx
import { useState, useEffect } from 'react';
import { API_KEY, BASE_URL } from './config';
import SearchBar from './components/SearchBar';
import CategoryButtons from './components/CategoryButtons';
import PhotoGallery from './components/PhotoGallery';

function App() {
  const [photos, setPhotos] = useState([]);
  const [loading, setLoading] = useState(false);
  const [query, setQuery] = useState('nature');
  const categories = ['Mountain', 'Beaches', 'Birds', 'Food', 'Water'];

  useEffect(() => {
    fetchPhotos();
  }, [query]);

  const fetchPhotos = async () => {
    setLoading(true);
    try {
      const response = await fetch(`${BASE_URL}/search?query=${query}&per_page=15`, {
        headers: {
          Authorization: API_KEY
        }
      });
      const data = await response.json();
      setPhotos(data.photos);
    } catch (error) {
      console.error('Error fetching photos:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleSearch = (searchTerm) => {
    setQuery(searchTerm);
  };

  const handleCategorySelect = (category) => {
    setQuery(category.toLowerCase());
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-6xl font-bold text-center mb-8">Snap Shot</h1>
      <SearchBar onSearch={handleSearch} />
      <CategoryButtons 
        categories={categories} 
        onSelect={handleCategorySelect} 
        activeCategory={query}
      />
      {loading ? (
        <div className="text-center py-8">Loading...</div>
      ) : (
        <PhotoGallery photos={photos} />
      )}
    </div>
  );
}

export default App;