import React, { useContext, useEffect } from "react";
import { useState } from "react";
import useFetch from "../hooks/useFetch";
import SomeContext from "../context/some-context";
import Button from "./Button";

const Flowers = () => {

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
          output.hits[0].previewURL,
          output.hits[1].previewURL,
          output.hits[2].previewURL,
          output.hits[3].previewURL,
          output.hits[4].previewURL,
          output.hits[5].previewURL,
        ]);
      });
  };

  useEffect(() => {
    generateData();
  }, []);


  return (
    <>
      <h2>Flowers</h2>
      {/* {stateArray.map((element) => {
        <img src={element} />;
      })} */}
      <div>
        <img src={image[0]} />
        <Button
          favourites={ctx.favourites}
          setFavourites={ctx.setFavourites}
          image={image[0]}
        />
      </div>
      <img src={image[1]} />
      <img src={image[2]} />
      <img src={image[3]} />
      <img src={image[4]} />
      <img src={image[5]} />
    </>
  );
};

export default Flowers;
