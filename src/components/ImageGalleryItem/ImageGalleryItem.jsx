import { useState } from 'react';
import PropTypes from 'prop-types';
import Modal from '../Modal';

import s from './ImageGalleryItem.module.css';

function ImageGalleryItem({ webformatURL, tags, largeImageURL }) {
  const [showModal, setShowModal] = useState(false);

  const toggleModel = () => {
    setShowModal(prevState => !prevState);
  };

  return (
    <>
      <li className={s.ImageGalleryItem} onClick={toggleModel}>
        <img
          className={s.ImageGalleryItemImage}
          src={webformatURL}
          alt={tags}
        />
      </li>
      {showModal && (
        <Modal onClose={toggleModel}>
          <img src={largeImageURL} alt={tags} />
        </Modal>
      )}
    </>
  );
}

ImageGalleryItem.propTypes = {
  webformatURL: PropTypes.string.isRequired,
  largeImageURL: PropTypes.string.isRequired,
  tags: PropTypes.string.isRequired,
};

export default ImageGalleryItem;
