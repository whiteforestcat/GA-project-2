import React, { useContext, useEffect } from "react";
import { useState } from "react";
import useFetch from "../hooks/useFetch";
import Button from "./Button";
import SomeContext from "../context/some-context";
import ImageModal from "../modals/ImageModal";

const Animals = () => {
  const [image, setImage] = useState([]);
  const [largeImage, setLargeImage] = useState([]);
  const [store, setStore] = useState([]);
  const [popUp, setPopUp] = useState(false);

  const ctx = useContext(SomeContext);

  const generateData = () => {
    const url =
      "https://pixabay.com/api/?key=32915227-7fee22a435d92b06b1ec8ed8f&q=" +
      "animal" +
      "&image_type=photo";
    fetch(url)
      .then((response) => response.json())
      .then((output) => {
        // console.log(output);

        //   setState(output.hits[0].previewURL);
        setImage([
          ...image,
          output.hits[0].previewURL,
          output.hits[1].previewURL,
          output.hits[2].previewURL,
          output.hits[3].previewURL,
          output.hits[4].previewURL,
          output.hits[5].previewURL,
        ]);

        setLargeImage([
          ...largeImage,
          output.hits[0].largeImageURL,
          output.hits[1].largeImageURL,
          output.hits[2].largeImageURL,
          output.hits[3].largeImageURL,
          output.hits[4].largeImageURL,
          output.hits[5].largeImageUR,
        ]);
      });
  };

  useEffect(() => {
    generateData();
  }, []);

  const triggerPopUp = () => {
    setPopUp(!popUp);
  };

  return (
    <>
      <h2>Animals</h2>
      {/* {stateArray.map((element) => {
        <img src={element} />;
      })} */}
      <div>
        <img src={image[0]} onClick={triggerPopUp} />
        <Button
          favourites={ctx.favourites}
          setFavourites={ctx.setFavourites}
          image={image[0]}
        />
        {popUp && (
          <ImageModal image={largeImage[0]} triggerPopUp={triggerPopUp} />
        )}
      </div>
      <div>
        <img src={image[1]} onClick={triggerPopUp} />
        <Button
          favourites={ctx.favourites}
          setFavourites={ctx.setFavourites}
          image={image[1]}
        />
        {popUp && (
          <ImageModal image={largeImage[2]} triggerPopUp={triggerPopUp} />
        )}
      </div>
      <img src={image[1]} />
      <img src={image[2]} />
      <img src={image[3]} />
      <img src={image[4]} />
      <img src={image[5]} />
    </>
  );
};

export default Animals;
