import React, { useContext, useState } from 'react';
import SomeContext from '../context/some-context';
import styles from "./Favourites.module.css"

const Favourites = () => {

    const ctx = useContext(SomeContext)
    
    return (
      <div className={styles.gallery}>

        {console.log(ctx.favourites)}
        {ctx.favourites.map((element, id) => (
          <img src={element} key={id}/>
        ))}
        {/* <img src={ctx.favourites} /> */}
      </div>
    );
};

export default Favourites;

// not using this, refer to FavouritesPage.jsx