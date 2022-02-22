import React from "react";
import { createPortal } from "react-dom";
import ThankYouDialog from "./ThankYouDialog";

const Portal = (props) => {
  return createPortal(props.children, document.getElementById("portal"));
};

export default function Example() {
  return (
    <div onClick={() => console.log("div")}>
      <Portal>
        <ThankYouDialog />
      </Portal>
      <div style={{ position: "absolute" }}>
        <button>하하하</button>
      </div>
    </div>
  );
}
