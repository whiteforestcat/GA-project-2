import React from "react";
import ReactDom from "react-dom";
import styles from "./ImageModal.module.css";

// create Overlay Component here

const Overlay = (props) => {
  return (
    <div className={styles.backdrop} onClick={props.triggerPopUp}>
      <div className={`${styles.board} ${styles.modal}`}>
        <img
          src={props.image}
          style={{ width: "50%" }}
          //   onClick={props.triggerPopUp}
        />
        {/* {window.addEventListener("click", props.triggerPopUp)} */}
      </div>
    </div>
  );
};

const ImageModal = (props) => {
  return (
    <>
      {ReactDom.createPortal(
        <Overlay image={props.image} triggerPopUp={props.triggerPopUp} />,
        document.querySelector("#modal-root")
      )}
    </>
  );
};

export default ImageModal;
