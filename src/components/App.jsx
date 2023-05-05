import { Component } from 'react';
import css from './styles.module.css';
import Searchbar from './Searchbar';
import ImageGallery from './ImageGallery';
import Button from './Button';
import Modal from './Modal';

export class App extends Component {
  state = {
    name: '',
    perpage: 12,
    hidden: false,
    image:
      'https://pixabay.com/get/gaacce6a4a676eb9e054d5e38260ebdcf23d3573c6c898901b372305eb1b28dd1eaf9e4b892b6486a683395b51db74816c12aebb60a4ced833d7017206ae4c40e_1280.jpg',
    showModal: false,
  };

  getNameImage = name => {
    this.setState(prevState => {
      if (prevState.name !== name) {
        return { name, perpage: 12 };
      }
    });
  };

  renderGallery = () => {
    this.setState({ hidden: true });
  };

  loadMore = () => {
    this.setState(prevState => {
      return { perpage: prevState.perpage + 12 };
    });
  };

  getModalImage = e => {
    console.log(e.target);
    return this.setState({ image: e.target.id, showModal: true });
  };

  closeModal = () => {
    return this.setState({ showModal: false });
  };

  render() {
    const { name, hidden, perpage, image, showModal } = this.state;
    return (
      <div className={css.App}>
        {showModal && <Modal image={image} closeModal={this.closeModal} />}
        <Searchbar onSubmit={this.getNameImage} />
        <ImageGallery
          name={name}
          renderGallery={this.renderGallery}
          perpage={perpage}
          getModalImage={this.getModalImage}
        />
        {hidden && <Button onClick={this.loadMore} />}
      </div>
    );
  }
}
