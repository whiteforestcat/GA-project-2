import React, { useContext, useEffect } from "react";
import { useState } from "react";
import useFetch from "../hooks/useFetch";
import SomeContext from "../context/some-context";
import Button from "./Button";
import ImageModal from "../modals/ImageModal";

const Flowers = (props) => {

  const ctx = useContext(SomeContext)

  const [image, setImage] = useState("");
  const [store, setStore] = useState([]);

  const generateData = () => {
    const url =
      "https://pixabay.com/api/?key=32915227-7fee22a435d92b06b1ec8ed8f&q=" +
      "flowers" +
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
      <h2>Flowers</h2>
      {/* {stateArray.map((element) => {
        <img src={element} />;
      })} */}
      <div className={props.popUp ? "model open" : "model"}>
        <img src={store} onClick={() => props.setPopUp(false)} />
      </div>

      <div>
        <img src={image[0]} onClick={() => enlarge(image[0])} />
        <Button
          favourites={ctx.favourites}
          setFavourites={ctx.setFavourites}
          image={image[0]}
        />
      </div>

      <img src={image[1]} onClick={() => enlarge(image[1])} />
      <img src={image[2]} onClick={() => enlarge(image[2])} />
      <img src={image[3]} onClick={() => enlarge(image[3])} />
      <img src={image[4]} onClick={() => enlarge(image[4])} />
      <img src={image[5]} onClick={() => enlarge(image[5])} />
    </div>
  );
};

export default Flowers;
