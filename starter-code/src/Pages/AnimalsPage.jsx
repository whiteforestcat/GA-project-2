import React from 'react';
import Animals from '../components/Animals';

const AnimalsPage = (props) => {
    return (
      <>
        <Animals
          popUp={props.popUp}
          setPopUp={props.setPopUp}
          triggerPopUp={props.triggerPopUp}
        />
      </>
    );
};

export default AnimalsPage;