import React from "react";

const Button = (props) => {
  const handleClick = () => {
    props.setFavourites([...props.favourites, props.image]);
  };

  return (
    <>
      <button onClick={handleClick}>&#10084;</button>
    </>
  );
};

export default Button;
