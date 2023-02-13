import PropTypes from 'prop-types';
import { ImageGalleryItem } from '../ImageGalleryItem/ImageGalleryItem';
import css from './imageGallery.module.css';

export const ImageGallery = ({ images, handleShowModal }) => {
  return (
    <ul className={css.gallery} onClick={handleShowModal}>
      {images.map(image => (
        <ImageGalleryItem key={image.id} img={image} />
      ))}
    </ul>
  );
};
ImageGallery.propTypes = {
  images: PropTypes.arrayOf(PropTypes.object.isRequired),
};
