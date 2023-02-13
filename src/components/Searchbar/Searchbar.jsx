import PropTypes from 'prop-types';
import css from './searchbar.module.css';

export const Searchbar = ({ onSubmit }) => {
  return (
    <div>
      <header className={css.searchbar}>
        <form className="form" onSubmit={onSubmit}>
          <button type="submit" className="button">
            <span className="button-label">Search</span>
          </button>

          <input
            className="input"
            name="search"
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
          />
        </form>
      </header>
    </div>
  );
};
Searchbar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
