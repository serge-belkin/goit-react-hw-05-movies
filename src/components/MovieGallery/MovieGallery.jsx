import MovieCard from './MovieCard';
import css from 'MovieGallery.module.css';

 const MovieGallery = ({ items }) => {
  return (
    <ul className={css.gallery}>
      {items.map(item => (
        <MovieCard key={item.id} item={item} />
      ))}
    </ul>
  );
};

export default MovieGallery;