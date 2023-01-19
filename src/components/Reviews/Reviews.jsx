import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import API from 'services/api';
import css from './Reviews.module.css';

export const Reviews = () => {
  const { movieId } = useParams();
  const [items, setItems] = useState(null);

  useEffect(() => {
    API.getReviews(movieId)
      .then(res => res.json())
      .then(res => setItems(res.results))
      .catch(err => setItems([]));
  }, [movieId]);
  if (!items) {
    return;
  }
  if (items.length === 0) {
    return (
      <div className={css.notFoundReview}>
        There are no reviews for this movie
      </div>
    );
  }

  return (
    <>
      <ul className={css.container}>
        {items.map(({ author, content }, idx) => (
          <li className={css.item} key={idx}>
            <p className={css.name}>{author}</p>
            <p>{content}</p>
          </li>
        ))}
      </ul>
    </>
  );
};
