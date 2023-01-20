import { useEffect, useState } from 'react';
import API from 'services/api';
import MovieGallery from 'components/MovieGallery';
import css from './Home.module.css';

const Home = () => {
  const [items, setItems] = useState('');
  useEffect(() => {
    API.getTrending()
      .then(res => res.json())
      .then(res => setItems(res.results))
      .catch(error => setItems(''));
  }, []);

  return (
    <>
      <h1 className={css.title}>Trending today</h1>
      <MovieGallery items={items ? items : []} />
    </>
  );
};

export default Home;