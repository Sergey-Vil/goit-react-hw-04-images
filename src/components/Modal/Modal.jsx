import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import css from './modal.module.css';

export const Modal = ({ img, onCloseModal }) => {
  useEffect(() => {
    const handleKeyEscape = e => {
      if (e.code === 'Escape') {
        onCloseModal();
      }
    };
    window.addEventListener('keydown', handleKeyEscape);

    return () => {
      window.removeEventListener('keydown', handleKeyEscape);
    };
  }, [onCloseModal]);

  const handleOverlayClick = e => {
    // console.log(e.currentTarget);
    // console.log(e.target);
    // console.log(e.currentTarget);
    if (e.target !== e.currentTarget) {
      onCloseModal();
    }
  };

  return (
    <div className={css.overlay} onClick={handleOverlayClick}>
      <div className={css.modal}>
        <img src={img} alt="" />
      </div>
    </div>
  );
};
Modal.propTypes = {
  img: PropTypes.string.isRequired,
  onCloseModal: PropTypes.func.isRequired,
};
