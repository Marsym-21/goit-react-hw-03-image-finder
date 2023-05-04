import { Component } from 'react';
import css from './styles.module.css';
import Searchbar from './Searchbar';
import ImageGallery from './ImageGallery';

export class App extends Component {
  state = {
    name: '',
  };

  getNameImage = name => {
    this.setState({ name });
  };

  render() {
    return (
      <div className={css.App}>
        <Searchbar onSubmit={this.getNameImage} />
        <ImageGallery name={this.state.name} />
      </div>
    );
  }
}
