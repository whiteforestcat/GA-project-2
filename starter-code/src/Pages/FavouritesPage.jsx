import React, { useContext } from 'react';
import SomeContext from '../context/some-context';

const FavouritesPage = () => {

    const ctx = useContext(SomeContext)

    return (
        <>
            <img src={ctx.favourites} />
        </>
    );
};

export default FavouritesPage;