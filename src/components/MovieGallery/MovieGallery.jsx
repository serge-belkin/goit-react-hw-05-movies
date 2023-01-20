import MovieCard from './MovieCard';
import css from './MovieGallery.module.css';
import PropTypes from 'prop-types';

const MovieGallery = ({ items }) => {
  return (
    <ul className={css.gallery}>
      {items.map(item => (
        <MovieCard key={item.id} item={item} />
      ))}
    </ul>
  );
};

MovieGallery.propTypes = {
  items: PropTypes.arrayOf(PropTypes.object),
};

export default MovieGallery;