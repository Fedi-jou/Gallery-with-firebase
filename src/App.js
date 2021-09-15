import React, { useState } from "react";
import Imagegrid from "./comps/Imagegrid";
import Modal from "./comps/Modal";
import Title from "./comps/Title";
import Uploadform from "./comps/Uploadform";

function App() {
  const [selectedimg, setSelectedimg] = useState(null);
  const [icon, setIcon] = useState(true);
  return (
    <div className="App">
      <Title />
      <Uploadform />
      <Imagegrid setSelectedimg={setSelectedimg} setIcon={setIcon} />
      {selectedimg && icon && (
        <Modal selectedimg={selectedimg} setSelectedimg={setSelectedimg} />
      )}
    </div>
  );
}

export default App;
