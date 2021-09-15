import React, { useEffect } from "react";
import Usefirestore from "../hooks/Usefirestore";
import { projectfirestore } from "../firebase/Config";
import { RiDeleteBin2Fill } from "react-icons/ri";
import { motion } from "framer-motion";

function Imagegrid({ setSelectedimg, setModal, modal }) {
  const { docs } = Usefirestore("images");
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

  const Handlechange = (id) => {
    setModal(false);
    deleteFromFirebase(id);
  };

  const Handleafterdelete = (url) => {
    setSelectedimg(url);
  };
  useEffect(() => {
    setTimeout(() => {
      setSelectedimg(null);
      setModal(true);
    }, 2000);
  }, [Handlechange]);

  return (
    <div className="img-grid">
      {docs &&
        docs.map((doc) => (
          <motion.div
            className="img-wrap"
            key={doc.id}
            layout
            whileHover={{ opacity: 1 }}
            onClick={() => Handleafterdelete(doc.url)}
          >
            {/*  <Deletebox
              open={open}
              setOpen={setOpen}
              deleteFromFirebase={deleteFromFirebase}
              id={doc.id}
            /> */}
            <motion.img
              src={doc.url}
              alt="picture"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
            />
            {/* <span onClick={() => setIcon(false)}>
               <RiDeleteBin2Fill
                className="icon"
                onClick={() => deleteFromFirebase(doc.id)}
              />
              </span> */}

            <span>
              <RiDeleteBin2Fill
                className="icon"
                onClick={() => Handlechange(doc.id)}
              />
            </span>
          </motion.div>
        ))}
    </div>
  );
}

export default Imagegrid;
