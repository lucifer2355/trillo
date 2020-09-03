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
        <button></button>
      </form>
    </header>
  );
};

export default Header;
