import React, { useState } from "react";

const Button = (props) => {
  const [heartCheck, setHeartCheck] = useState(false);
  const handleClick = () => {
    props.setFavourites([...props.favourites, props.image]);
    setHeartCheck(!heartCheck)
  };

  return (
    <>
      {heartCheck ? (
        <button onClick={handleClick}>
          &#10084;
        </button>
      ) : (
        <button onClick={handleClick}>
          &#9825;
        </button>
      )}
    </>
  );
};

export default Button;
