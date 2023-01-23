import React from 'react';
import ReactDom from "react-dom"


// create Overlay Component here

const Overlay = (props) => {

}




const ImageModal = (props) => {
    return (
        <>
            {ReactDom.createPortal(
                <Overlay/>, document.querySelector("#modal-root")
            )}
        </>
    );
};

export default ImageModal;