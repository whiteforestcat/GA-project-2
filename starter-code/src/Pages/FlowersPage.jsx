import React from "react";
import Flowers from "../components/Flowers";

const FlowersPage = (props) => {
  return (
    <>
      <Flowers
        popUp={props.popUp}
        setPopUp={props.setPopUp}
        triggerPopUp={props.triggerPopUp}
      />
    </>
  );
};

export default FlowersPage;
