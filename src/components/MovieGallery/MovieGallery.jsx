import MovieCard from './MovieCard';
import css from 'MovieGallery.module.css';

export const MovieGallery = ({ items }) => {
  return (
    <ul className={css.gallery}>
      {items.map(item => (
        <MovieCard key={item.id} item={item} />
      ))}
    </ul>
  );
};
