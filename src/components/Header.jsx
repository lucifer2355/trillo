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

      <nav className='user-nav'>
        <div className='user-nav__icon-box'>
          <svg className='user-nav__icon'>
            <use xlinkHref='/images/sprite.svg#icon-bookmark'></use>
          </svg>
          <span className='user-nav__notification'>7</span>
        </div>
        <div className='user-nav__icon-box'>
          <svg className='user-nav__icon'>
            <use xlinkHref='/images/sprite.svg#icon-chat'></use>
          </svg>
          <span className='user-nav__notification'>13</span>
        </div>
        <div className='user-nav__user'>
          <img
            src='/images/user.jpg'
            alt='User Photo'
            className='user-nav__user-photo'
          />
          <span className='user-nav__user-name'>Jonas</span>
        </div>
      </nav>
    </header>
  );
};

export default Header;
