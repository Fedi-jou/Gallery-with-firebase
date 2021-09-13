import React, { useState } from "react";
import Progressbar from "./Progressbar";

const Uploadform = () => {
  const types = ["image/png", "image/jpeg"];
  const [file, setFile] = useState(null);
  const [error, setError] = useState(null);
  const changeHandler = (e) => {
    let selected = e.target.files[0];
    if (selected && types.includes(selected.type)) {
      setFile(selected);
      setError("");
    } else {
      setFile(null);
      setError("Select a png or jpeg file type , thank you");
    }
  };
  return (
    <form>
      <label>
        <input type="file" onChange={changeHandler} />
        <span>+</span>
      </label>
      <div className="output">
        {error && <div className="error">{error}</div>}
        {file && <div>{file.name}</div>}
        {file && <Progressbar file={file} setFile={setFile} />}
      </div>
    </form>
  );
};

export default Uploadform;
