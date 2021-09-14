import React from "react";
import Usefirestore from "../hooks/Usefirestore";
import { projectfirestore } from "../firebase/Config";
import { RiDeleteBin2Fill } from "react-icons/ri";
import { motion } from "framer-motion";

function Imagegrid({ setSelectedimg }) {
  const { docs } = Usefirestore("images");
  console.log(docs, "sqdsqd");
  console.log(projectfirestore, "ttt");

  /*   const deleteFromFirebase = (url) => {
    const pictureRef = projectstorage.refFromURL(url);
    pictureRef
      .delete()
      .then(() => {
        docs.filter((image) => image.url !== url);
        alert("Picture is deleted successfully!");
      })
      .catch((err) => {
        console.log(err);
      });
  }; */
  const deleteFromFirebase = (id) => {
    projectfirestore
      .collection("images")
      .doc(id)
      .delete()
      .then(() => {
        alert("Document successfully deleted!");
      })
      .catch((error) => {
        alert("Error removing document: ");
        console.log(error);
      });
  };

  return (
    <div className="img-grid">
      {docs &&
        docs.map((doc) => (
          <motion.div
            className="img-wrap"
            key={doc.id}
            layout
            whileHover={{ opacity: 1 }}
            onClick={() => setSelectedimg(doc.url)}
          >
            <motion.img
              src={doc.url}
              alt="picture"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
            />
            <div>
              {}
              <RiDeleteBin2Fill
                className="icon"
                onClick={() => deleteFromFirebase(doc.id)}
              />
            </div>
          </motion.div>
        ))}
    </div>
  );
}

export default Imagegrid;
