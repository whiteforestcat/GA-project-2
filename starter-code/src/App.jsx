import React, { useState, useEffect } from "react";
import { useRef } from "react";
import Animals from "./components/Animals";
import Furniture from "./components/Furniture";
import Flowers from "./components/Flowers";
import SomeContext from "./context/some-context";
import Favourites from "./components/Favourites";

// Importing React routers
import { Route, Routes, Navigate } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import FavouritesPage from "./pages/FavouritesPage";

function App() {
  const userInputRef = useRef();
  const [storeInput, setStoreInput] = useState("");
  const [image, setImage] = useState("");
  const [favourites, setFavourites] = useState([]);

  const handleClick = () => {
    setStoreInput(userInputRef.current.value);
    userInputRef.current.value = "";
  };

  const getData = () => {
    if (storeInput) {
      const url =
        "https://pixabay.com/api/?key=32915227-7fee22a435d92b06b1ec8ed8f&q=" +
        storeInput + // why cannot storeInput
        "&image_type=photo";
      fetch(url)
        .then((response) => response.json())
        .then((output) => {
          console.log(output);
          setImage(output.hits[1].previewURL); // change array index here for various images
          // can make use of tags from output.hits[1].tags (tags here is an array)
        });
    }
  };

  useEffect(() => {
    getData();
  }, [storeInput]);

  return (
    <>
      <SomeContext.Provider value={{ favourites, setFavourites }}>
        <label htmlFor="user-input">Input</label>
        <input type="text" ref={userInputRef} id="user-input" />
        <button onClick={handleClick}>Enter</button>
        <br />
        <img src={image} />
        <br />
        {storeInput && <button>Add to Favourites</button>}

        <Animals />
        <Furniture />
        <Flowers />

        {false && <Favourites />}
      </SomeContext.Provider>

    </>
  );
}

export default App;
