import { Component } from 'react';
import css from '../styles.module.css';
import ImageGalleryItem from 'components/ImageGalleryItem';
class ImageGallery extends Component {
  state = {};
  render() {
    return (
      <ul className={css.ImageGallery}>
        <ImageGalleryItem />
      </ul>
    );
  }
}

export default ImageGallery;
