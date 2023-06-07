import React, { useRef } from "react";
import "./css/ImageUpload.css";

const ImageUpload = (props) => {
  const filePickerRef = useRef();

  const pickedHandler = (event) => {
    console.log(event.target);
  };

  const pickImageHandler = () => {
    filePickerRef.current.click();
  };

  return (
    <div className="form-control">
      <input
        id={props.id}
        ref={filePickerRef}
        style={{ display: "none" }}
        type="file"
        accept=".jpg,.png,.jpeg"
        onChange={pickedHandler}
      />
      <div className={`image-upload ${props.center && "center"}`}>
        <div className="image-upload__preview">
          <img src="" alt="Preview" />
        </div>
        <div className="btn-container" type="button" onClick={pickImageHandler}>
          <button className="btn">PICK IMAGE</button>
        </div>
      </div>
    </div>
  );
};

export default ImageUpload;
