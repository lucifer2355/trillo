import React from "react";
import SideBarList from "./SideBarList";

const Nav = () => {
  return (
    <nav className='sidebar'>
      <ul className='side-nav'>
        <SideBarList iconName='home' title='Hotel' />
        <SideBarList iconName='aircraft-take-off' title='Flight' />
        <SideBarList iconName='key' title='Car rental' />
        <SideBarList iconName='map' title='Tours' />
      </ul>

      <div className='legal'>&copy; 2020 by trillo. All right reserved.</div>
    </nav>
  );
};

export default Nav;
