import React from "react";

const Header = () => {
  return (
    <header className='header'>
      <img src='./images/logo.png' alt='trillo logo' className='logo' />

      <form action='#' className='search'>
        <input
          type='text'
          className='search__input'
          placeholder='Search hotels'
        />
        <button>
          <svg className='search__icon'>
            <use xlinkHref='/images/sprite.svg#icon-magnifying-glass'></use>
          </svg>
        </button>
      </form>
    </header>
  );
};

export default Header;
