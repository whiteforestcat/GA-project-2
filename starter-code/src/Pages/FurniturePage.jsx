import React from "react";
import Furniture from "../components/Furniture";

const FurniturePage = (props) => {
  return (
    <>
      <Furniture
        popUp={props.popUp}
        setPopUp={props.setPopUp}
        triggerPopUp={props.triggerPopUp}
      />
    </>
  );
};

export default FurniturePage;
