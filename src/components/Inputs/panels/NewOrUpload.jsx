import React, { useRef } from 'react';
import FadeIn from 'react-fade-in';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { uploadState } from '../../../store/actions/generalActions';

export default function NewOrUpload({ nextInput }) {
  const fileInput = useRef(null);
  const fileReader = new FileReader();
  const dispatch = useDispatch();

  const handleFileRead = () => {
    const jsonContent = JSON.parse(fileReader.result);
    dispatch(uploadState(jsonContent));
  };

  const handleFileChosen = (file) => {
    fileReader.onloadend = handleFileRead;
    fileReader.readAsText(file);
  };

  return (
    <div>
      <FadeIn delay={250} transitionDuration={250} className="inputbox">
        <button type="button" className="new-button" onClick={nextInput}>
          Design your own tournament!
        </button>
        <div className="upload-container">
          <h3 className="or">or</h3>
          <button type="button" className="import-button" onClick={() => fileInput.current.click()}>
            import one from file
          </button>
        </div>
      </FadeIn>
      <form hidden>
        <input ref={fileInput} type="file" onChange={(e) => handleFileChosen(e.target.files[0])} />
      </form>
    </div>
  );
}

NewOrUpload.propTypes = {
  nextInput: PropTypes.func.isRequired,
};
