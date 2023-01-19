import css from './Thumbnail.module.css';
import PropTypes from 'prop-types';

const Thumbnail = ({ noText }) => {
  return (
    <div className={css.container}>
    </div>
  );
};
Thumbnail.propTypes = {
  noText: PropTypes.string,
};

export default Thumbnail;