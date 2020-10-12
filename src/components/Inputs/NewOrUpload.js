import React, { useRef } from "react";
import FadeIn from "react-fade-in";

export default function NewOrUpload() {
  const fileInput = useRef(null);

  return (
    <div className="inputbox">
      <FadeIn delay={250} transitionDuration={250}>
        <button className="new-button">design your own tournament!</button>
        <h3 className="or">or</h3>
        <button
          className="import-button"
          onClick={() => fileInput.current.click()}
        >
          import one
        </button>
      </FadeIn>
      <form hidden>
        <input ref={fileInput} type="file"></input>
      </form>
    </div>
  );
}
