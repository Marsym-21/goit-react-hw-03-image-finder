import { Component } from 'react';
import css from '../styles.module.css';
class ImageGalleryItem extends Component {
  state = {};
  render() {
    return (
      <li className={css.ImageGalleryItem}>
        <img src="" alt="" />
      </li>
    );
  }
}

export default ImageGalleryItem;
