import React, { useContext, useEffect } from "react";
import { useState } from "react";
import Button from "./Button";
import SomeContext from "../context/some-context";

const Animals = (props) => {
  const [image, setImage] = useState([]);
  const [store, setStore] = useState([]);

  const ctx = useContext(SomeContext);

  const generateData = () => {
    const url =
      "https://pixabay.com/api/?key=32915227-7fee22a435d92b06b1ec8ed8f&q=" +
      "animals" +
      "&image_type=photo";
    fetch(url)
      .then((response) => response.json())
      .then((output) => {
        // console.log(output);

        //   setState(output.hits[0].previewURL);
        setImage([
          ...image,
          output.hits[0].largeImageURL,
          output.hits[1].largeImageURL,
          output.hits[2].largeImageURL,
          output.hits[3].largeImageURL,
          output.hits[4].largeImageURL,
          output.hits[5].largeImageURL,
        ]);
      });
  };

  useEffect(() => {
    generateData();
  }, []);

  const enlarge = (source) => {
    setStore(source);
    props.setPopUp(!props.popUp);
  };

  return (
    <div className="gallery">
      <h2>Animals</h2>
      {/* {stateArray.map((element) => {
        <img src={element} />;
      })} */}

      <div className={props.popUp ? "model open" : "model"}>
        <img src={store} onClick={() => props.setPopUp(false)} />
      </div>

      <div className="card">
        {image.map((element, index) => {
          return (
            <div key={index}>
              <img src={element} onClick={() => enlarge(element)} />
              <Button
                favourites={ctx.favourites}
                setFavourites={ctx.setFavourites}
                image={element}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Animals;
