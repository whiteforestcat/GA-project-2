import React, { useContext, useState } from 'react';
import SomeContext from '../context/some-context';

const Favourites = () => {

    const ctx = useContext(SomeContext)
    
    return (
      <>
        <img src={ctx.favourites} />
      </>
    );
};

export default Favourites;