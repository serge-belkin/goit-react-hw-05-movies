import { useEffect, useState } from 'react';
import API from 'services/api/api';
import { useParams } from 'react-router-dom';

export const Casts = () => {
  const { movieId } = useParams();
  const [items, setItems] = useState(null);

  useEffect(() => {
    API.getCast(movieId)
      .then(res => res.json())
      .then(res => setItems(res.cast))
      .catch(err => setItems([]));
  }, [movieId]);

  if (!items) {
    return;
  }
  if (items.length === 0) {
    return <div>Cast not found</div>;
  }

  return (
    <>
      <ul>
        {items.map(({ character, name, profile_path }) => (
          <li key={name}>
            {profile_path && (
              <img
                src={'https://image.tmdb.org/t/p/w185' + profile_path}
                alt={name}
              />
            )}
            <p>{name}</p>
            <p>{character}</p>
          </li>
        ))}
      </ul>
    </>
  );
};
