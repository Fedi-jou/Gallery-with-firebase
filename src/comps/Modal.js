import React from "react";
import { motion } from "framer-motion";

function Modal({ selectedimg, setSelectedimg }) {
  const Handleclick = (e) => {
    if (e.target.classList.contains("backdrop")) {
      setSelectedimg(null);
    }
  };
  return (
    <motion.div
      className="backdrop"
      onClick={Handleclick}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <motion.img
        src={selectedimg}
        alt="full size picture"
        initial={{ y: "-100vh" }}
        animate={{ y: 0 }}
      />
    </motion.div>
  );
}

export default Modal;
