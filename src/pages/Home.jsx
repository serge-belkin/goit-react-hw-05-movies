import { useEffect, useState } from 'react';
import API from 'services/api/api';
import MovieGallery from 'components/MovieGallery/MovieGallery';

export const Home = () => {
  const [items, setItems] = useState('');
  useEffect(() => {
    API.getTrending()
      .then(res => res.json())
      .then(res => setItems(res.results))
      .catch(error => setItems(''));
  }, []);

  return (
    <>
      <h1>Trending today</h1>
      <MovieGallery items={items ? items : []} />
    </>
  );
};
