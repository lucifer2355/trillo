import React from "react";

import Nav from "./Nav";
import HotelView from "./HotelView";

const Content = () => {
  return (
    <div className='content'>
      <Nav />

      <main className='hotel-view'>
        <HotelView />
      </main>
    </div>
  );
};

export default Content;
