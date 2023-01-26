import React, { useState, useEffect, useContext } from "react";
import Button from "../components/Button";
import SomeContext from "../context/some-context";

const HomePage = (props) => {
  const [store, setStore] = useState([]);

  const ctx = useContext(SomeContext);

  useEffect(() => {
    props.getData();
  }, [props.storeInput]);

  const enlarge = (source) => {
    setStore(source);
    props.setPopUp(!props.popUp);
  };

  return (
    <div>
      <div className={props.popUp ? "model open" : "model"}>
        <img src={store} onClick={() => props.setPopUp(false)} />
      </div>

      <input
        type="text"
        ref={props.userInputRef}
        id="user-input"
        placeholder="Search Images"
      />
      <button onClick={props.handleClick}>Search</button>
      <br />
      
        {props.image.map((element, index) => (
          <div className="card" key={index}>
            <img src={element} onClick={() => enlarge(element)} />
            <Button
              favourites={ctx.favourites}
              setFavourites={ctx.setFavourites}
              image={element}
            />
          </div>
        ))}
    

      {/* <img src={props.image} /> */}
    </div>
  );
};

export default HomePage;
