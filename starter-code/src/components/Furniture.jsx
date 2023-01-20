import React, { useEffect } from "react";
import { useState } from "react";
import useFetch from "../hooks/useFetch";

const Furniture = () => {
  const [state, setState] = useState("");
  const [store, setStore] = useState([]);

  const generateData = () => {
    const url =
      "https://pixabay.com/api/?key=32915227-7fee22a435d92b06b1ec8ed8f&q=" +
      "furniture" +
      "&image_type=photo";
    fetch(url)
      .then((response) => response.json())
      .then((output) => {
        // console.log(output);

        //   setState(output.hits[0].previewURL);
        setState([
          ...state,
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

  const stateArray = [...state];

  return (
    <>
      <h2>Furniture</h2>
      {/* {stateArray.map((element) => {
        <img src={element} />;
      })} */}
      <img src={stateArray[0]} />
      <img src={stateArray[1]} />
      <img src={stateArray[2]} />
      <img src={stateArray[3]} />
      <img src={stateArray[4]} />
      <img src={stateArray[5]} />
    </>
  );
};

export default Furniture;
