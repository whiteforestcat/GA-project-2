import React, { useEffect } from "react";

const HomePage = (props) => {
  useEffect(() => {
    props.getData();
  }, [props.storeInput]);

  return (
    <>
      <label htmlFor="user-input">Input</label>
      <input type="text" ref={props.userInputRef} id="user-input" />
      <button onClick={props.handleClick}>Enter</button>
      <br />
      <img src={props.image} />
      <br />
      {props.storeInput && <button>Add to Favourites</button>}
    </>
  );
};

export default HomePage;
