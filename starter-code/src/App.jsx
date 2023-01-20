import React, { useState, useEffect } from "react";

function App() {
  const [userInput, setUserInput] = useState("");
  const [storeInput, setStoreInput] = useState("");
  const [image, setImage] = useState("");

  const handleChange = (e) => {
    setUserInput(e.target.value);
  };

  const handleClick = () => {
    setStoreInput(userInput);
    setUserInput("");
  };

  const getData = () => {
    if (userInput) {
      const url =
        "https://pixabay.com/api/?key=32915227-7fee22a435d92b06b1ec8ed8f&q=" +
        userInput + // why cannot storeInput
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
  }, [userInput]);

  return (
    <>
      <label htmlFor="user-input">Input</label>
      <input
        type="text"
        value={userInput}
        id="user-input"
        onChange={handleChange}
      />
      <button onClick={handleClick}>Enter</button>
      <br />
      <img src={image} />
      <br />
      {storeInput && <button>Add to Favourites</button>}
    </>
  );
}

export default App;
