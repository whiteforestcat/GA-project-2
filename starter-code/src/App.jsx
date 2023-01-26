import React, { useState, useEffect } from "react";
import { useRef } from "react";
import SomeContext from "./context/some-context";
import Favourites from "./components/Favourites";
import NavBar from "./components/NavBar";

// Importing React routers
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import HomePage from "./Pages/HomePage";
import FavouritesPage from "./Pages/FavouritesPage";
import AnimalsPage from "./Pages/AnimalsPage";
import FurniturePage from "./Pages/FurniturePage";
import FlowersPage from "./Pages/FlowersPage";

function App() {
  const userInputRef = useRef();
  const [storeInput, setStoreInput] = useState("");
  const [image, setImage] = useState([]);
  const [favourites, setFavourites] = useState("");
  const [popUp, setPopUp] = useState(false);

  const handleClick = () => {
    setStoreInput(userInputRef.current.value);
    userInputRef.current.value = "";
  };

  const getData = () => {
    if (storeInput) {
      const url =
        "https://pixabay.com/api/?key=32915227-7fee22a435d92b06b1ec8ed8f&q=" +
        storeInput +
        "&image_type=photo";
      fetch(url)
        .then((response) => response.json())
        .then((output) => {
          console.log(output);
          setImage([
            // ...image,  // remove this line to remove previous search
            output.hits[0].largeImageURL,
            output.hits[1].largeImageURL,
            output.hits[2].largeImageURL,
            output.hits[3].largeImageURL,
            output.hits[4].largeImageURL,
            output.hits[5].largeImageURL,
          ]); // change array index here for various images
          // can make use of tags from output.hits[1].tags (tags here is an array)
        });
    }
  };

  const triggerPopUp = () => {
    setPopUp(!popUp);
  };

  return (
    <Router>
      <NavBar />
      <SomeContext.Provider value={{ favourites, setFavourites }}>
        {false && <Favourites />}
        {/* <Favourites /> */}
        {/* // if i refresh page, favourites data is gone, how to store in memory? */}

        <Routes>
          <Route
            path="/"
            element={
              <HomePage
                userInputRef={userInputRef}
                storeInput={storeInput}
                setStoreInput={setStoreInput}
                image={image}
                setImage={setImage}
                handleClick={handleClick}
                getData={getData}
                popUp={popUp}
                setPopUp={setPopUp}
                triggerPopUp={triggerPopUp}
              />
            }
          />
          <Route
            path="/animals"
            element={
              <AnimalsPage
                popUp={popUp}
                setPopUp={setPopUp}
                triggerPopUp={triggerPopUp}
              />
            }
          />
          {/* // why <Animals/> component can still access useContext? */}
          <Route path="/favourites" element={<FavouritesPage />} />
          <Route
            path="/furniture"
            element={
              <FurniturePage
                popUp={popUp}
                setPopUp={setPopUp}
                triggerPopUp={triggerPopUp}
              />
            }
          />
          <Route
            path="/flowers"
            element={
              <FlowersPage
                popUp={popUp}
                setPopUp={setPopUp}
                triggerPopUp={triggerPopUp}
              />
            }
          />
          <Route path="/favourites" element={<Favourites/>}/>
        </Routes>
      </SomeContext.Provider>
    </Router>
  );
}

export default App;
