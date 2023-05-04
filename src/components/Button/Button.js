import { Component } from 'react';
import css from '../styles.module.css';

class Button extends Component {
  state = {};
  render() {
    return (
      <button type="button" className={css.Button}>
        Load more
      </button>
    );
  }
}

export default Button;
