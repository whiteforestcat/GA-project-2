import React from 'react';

const Button = (props) => {

    const handleClick = () => {
        props.setFavourites([...props.favourites, props.image])
        console.log(props.favourites)

    }
    
    return (
        <>
            <button onClick={handleClick}>Add to Favourites</button>

        </>
    );
};

export default Button;