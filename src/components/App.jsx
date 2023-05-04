import { Component } from 'react';
import css from './styles.module.css';
import Searchbar from './Searchbar';
import ImageGallery from './ImageGallery';

export class App extends Component {
  state = {};
  render() {
    return (
      <div className={css.App}>
        <Searchbar />
        <ImageGallery />
      </div>
    );
  }
}
