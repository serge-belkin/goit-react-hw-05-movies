import { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { useEffect } from 'react';
import API from 'services/api/api';
import css from './Movies.module.css';
import MovieGallery from 'components/MovieGallery/MovieGallery';

export const Movies = () => {
  const [query, setQuery] = useState('');
  const [search, setSearch] = useState('');
  const [items, setItems] = useState('');
  const [searchParams, setSearchParams] = useSearchParams();
  const handleSubmit = e => {
    e.preventDefault();
    if (query !== '') {
      setSearchParams({ query });
    }
  };
  const handleInput = e => {
    setQuery(e.target.value);
  };
  useEffect(() => {
    if (!search) {
      return;
    }
    API.searchMovie(search)
      .then(res => res.json())
      .then(res => setItems(res.results))
      .catch(error => setItems(''));
  }, [search]);

  useEffect(() => {
    const query = searchParams.get('query');
    if (!query) {
      return;
    }
    setQuery(query);
    setSearch(query);
  }, [searchParams]);
  return (
    <div>
      <form className={css.searchForm} onSubmit={handleSubmit}>
        <input
          className={css.input}
          value={query}
          onChange={handleInput}
          type="text"
        />
        <button className={css.searchButton}>Search</button>
      </form>
      <MovieGallery items={items ? items : []} />
    </div>
  );
};
