import React, { useState } from "react";
import Imagegrid from "./comps/Imagegrid";
import Modal from "./comps/Modal";
import Title from "./comps/Title";
import Uploadform from "./comps/Uploadform";

function App() {
  const [selectedimg, setSelectedimg] = useState(null);
  return (
    <div className="App">
      <Title />
      <Uploadform />
      <Imagegrid setSelectedimg={setSelectedimg} />
      {selectedimg && (
        <Modal selectedimg={selectedimg} setSelectedimg={setSelectedimg} />
      )}
    </div>
  );
}

export default App;
