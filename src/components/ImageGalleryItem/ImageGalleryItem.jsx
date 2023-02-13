import css from './imageGalleryItem.module.css';
import PropTypes from 'prop-types';
import { Modal } from '../Modal/Modal';
import { useState } from 'react';

export const ImageGalleryItem = ({ img }) => {
  const [showModal, setShowModal] = useState(false);

  const handleShowModal = () => {
    setShowModal(!showModal);
  };

  const webformatURL = img.webformatURL;
  const tags = img.tags;
  const largeImageURL = img.largeImageURL;
  return (
    <>
      <li className={css.gallery_item} onClick={handleShowModal}>
        <img className={css.gallery_image} src={webformatURL} alt={tags} />
        {showModal ? (
          <Modal img={largeImageURL} onCloseModal={handleShowModal} />
        ) : null}
      </li>
    </>
  );
};

ImageGalleryItem.propTypes = {
  img: PropTypes.object.isRequired,
};
