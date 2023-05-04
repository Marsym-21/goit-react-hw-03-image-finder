import { Component } from 'react';
import css from '../styles.module.css';
import { AiOutlineSearch } from 'react-icons/ai';

class Searchbar extends Component {
  state = {
    name: '',
  };

  checkInput = e => {
    this.setState({ name: e.target.value });
  };

  submitForm = e => {
    e.preventDefault();
    console.log(this.state.name);
    this.setState({ name: '' });
  };

  render() {
    return (
      <header className={css.Searchbar}>
        <form className={css.SearchForm}>
          <button
            type="submit"
            className={css['SearchForm-button']}
            onClick={this.submitForm}
          >
            <span className={css['SearchForm-button-label']}>
              <AiOutlineSearch fill="black" size="20px" />
            </span>
          </button>

          <input
            className={css['SearchForm-input']}
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            onChange={this.checkInput}
            value={this.state.name}
          />
        </form>
      </header>
    );
  }
}

export default Searchbar;
