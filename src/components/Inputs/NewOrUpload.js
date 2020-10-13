import React, { useRef } from "react";
import FadeIn from "react-fade-in";

export default function NewOrUpload(props) {
  const fileInput = useRef(null);
  const fileReader = new FileReader();

  const handleFileRead = (e) => {
    const content = fileReader.result;
    console.log(JSON.parse(content));
  };

  const handleFileChosen = (file) => {
    fileReader.onloadend = handleFileRead;
    fileReader.readAsText(file);
  };

  return (
    <div className="inputbox">
      <FadeIn delay={250} transitionDuration={250}>
        <button className="new-button" onClick={props.click}>
          design your own tournament!
        </button>
        <h3 className="or">or</h3>
        <button
          className="import-button"
          onClick={() => fileInput.current.click()}
        >
          import one
        </button>
      </FadeIn>
      <form hidden>
        <input
          ref={fileInput}
          type="file"
          onChange={(e) => handleFileChosen(e.target.files[0])}
        ></input>
      </form>
    </div>
  );
}
