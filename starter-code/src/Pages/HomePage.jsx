import React, { useState,useEffect } from "react";

const HomePage = (props) => {
    const [store, setStore] = useState([]);

  useEffect(() => {
    props.getData();
  }, [props.storeInput]);

  const enlarge = (source) => {
    setStore(source)
    props.setPopUp(!props.popUp)
  } 

  return (
    <>
      <div className={props.popUp ? "model open" : "model"}>
        <img src={store} onClick={() => props.setPopUp(false)} />
      </div>

      <input
        type="text"
        ref={props.userInputRef}
        id="user-input"
        placeholder="Search Images"
      />
      <button onClick={props.handleClick}>Enter</button>
      <br />
      <div className="gallery">
        {props.image.map((element, index) => (
          <img src={element} key={index} onClick={() => enlarge(element)} />
        ))}
      </div>

      {/* <img src={props.image} /> */}
      <br />
      {props.storeInput && <button>Add to Favourites</button>}
    </>
  );
};

export default HomePage;
