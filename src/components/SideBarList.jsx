import React from "react";

const SideBarList = ({ iconName, title, activeClass }) => {
  return (
    <li className={`side-nav__item ${activeClass}`}>
      <a href='#' className='side-nav__link'>
        <svg className='side-nav__icon'>
          <use xlinkHref={`/images/sprite.svg#icon-${iconName}`}></use>
        </svg>
        <span>{title}</span>
      </a>
    </li>
  );
};

export default SideBarList;
