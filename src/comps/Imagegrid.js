import React from "react";
import Usefirestore from "../hooks/Usefirestore";
import { motion } from "framer-motion";

function Imagegrid({ setSelectedimg }) {
  const { docs } = Usefirestore("images");
  console.log(docs);
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
          </motion.div>
        ))}
    </div>
  );
}

export default Imagegrid;
