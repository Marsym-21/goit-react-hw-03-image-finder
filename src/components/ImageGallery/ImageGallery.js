import { Component } from 'react';
import css from '../styles.module.css';
import ImageGalleryItem from 'components/ImageGalleryItem';
class ImageGallery extends Component {
  state = {};

  render() {
    return (
      <ul className={css.ImageGallery}>
        <ImageGalleryItem name={this.props.name} />
      </ul>
    );
  }
}

export default ImageGallery;
