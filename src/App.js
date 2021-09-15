import React, { useState, useEffect } from "react";
import Imagegrid from "./comps/Imagegrid";
import Modal from "./comps/Modal";
import Title from "./comps/Title";
import Uploadform from "./comps/Uploadform";

function App() {
  const [selectedimg, setSelectedimg] = useState(null);
  const [modal, setModal] = useState(true);

  return (
    <div className="App">
      <Title />
      <Uploadform />
      <Imagegrid
        setSelectedimg={setSelectedimg}
        setModal={setModal}
        modal={modal}
      />
      {selectedimg && modal && (
        <Modal selectedimg={selectedimg} setSelectedimg={setSelectedimg} />
      )}
    </div>
  );
}

export default App;
