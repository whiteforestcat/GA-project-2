import React, { useContext } from "react";
import SomeContext from "../context/some-context";

const FavouritesPage = () => {
  const ctx = useContext(SomeContext);

  return (
    <div className="gallery">
      <h2>Favourites</h2>
      {console.log(ctx.favourites)}
      <div className="card">
        {ctx.favourites.map((element, id) => (
          <img src={element} key={id} />
        ))}
        {/* <img src={ctx.favourites} /> */}
      </div>
    </div>
  );
};

export default FavouritesPage;
