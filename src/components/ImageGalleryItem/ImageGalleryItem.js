import { Component } from 'react';
import css from '../styles.module.css';
// import axios from 'axios';
class ImageGalleryItem extends Component {
  state = {
    APIkey: '34491420-8cbbe56c75e64d038cb2665d9',
    BASEURL: '/https://pixabay.com/api/?key=',
    isLoading: false,
    error: 'error',
    data: [],
  };

  async componentDidUpdate(prevProps, prevState) {
    // const { APIkey, BASEURL, data } = this.state;
    const { name } = this.props;
    if (prevProps.name !== name) {
      console.log(prevProps.name);
      console.log(name);
    }
    // console.log(name);

    // ${BASEURL}${APIkey}&q=${name}&image_type=photo
    // try {
    //     const response = await axios.get(
    //       `${BASEURL}${APIkey}&q=${name}&image_type=photo`
    //     );
    //     console.log(response);
    //     this.setState({ data: response.data });
    //     console.log(data);
    // } catch (error) {
    //   this.setState({ error });
    // } finally {
    //   this.setState({ isLoading: false });
    // }
  }

  render() {
    return (
      <li className={css.ImageGalleryItem}>
        <img className={css['ImageGalleryItem-image']} src="" alt="" />
      </li>
    );
  }
}

export default ImageGalleryItem;
